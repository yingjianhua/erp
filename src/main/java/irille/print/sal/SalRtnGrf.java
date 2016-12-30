package irille.print.sal;

import irille.core.sys.SysCom;
import irille.core.sys.SysEm;
import irille.core.sys.SysOrg;
import irille.core.sys.SysPerson;
import irille.core.sys.SysUser;
import irille.gl.gs.GsGoods;
import irille.pss.sal.SalRtn;
import irille.pss.sal.SalRtnLine;
import irille.pub.print.CrtJsp;
import irille.pub.print.GrfForm;
import irille.pub.print.Sheet;
import irille.pub.print.SheetPrint;
import irille.pub.print.SheetVarsInf;
import irille.pub.print.Size;
import irille.pub.print.Grfs.GrfGroupFooter;
import irille.pub.print.Grfs.GrfGroupHeader;
import irille.pub.print.Grfs.GrfItem;
import irille.pub.print.Grfs.GrfItemsGroup;
import irille.pub.print.Grfs.GrfItemsSection;
import irille.pub.print.Grfs.GrfSectionItem;
import irille.pub.print.Sheets.SheetGap;
import irille.pub.view.VFld;
import irille.pub.view.VFlds;
import irille.pub.view.VFld.OAlign;

public class SalRtnGrf extends GrfForm implements SheetVarsInf {

	// 设置需要的参数
	static {
		SalRtn.TB.getCode();
		SalRtnLine.TB.getCode();
		SysOrg.TB.getCode();
		SysCom.TB.getCode();
		SysUser.TB.getCode();
		SysEm.TB.getCode();
		SysPerson.TB.getCode();
	}
	// 设置宽度和边距
	private static final double WIDTH = 21.35;
	private static final double HEIGHT = 13.95;
	private static final double TOP = 1.2;
	private static final double BOTTOM = 0;
	private static final double LEFT = 1.6;
	private static final double RIGHT = 0.8;
	private static final double BOXWIDTH = WIDTH - LEFT - RIGHT;
	private static final double BOXBOTTOM = HEIGHT - TOP - BOTTOM;
	// 设置静态全局常量
	private static final SalRtn.T T = SalRtn.T.PKEY;
	private static final SalRtnLine.T L = SalRtnLine.T.PKEY;
	private static final SysOrg.T ORG = SysOrg.T.PKEY;
	private static final SysCom.T COM = SysCom.T.PKEY;
	private static final SysUser.T OPT = SysUser.T.PKEY;
	private static final SysEm.T EM = SysEm.T.PKEY;
	private static final SysPerson.T P = SysPerson.T.PKEY;
	private static final GsGoods.T GOODS = GsGoods.T.PKEY;

	// 设置jsp需要的参数
	public static void main(String[] args) {
		String mainParams[] = toCodes(new VFlds(T.ORG, T.CODE, T.CUST, T.CUST_NAME, T.STATUS, T.AMT, 
				T.AMT_COST, T.WAREHOUSE, T.APPR_BY, T.APPR_TIME, T.CREATED_BY, T.CREATED_TIME, T.OPERATOR, T.REM), 
				new VFlds(T.ORG, ORG.COM, COM.NAME), 
				new VFlds(T.ORG, ORG.COM, COM.ADDR),
				new VFlds(T.ORG, ORG.COM, COM.TEL1), 
				new VFlds(T.ORG, ORG.COM, COM.FAX), 
				new VFlds(T.OPERATOR, OPT.TB_OBJ, EM.PERSON, P.PE_MOBILE));
		String linesParmas[] = toCodes(new VFlds(L.QTY, L.UOM, L.PRICE, L.AMT), 
				new VFlds(L.GOODS, GOODS.CODE),
				new VFlds(L.GOODS, GOODS.NAME), 
				new VFlds(L.GOODS, GOODS.SPEC));
		// 生成jsp文件run()
		new CrtJsp(mainParams, linesParmas, SalRtn.class, SalRtnLine.class).run();
	}

	// 设置报表头的参数
	public SalRtnGrf() {
		super(SalRtn.class, null, 8, new VFlds(T.ORG, T.CODE, T.CUST, T.CUST_NAME, T.STATUS, T.AMT, T.AMT_COST, T.WAREHOUSE, T.APPR_BY, T.APPR_TIME, T.CREATED_BY, T.CREATED_TIME, T.OPERATOR, T.REM, COM.TEL1, COM.ADDR, COM.FAX));
		getItemsParameter().AddItem_Name(toCode(new VFlds(T.ORG, ORG.COM, COM.ADDR)));// 组合的外键
		getItemsParameter().AddItem_Name(toCode(new VFlds(T.ORG, ORG.COM, COM.TEL1)));// 组合的外键
		getItemsParameter().AddItem_Name(toCode(new VFlds(T.ORG, ORG.COM, COM.FAX)));// 组合的外键
		getItemsParameter().AddItem_Name(toCode(new VFlds(T.OPERATOR, OPT.TB_OBJ, EM.PERSON, P.PE_MOBILE)));// 组合的外键
		getVFld(COM.TEL1).setName("电话");
		setDetailGrid(new MyDetailGrid(this).init()); // 设置明细行
	}

	// 初始化页眉页脚和报表头报表尾
	public void initItemsSection(GrfItemsSection is, GrfSectionItem ph, GrfSectionItem pf, GrfSectionItem rh, GrfSectionItem rf) {
		super.initItemsSection(is, ph, pf, rh, rf);
		rh.addExp("RepeatOnPage", "T");
		rf.addExp("RepeatOnPage", "T");
		// 设置报表尾在底部
		rf.addExp("PrintAtBottom", "T");
		getVFlds().setAlignToMiddleRight(T.AMT, T.AMT_COST);
		// 设置单据机构位置并赋值
		getVFlds().setAlignToMiddleCenter(T.ORG);
		rh.AddValue(T.ORG, 1, 1);
		// 合并第2行和第3行并设置每个插件的位置大小
		Sheet line2 = rh.getSheet().newInnerSheet(2, 1, new double[] { 0.62, 0.62 }, BOXWIDTH/4, BOXWIDTH/4*2, 0.9, -1);
		// 设置静态框并给予值
		rh.AddItem("StaticBox", "orderName", "销 售 退 货 单", line2.cellLocationSizeAbs(1, 2, 2, 1)).setTextAlignToMiddleCenter().add(FONT_REPORT_HEAD);
		rh.AddName(COM.TEL1, line2.cellLocationSizeAbs(2, 3));
		rh.AddValue(COM.TEL1, line2.cellLocationSizeAbs(2, 4), new VFlds(T.ORG, ORG.COM, COM.TEL1));
		Sheet line4 = rh.getSheet().newInnerSheet(4, 1, new double[] { 0.62 }, 1.7, BOXWIDTH/4*3 - 1.7, 0.9, -1);
		rh.AddName(COM.ADDR, line4.cellLocationSizeAbs(1, 1)).setTextAlignToBottomRight();
		rh.AddValue(COM.ADDR, line4.cellLocationSizeAbs(1, 2), new VFlds(T.ORG, ORG.COM, COM.ADDR)).setTextAlignToBottomLeft();
		rh.AddName(COM.FAX, line4.cellLocationSizeAbs(1, 3));
		rh.AddValue(COM.FAX, line4.cellLocationSizeAbs(1, 4), new VFlds(T.ORG, ORG.COM, COM.FAX));
		Sheet line5 = rh.getSheet().newInnerSheet(5, 1, new double[] { 0.7 }, 1.8, 2.1, 0.9, 3, 1.6, 5.5, 1.5, 1.5, -1);
		rh.AddValue(T.CODE, line5.cellLocationSizeAbs(1, 2)).addAttr("GetDisplayTextScript", spliteCode());
		rh.AddValue(T.WAREHOUSE, line5.cellLocationSizeAbs(1, 4));
		rh.AddValue(T.CREATED_TIME, line5.cellLocationSizeAbs(1, 6));
		rh.AddItem("MemoBox", "pageCount", GrfItem.pageCount(), line5.cellLocationSizeAbs(1, 7)).setTextAlignToMiddleCenter();
		rh.AddItem("MemoBox", "pageNumber", GrfItem.pageNumber(), line5.cellLocationSizeAbs(1, 8)).setTextAlignToMiddleCenter();
		Sheet line6 = rh.getSheet().newInnerSheet(6, 1, new double[] { 0.62 }, 1.9, 11.5, 1.45, -1);
		rh.AddName(T.CUST_NAME, line6.cellLocationSizeAbs(1, 1)).setTextAlignToBottomRight();
		rh.AddValue(T.CUST_NAME, line6.cellLocationSizeAbs(1, 2)).setTextAlignToBottomLeft();
		// rh.AddValue(T.CUST_NAME, line6.cellLocationSizeAbs(1, 3));
		Sheet line7 = rh.getSheet().newInnerSheet(7, 1, new double[] { 0.62 }, 2.4, 9.7, 1.6, -1);
		rh.AddItem("StaticBox", T.OPERATOR.getFld().getCode() + "Name", T.OPERATOR.getFld().getName() + "/手机" + root().getLabelExtStr(), line7.cellLocationSizeAbs(1, 1), root().getAlignFleldLabel()).setTextAlignToMiddleRight();
		rh.AddItem("MemoBox", T.OPERATOR.getFld().getCode(), "[#{" + T.OPERATOR.getFld().getCode() + "}#]/[#{" + toCode(new VFlds(T.OPERATOR, OPT.TB_OBJ, EM.PERSON, P.PE_MOBILE)) + "}#]", line7.cellLocationSizeAbs(1, 2), T.OPERATOR.getFld().crtVFld().getAlign());
		Sheet line8 = rh.getSheet().newInnerSheet(8, 1, new double[] { 0.5 }, 1.7, -1);
		rh.AddItem("StaticBox", "ysyf", "应收预付", line8.cellLocationSizeAbs(1, 1), root().getAlignFleldLabel()).setTextAlignToMiddleRight();
		// rh.AddItem("StaticBox", "ysyfvalue", "（...........）",
		// line8.cellLocationSizeAbs(1,2));
		Sheet fline1 = rf.getSheet().newInnerSheet(1, 1, new double[] { 0.5 }, 1.6, -1, 2, 2);
		rf.AddValue(T.CREATED_BY, fline1.cellLocationSizeAbs(1, 2));
		rf.AddItem("SummaryBox", "summaryTotalCh", null, fline1.cellLocationSizeAbs(1, 3)).addAttr("DataField", L.AMT.getFld().getCode()).addAttr("Format", "$$").addAttr("Visible", new GrfExp("F"));
		rf.AddItem("SummaryBox", "summaryTotal", null, fline1.cellLocationSizeAbs(1, 4)).setTextAlignToMiddleRight().addAttr("DataField", L.AMT.getFld().getCode()).addAttr("Format", "$#,##0.00").addAttr("Visible", new GrfExp("F"));
		Sheet fline2 = rf.getSheet().newInnerSheet(2, 1, new double[] { 0.5 }, 0.9, -1);
		rf.AddValue(T.REM, fline2.cellLocationSizeAbs(1, 2));
	}

	// 初始化分组头和分组尾,分组默认隐藏
	public void initItemsGroup(GrfItemsGroup ig, GrfGroupHeader gh, GrfGroupFooter gf) {
		super.initItemsGroup(ig, gh, gf);
		gf.setVisible(new GrfExp("T"));// 设置分组尾为可见
		gf.addAttr("PrintAtBottom", new GrfExp("T"));// 设置分组尾打印在底部
		// AddItem(type, name, text, locationSize),
		gf.AddItem("StaticBox", "stc", "金额合计（人民币）:", 1, 1);
		gf.AddItem("MemoBox", "quoteSummaryTotalCh", "[#summaryTotalCh#]", 1, 2);
		gf.AddItem("MemoBox", "quoteSummaryTotal", "[#summaryTotal#]", 1, 3).setTextAlignToMiddleRight();
		gf.AddItem("StaticBox", "sp", "本页小计", 1, 4);
		gf.AddSummary(L.AMT, 1, 5).setTextAlignToMiddleRight().addAttr("Format", "$#,##0.00");
	}

	// 初始化整张单据
	public void initSheetPrint(SheetPrint sp) {
		double[] header = { 0.62, 0.62, 0.62, 0.62, 0.7, 0.62, 0.62, 0.62 };
		sp.setOriention(false);// 设置方向
		sp.setPageSize(new Size(HEIGHT, WIDTH));// 设置打印纸的大小
		sp.setPageGap(new SheetGap(TOP, BOTTOM, LEFT, RIGHT));
		sp.setPageHeader(new double[] { 0 }, 2, -1, 2);
		sp.setPageFooter(new double[] { 0 }, 2, -1, 2);
		sp.setReportHeader(header, BOXWIDTH);
		sp.setReportFooter(new double[] { 0.5, 1.3 }, BOXWIDTH);
		sp.setGroupHeader(new double[] { 0 }, BOXWIDTH);
		sp.setGroupFooter(new double[] { 1.2 }, 3.5, 5.9, 3, 2.6, 3.6, -1);
	}

	private static class MyDetailGrid extends GrfFormLine {
		public MyDetailGrid(GrfForm parent) {
			super(parent, //
					new VFlds(GOODS.CODE, GOODS.SPEC, L.QTY, L.UOM, L.PRICE, L.AMT), new double[] { 1.7, 9.45, 2.2, 0.8, 2.4, 2.4 }, new VFlds(L.GOODS, GOODS.CODE), new VFlds(L.GOODS, GOODS.SPEC), null, null, null, null);
			getVFlds().setAlignTitle(OAlign.MIDDLE_RIGHT, L.QTY, L.UOM, L.PRICE, L.AMT);
			getVFld(L.UOM).setListName("单位").setAlign(OAlign.MIDDLE_CENTER);;
			getVFld(L.AMT).setListName("金  额 ");
			getVFld(GOODS.CODE).setListName("商品编号").setAlignTitle(OAlign.MIDDLE_RIGHT);
			getVFlds().setAlign(OAlign.MIDDLE_RIGHT,GOODS.CODE,L.QTY,L.PRICE,L.AMT);
			getVFld(GOODS.SPEC).setListName(" 商品描述");
			showTitileCellUnderLine(true);//给明细标题下面加下划线
			getColumnTitle().addAttr("RepeatStyle", new GrfExp("OnPage"));//标题部分每页重复
		}

	}

}
