package irille.gl.pya;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;
@RunWith(Suite.class)
@SuiteClasses({ 
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
})
public class AllTests {

}
