package irille.gl.gl;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;
@RunWith(Suite.class)
@SuiteClasses({ 
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
	GlGoods.class,
	GlGoodsLine.class,
})
public class AllTests {

}
