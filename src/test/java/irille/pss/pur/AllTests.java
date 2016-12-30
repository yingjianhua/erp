package irille.pss.pur;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;
@RunWith(Suite.class)
@SuiteClasses({ 
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
})
public class AllTests {

}
