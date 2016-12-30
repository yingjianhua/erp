package irille.pub.svr;


import java.util.Vector;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

import irille.core.lg.LgAttemper;
import irille.core.lg.LgLogin;
import irille.core.lg.LgTran;
import irille.core.prv.PrvRole;
import irille.core.prv.PrvRoleAct;
import irille.core.prv.PrvRoleLine;
import irille.core.prv.PrvRoleTran;
import irille.core.prv.PrvTranData;
import irille.core.prv.PrvTranGrp;
import irille.core.sys.Sys;
import irille.core.sys.SysAttemper;
import irille.core.sys.SysCell;
import irille.core.sys.SysCom;
import irille.core.sys.SysCtype;
import irille.core.sys.SysCtypeCode;
import irille.core.sys.SysCustom;
import irille.core.sys.SysCustomOrg;
import irille.core.sys.SysDept;
import irille.core.sys.SysEm;
import irille.core.sys.SysGrp;
import irille.core.sys.SysMenu;
import irille.core.sys.SysMenuAct;
import irille.core.sys.SysModule;
import irille.core.sys.SysOrg;
import irille.core.sys.SysPerson;
import irille.core.sys.SysPersonLink;
import irille.core.sys.SysPost;
import irille.core.sys.SysProject;
import irille.core.sys.SysSeq;
import irille.core.sys.SysSeqLine;
import irille.core.sys.SysShiping;
import irille.core.sys.SysSupplier;
import irille.core.sys.SysSupplierOrg;
import irille.core.sys.SysSystem;
import irille.core.sys.SysTable;
import irille.core.sys.SysTableAct;
import irille.core.sys.SysTemplat;
import irille.core.sys.SysTemplatCell;
import irille.core.sys.SysUser;
import irille.core.sys.SysUserLogin;
import irille.core.sys.SysUserRole;
import irille.gl.frm.FrmHandover;
import irille.gl.frm.FrmHandoverLine;
import irille.gl.frm.FrmLink;
import irille.gl.frm.FrmPending;
import irille.gl.gl.Gl;
import irille.gl.gl.GlDailyLedger;
import irille.gl.gl.GlDaybook;
import irille.gl.gl.GlDaybookLine;
import irille.gl.gl.GlEntryDef;
import irille.gl.gl.GlEntryDefLine;
import irille.gl.gl.GlJournal;
import irille.gl.gl.GlJournalLine;
import irille.gl.gl.GlNote;
import irille.gl.gl.GlNoteAmtCancel;
import irille.gl.gl.GlNoteView;
import irille.gl.gl.GlNoteViewRp;
import irille.gl.gl.GlNoteWriteoff;
import irille.gl.gl.GlNoteWriteoffLine;
import irille.gl.gl.GlRate;
import irille.gl.gl.GlRateType;
import irille.gl.gl.GlReport;
import irille.gl.gl.GlReportAsset;
import irille.gl.gl.GlReportAssetLine;
import irille.gl.gl.GlReportLine;
import irille.gl.gl.GlReportProfit;
import irille.gl.gl.GlReportProfitLine;
import irille.gl.gl.GlSubject;
import irille.gl.gl.GlSubjectDAO;
import irille.gl.gl.GlSubjectMap;
import irille.gl.gl.GlTransform;
import irille.gl.gs.GsDemand;
import irille.gl.gs.GsDemandDirect;
import irille.gl.gs.GsGain;
import irille.gl.gs.GsGainLine;
import irille.gl.gs.GsGoods;
import irille.gl.gs.GsGoodsCmb;
import irille.gl.gs.GsGoodsKind;
import irille.gl.gs.GsIn;
import irille.gl.gs.GsInLineView;
import irille.gl.gs.GsInit;
import irille.gl.gs.GsInitLine;
import irille.gl.gs.GsJlStock;
import irille.gl.gs.GsJlStockLine;
import irille.gl.gs.GsLocation;
import irille.gl.gs.GsLoss;
import irille.gl.gs.GsLossLine;
import irille.gl.gs.GsMovement;
import irille.gl.gs.GsMovementLine;
import irille.gl.gs.GsOut;
import irille.gl.gs.GsOutLineView;
import irille.gl.gs.GsPhyinv;
import irille.gl.gs.GsPhyinvBatchLine;
import irille.gl.gs.GsPhyinvGoodsLine;
import irille.gl.gs.GsPrice;
import irille.gl.gs.GsPriceCtl;
import irille.gl.gs.GsPriceGoods;
import irille.gl.gs.GsPriceGoodsCell;
import irille.gl.gs.GsPriceGoodsKind;
import irille.gl.gs.GsReportMvOut;
import irille.gl.gs.GsReportPurIn;
import irille.gl.gs.GsReportSalOut;
import irille.gl.gs.GsRequest;
import irille.gl.gs.GsRequestLine;
import irille.gl.gs.GsSplit;
import irille.gl.gs.GsSplitLine;
import irille.gl.gs.GsStock;
import irille.gl.gs.GsStockBatch;
import irille.gl.gs.GsStockLine;
import irille.gl.gs.GsStockStimate;
import irille.gl.gs.GsUnite;
import irille.gl.gs.GsUniteLine;
import irille.gl.gs.GsUom;
import irille.gl.gs.GsUomType;
import irille.gl.gs.GsWarehouse;
import irille.gl.pya.PyaNoteAccountPayable;
import irille.gl.pya.PyaNoteAccountPayableLine;
import irille.gl.pya.PyaNoteDepositPayable;
import irille.gl.pya.PyaNoteDepositPayableLine;
import irille.gl.pya.PyaNotePayable;
import irille.gl.pya.PyaNotePayableLine;
import irille.gl.pya.PyaPayBill;
import irille.gl.pya.PyaPayDepBill;
import irille.gl.pya.PyaPayDepWriteoffBill;
import irille.gl.pya.PyaPayOtherBill;
import irille.gl.pya.PyaPayOtherWriteoffBill;
import irille.gl.pya.PyaPayWriteoffBill;
import irille.gl.rp.RpFundMvOld;
import irille.gl.rp.RpHandover;
import irille.gl.rp.RpHandoverLine;
import irille.gl.rp.RpJournal;
import irille.gl.rp.RpJournalLine;
import irille.gl.rp.RpNoteCashPay;
import irille.gl.rp.RpNoteCashRpt;
import irille.gl.rp.RpNotePay;
import irille.gl.rp.RpNotePayBill;
import irille.gl.rp.RpNoteRpt;
import irille.gl.rp.RpNoteRptBill;
import irille.gl.rp.RpSeal;
import irille.gl.rp.RpStimatePay;
import irille.gl.rp.RpStimateRec;
import irille.gl.rp.RpWorkBox;
import irille.gl.rp.RpWorkBoxGoods;
import irille.gl.rva.RvaNoteAccount;
import irille.gl.rva.RvaNoteAccountLine;
import irille.gl.rva.RvaNoteCashOnDelivery;
import irille.gl.rva.RvaNoteCashOnDeliveryLine;
import irille.gl.rva.RvaNoteDeposit;
import irille.gl.rva.RvaNoteDepositLine;
import irille.gl.rva.RvaNoteOther;
import irille.gl.rva.RvaNoteOtherLine;
import irille.gl.rva.RvaRecBill;
import irille.gl.rva.RvaRecDepBill;
import irille.gl.rva.RvaRecDepWriteoffBill;
import irille.gl.rva.RvaRecOtherBill;
import irille.gl.rva.RvaRecOtherWriteoffBill;
import irille.gl.rva.RvaRecWriteoffBill;
import irille.pss.cst.CstIn;
import irille.pss.cst.CstInLine;
import irille.pss.cst.CstInRed;
import irille.pss.cst.CstInRedLine;
import irille.pss.cst.CstMvInvoiceIn;
import irille.pss.cst.CstMvInvoiceInLine;
import irille.pss.cst.CstMvInvoiceOut;
import irille.pss.cst.CstMvInvoiceOutLine;
import irille.pss.cst.CstOut;
import irille.pss.cst.CstOutLine;
import irille.pss.cst.CstOutRed;
import irille.pss.cst.CstOutRedLine;
import irille.pss.cst.CstPurInvoice;
import irille.pss.cst.CstPurInvoiceLine;
import irille.pss.cst.CstPurInvoiceRed;
import irille.pss.cst.CstPurInvoiceRedLine;
import irille.pss.cst.CstSalInvoice;
import irille.pss.cst.CstSalInvoiceLine;
import irille.pss.cst.CstSalInvoiceRed;
import irille.pss.cst.CstSalInvoiceRedLine;
import irille.pss.pur.PurMvIn;
import irille.pss.pur.PurMvInLine;
import irille.pss.pur.PurOrder;
import irille.pss.pur.PurOrderDirect;
import irille.pss.pur.PurOrderDirectLine;
import irille.pss.pur.PurOrderLine;
import irille.pss.pur.PurPresent;
import irille.pss.pur.PurPresentLine;
import irille.pss.pur.PurProt;
import irille.pss.pur.PurProtApply;
import irille.pss.pur.PurProtGoods;
import irille.pss.pur.PurProtGoodsApply;
import irille.pss.pur.PurProtGoodsApplyLine;
import irille.pss.pur.PurRev;
import irille.pss.pur.PurRevLine;
import irille.pss.pur.PurRpt;
import irille.pss.pur.PurRtn;
import irille.pss.pur.PurRtnLine;
import irille.pss.sal.SalCollect;
import irille.pss.sal.SalCollectView;
import irille.pss.sal.SalCustGoods;
import irille.pss.sal.SalDiscountPriv;
import irille.pss.sal.SalMvOut;
import irille.pss.sal.SalMvOutLine;
import irille.pss.sal.SalOrder;
import irille.pss.sal.SalOrderLine;
import irille.pss.sal.SalPresent;
import irille.pss.sal.SalPresentLine;
import irille.pss.sal.SalPriceProt;
import irille.pss.sal.SalPriceProtMv;
import irille.pss.sal.SalReserve;
import irille.pss.sal.SalReserveLine;
import irille.pss.sal.SalRetail;
import irille.pss.sal.SalRetailLine;
import irille.pss.sal.SalRtn;
import irille.pss.sal.SalRtnLine;
import irille.pss.sal.SalSale;
import irille.pss.sal.SalSaleCross;
import irille.pss.sal.SalSaleCrossLine;
import irille.pss.sal.SalSaleDirect;
import irille.pss.sal.SalSaleDirectLine;
import irille.pss.sal.SalSaleLine;
import junit.framework.Test;
import junit.framework.TestSuite;

@RunWith(Suite.class)
@SuiteClasses({ 
	LgAttemper.class,
	LgLogin.class,
	LgTran.class,

	PrvRole.class,
	PrvRoleAct.class,
	PrvRoleLine.class,
	PrvRoleTran.class,
	PrvTranData.class,
	PrvTranGrp.class,

	SysAttemper.class,
	SysCell.class,
	SysCom.class,
	SysCtype.class,
	SysCtypeCode.class,
	SysCustom.class,
	SysCustomOrg.class,
	SysDept.class,
	SysEm.class,
	SysGrp.class,
	SysMenu.class,
	SysMenuAct.class,
	SysModule.class,
	SysOrg.class,
	SysPerson.class,
	SysPersonLink.class,
	SysPost.class,
	SysProject.class,
	SysSeq.class,
	SysSeqLine.class,
	SysShiping.class,
	SysSupplier.class,
	SysSupplierOrg.class,
	SysSystem.class,
	SysTable.class,
	SysTableAct.class,
	SysTemplat.class,
	SysTemplatCell.class,
	SysUser.class,
	SysUserLogin.class,
	SysUserRole.class,

	FrmHandover.class,
	FrmHandoverLine.class,
	FrmLink.class,
	FrmPending.class,

	GlDailyLedger.class,
	GlDaybook.class,
	GlDaybookLine.class,
	GlEntryDef.class,
	GlEntryDefLine.class,
	GlJournal.class,
	GlJournalLine.class,
	GlNote.class,
	GlNoteAmtCancel.class,
	GlNoteView.class,
	GlNoteViewRp.class,
	GlNoteWriteoff.class,
	GlNoteWriteoffLine.class,
	GlRate.class,
	GlRateType.class,
	GlReport.class,
	GlReportAsset.class,
	GlReportAssetLine.class,
	GlReportLine.class,
	GlReportProfit.class,
	GlReportProfitLine.class,
	GlSubject.class,
	GlSubjectMap.class,
	GlTransform.class,

	GsDemand.class,
	GsDemandDirect.class,
	GsGain.class,
	GsGainLine.class,
	GsGoods.class,
	GsGoodsCmb.class,
	GsGoodsKind.class,
	GsIn.class,
	GsInit.class,
	GsInitLine.class,
	GsInLineView.class,
	GsJlStock.class,
	GsJlStockLine.class,
	GsLocation.class,
	GsLoss.class,
	GsLossLine.class,
	GsMovement.class,
	GsMovementLine.class,
	GsOut.class,
	GsOutLineView.class,
	GsPhyinv.class,
	GsPhyinvBatchLine.class,
	GsPhyinvGoodsLine.class,
	GsPrice.class,
	GsPriceCtl.class,
	GsPriceGoods.class,
	GsPriceGoodsCell.class,
	GsPriceGoodsKind.class,
	GsReportMvOut.class,
	GsReportPurIn.class,
	GsReportSalOut.class,
	GsRequest.class,
	GsRequestLine.class,
	GsSplit.class,
	GsSplitLine.class,
	GsStock.class,
	GsStockBatch.class,
	GsStockLine.class,
	GsStockStimate.class,
	GsUnite.class,
	GsUniteLine.class,
	GsUom.class,
	GsUomType.class,
	GsWarehouse.class,

	PyaNoteAccountPayable.class,
	PyaNoteAccountPayableLine.class,
	PyaNoteDepositPayable.class,
	PyaNoteDepositPayableLine.class,
	PyaNotePayable.class,
	PyaNotePayableLine.class,
	PyaPayBill.class,
	PyaPayDepBill.class,
	PyaPayDepWriteoffBill.class,
	PyaPayOtherBill.class,
	PyaPayOtherWriteoffBill.class,
	PyaPayWriteoffBill.class,

	RpFundMvOld.class,
	RpHandover.class,
	RpHandoverLine.class,
	RpJournal.class,
	RpJournalLine.class,
	RpNoteCashPay.class,
	RpNoteCashRpt.class,
	RpNotePay.class,
	RpNotePayBill.class,
	RpNoteRpt.class,
	RpNoteRptBill.class,
	RpSeal.class,
	RpStimatePay.class,
	RpStimateRec.class,
	RpWorkBox.class,
	RpWorkBoxGoods.class,

	RvaNoteAccount.class,
	RvaNoteAccountLine.class,
	RvaNoteCashOnDelivery.class,
	RvaNoteCashOnDeliveryLine.class,
	RvaNoteDeposit.class,
	RvaNoteDepositLine.class,
	RvaNoteOther.class,
	RvaNoteOtherLine.class,
	RvaRecBill.class,
	RvaRecDepBill.class,
	RvaRecDepWriteoffBill.class,
	RvaRecOtherBill.class,
	RvaRecOtherWriteoffBill.class,
	RvaRecWriteoffBill.class,

	CstIn.class,
	CstInLine.class,
	CstInRed.class,
	CstInRedLine.class,
	CstMvInvoiceIn.class,
	CstMvInvoiceInLine.class,
	CstMvInvoiceOut.class,
	CstMvInvoiceOutLine.class,
	CstOut.class,
	CstOutLine.class,
	CstOutRed.class,
	CstOutRedLine.class,
	CstPurInvoice.class,
	CstPurInvoiceLine.class,
	CstPurInvoiceRed.class,
	CstPurInvoiceRedLine.class,
	CstSalInvoice.class,
	CstSalInvoiceLine.class,
	CstSalInvoiceRed.class,
	CstSalInvoiceRedLine.class,

	PurMvIn.class,
	PurMvInLine.class,
	PurOrder.class,
	PurOrderDirect.class,
	PurOrderDirectLine.class,
	PurOrderLine.class,
	PurPresent.class,
	PurPresentLine.class,
	PurProt.class,
	PurProtApply.class,
	PurProtGoods.class,
	PurProtGoodsApply.class,
	PurProtGoodsApplyLine.class,
	PurRev.class,
	PurRevLine.class,
	PurRpt.class,
	PurRtn.class,
	PurRtnLine.class,

	SalCollect.class,
	SalCollectView.class,
	SalCustGoods.class,
	SalDiscountPriv.class,
	SalMvOut.class,
	SalMvOutLine.class,
	SalOrder.class,
	SalOrderLine.class,
	SalPresent.class,
	SalPresentLine.class,
	SalPriceProt.class,
	SalPriceProtMv.class,
	SalReserve.class,
	SalReserveLine.class,
	SalRetail.class,
	SalRetailLine.class,
	SalRtn.class,
	SalRtnLine.class,
	SalSale.class,
	SalSaleCross.class,
	SalSaleCrossLine.class,
	SalSaleDirect.class,
	SalSaleDirectLine.class,
	SalSaleLine.class,
})
public class ToolsMy {

}
