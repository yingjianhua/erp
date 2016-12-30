package irille.pss.cst;

import irille.gl.frm.FrmPendingDAO;
import irille.gl.gl.GlDaybook;
import irille.gl.gl.GlNoteDAO;
import irille.pub.Log;
import irille.pub.idu.IduApprove;
import irille.pub.idu.IduDel;
import irille.pub.idu.IduInsLines;
import irille.pub.idu.IduUnapprove;
import irille.pub.svr.Env;

public class CstPurInvoiceRedDAO {
	public static final Log LOG = new Log(CstPurInvoiceRedDAO.class);

	public static class Ins extends IduInsLines<Ins, CstPurInvoiceRed, CstPurInvoiceRedLine> {
		public String _formIds;

		@Override
		public void before() {
			super.before();
			initBill(getB());
			setLines(CstPub.insInvoice(getB(), CstPurInvoiceRedLine.class, _formIds));
		}

		//取消默认的新增处理
		public void run() {
		}

		@Override
		public void after() {
			super.after();
			insLineTid(getB(), getLines());
		}

	}

	public static class Del extends IduDel<Del, CstPurInvoiceRed> {

		@Override
		public void before() {
			super.before();
			assertStatusIsInit(getB());
			CstPub.delInvoice(getB());
			delLineTid(getB(), CstPurInvoiceRedLine.class);
		}

	}

	public static class Approve extends IduApprove<Approve, CstPurInvoiceRed> {

		@Override
		public void run() {
			super.run();
			CstPurInvoiceRed sale = loadThisBeanAndLock();
			assertStatusIsInit(sale);
			sale.stStatus(STATUS.TALLY_ABLE);
			sale.setApprBy(getUser().getPkey());
			sale.setApprTime(Env.INST.getWorkDate());
			sale.upd();
			setB(sale);
			// 待处理
			FrmPendingDAO.ins(getB(), GlDaybook.TB);
		}
	}

	public static class Unapprove extends IduUnapprove<Unapprove, CstPurInvoiceRed> {

		@Override
		public void run() {
			super.run();
			CstPurInvoiceRed sale = loadThisBeanAndLock();
			assertStatusIsTally(sale);
			//取消NOTE
			GlNoteDAO.delByBill(sale.gtLongPkey());
			sale.stStatus(STATUS_INIT);
			sale.setApprBy(null);
			sale.setApprTime(null);
			sale.upd();
			setB(sale);
			// 待处理
			FrmPendingDAO.del(getB(), GlDaybook.TB);
		}
	}

}
