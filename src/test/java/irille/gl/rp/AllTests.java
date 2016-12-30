package irille.gl.rp;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;
@RunWith(Suite.class)
@SuiteClasses({ 
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
})
public class AllTests {

}
