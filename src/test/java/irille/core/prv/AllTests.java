package irille.core.prv;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;
@RunWith(Suite.class)
@SuiteClasses({ 
	PrvRole.class, 
	PrvRoleAct.class, 
	PrvRoleLine.class, 
	PrvRoleTran.class, 
	PrvTranData.class, 
	PrvTranGrp.class 
})
public class AllTests {

}
