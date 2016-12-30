package irille.gl.rva;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;
@RunWith(Suite.class)
@SuiteClasses({ 
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
})
public class AllTests {

}
