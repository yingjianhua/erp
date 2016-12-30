package irille.pss.sal;

import irille.core.sys.Sys;
import irille.core.sys.SysCell;
import irille.core.sys.SysCustom;
import irille.core.sys.SysDept;
import irille.core.sys.SysOrg;
import irille.core.sys.SysUser;
import irille.core.sys.Sys.OBillFlag;
import irille.core.sys.Sys.OBillStatus;
import irille.gl.gl.Gl;
import irille.gl.gs.GsWarehouse;
import irille.pss.cst.CstPub;
import irille.pss.sal.Sal.OInoutStatus;
import irille.pub.bean.BeanBill;
import irille.pub.bean.CmbBill;
import irille.pub.bean.IGoods;
import irille.pub.bean.IGoodsPrice;
import irille.pub.gl.AccObjs;
import irille.pub.gl.TallyLines;
import irille.pub.idu.Idu;
import irille.pub.inf.ICstInout;
import irille.pub.inf.ICstInvoice;
import irille.pub.svr.Env;
import irille.pub.tb.Fld;
import irille.pub.tb.IEnumFld;
import irille.pub.tb.Tb;
import irille.pub.tb.Tb.Index;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

/**
 * 退货单必须选择哪笔销售的单子做退货（源单据+源单据号，其它费用、明细汇总金额）
 * 包括销售、直销、零售、赠送
 * @author whx
 * @version 创建时间：2014年8月20日 下午3:14:58
 */
public class SalRtn extends BeanBill<SalRtn> implements ICstInvoice, ICstInout {
	public static final Tb TB = new Tb(SalRtn.class, "退货单").setAutoIncrement().addActIUDL().addActApprove().addActNote()
	    .addActTally().addActOpt("crtGs", "产生入库单").addActPrint();

	public enum T implements IEnumFld {//@formatter:off
		CMB_FORM(CmbBill.fldFlds()),
		CUST(SYS.CUST), //客户
		CUST_NAME(SYS.NAME__100, "客户名称"),
		WAREHOUSE(GsWarehouse.fldOutKey()),
		AMT(SYS.AMT),
		AMT_PAY(SYS.AMT, "现付金额"),
		AMT_REC(SYS.AMT, "挂账金额"),
		AMT_REC_BACK(SYS.AMT, "挂账回款金额"),
		AMT_COST(SYS.AMT_COST),
		OPERATOR(SYS.USER_SYS, "业务员"),
		INOUT_STATUS(TB.crt(Sal.OInoutStatus.INIT)),
		BILL_FLAG(TB.crt(Sys.OBillFlag.YES)),
		ROW_VERSION(SYS.ROW_VERSION),
		//>>>以下是自动产生的源代码行--内嵌字段定义--请保留此行用于识别>>>
		PKEY(TB.get("pkey")),	//编号
		CODE(TB.get("code")),	//单据号
		STATUS(TB.get("status")),	//状态
		ORG(TB.get("org")),	//机构
		CELL(TB.get("cell")),	//核算单元
		DEPT(TB.get("dept")),	//部门
		CREATED_BY(TB.get("createdBy")),	//建档员
		CREATED_TIME(TB.get("createdTime")),	//建档时间
		APPR_BY(TB.get("apprBy")),	//审核员
		APPR_TIME(TB.get("apprTime")),	//审核时间
		TALLY_BY(TB.get("tallyBy")),	//记账员
		TALLY_TIME(TB.get("tallyTime")),	//记账日期
		REM(TB.get("rem")),	//备注
		//<<<以上是自动产生的源代码行--内嵌字段定义--请保留此行用于识别<<<
		;
		//>>>以下是自动产生的源代码行--自动建立的索引定义--请保留此行用于识别>>>
		public static final Index IDX_CODE= TB.addIndex("code",true,CODE);
		public static final Index IDX_ORG_TIME= TB.addIndex("orgTime",false,ORG,CREATED_TIME);
		//<<<以上是自动产生的源代码行--自动建立的索引定义--请保留此行用于识别<<<
		// 索引
		private Fld _fld;
		private T(Class clazz,String name,boolean... isnull) 
			{_fld=TB.addOutKey(clazz,this,name,isnull);	}
		private T(IEnumFld fld,boolean... isnull) { this(fld,null,isnull); } 
		private T(IEnumFld fld, String name,boolean... null1) {
			_fld=TB.add(fld,this,name,null1);}
		private T(IEnumFld fld, String name,int strLen) {
			_fld=TB.add(fld,this,name,strLen);}
		private T(Fld fld) {_fld=TB.add(fld,this); }
		public Fld getFld(){return _fld;}
	}

	static { //在此可以加一些对FLD进行特殊设定的代码
		T.CMB_FORM.getFld().getTb().lockAllFlds();//加锁所有字段,不可以修改
	}
	//@formatter:on

	public static Fld fldOutKey() {
		return fldOutKey(TB.getCodeNoPackage(), TB.getShortName());
	}

	public static Fld fldOutKey(String code, String name) {
		return Tb.crtOutKey(TB, code, name);
	}

	public void getAccObjs(String name, AccObjs objs) {
	}

	public void initTallyLines(TallyLines ls) {
		ls.addByAlias(gtCell(), this, Sal.SubjectAlias.SAL_PENDING.getCode()).set(_amt.negate(), Gl.ODirect.CR, null,
		    "销售退货单(" + getCode() + ")");
	}

	@Override
	public List<IGoodsPrice> getInvoiceLines() {
		return Idu.getLinesTid(this, SalRtnLine.class);
	}

	@Override
	public List<IGoods> getCstInoutLines(int type) {
		return CstPub.getCmbGoods(Idu.getLinesTid(this, SalRtnLine.class));
	}

	//>>>以下是自动产生的源代码行--源代码--请保留此行用于识别>>>
  //实例变量定义-----------------------------------------
  private Long _pkey;	// 编号  LONG
  private String _code;	// 单据号  STR(40)
  private Byte _status;	// 状态 <OBillStatus>  BYTE
	// INIT:11,初始
	// OK:21,已输入确认
	// VERIFING:53,复核中
	// VERIFIED:58,已复核
	// CHECKING:63,审核中
	// CHECKED:68,已审核
	// VETTING:73,审批中
	// VETTED:78,已审批
	// INOUT:81,已出入库
	// TALLY_ABLE:83,可记账
	// DONE:98,完成
	// DELETED:99,作废
  private Integer _org;	// 机构 <表主键:SysOrg>  INT
  private Integer _cell;	// 核算单元 <表主键:SysCell>  INT
  private Integer _dept;	// 部门 <表主键:SysDept>  INT
  private Integer _createdBy;	// 建档员 <表主键:SysUser>  INT
  private Date _createdTime;	// 建档时间  TIME
  private Integer _apprBy;	// 审核员 <表主键:SysUser>  INT<null>
  private Date _apprTime;	// 审核时间  TIME<null>
  private Integer _tallyBy;	// 记账员 <表主键:SysUser>  INT<null>
  private Date _tallyTime;	// 记账日期  DATE<null>
  private String _rem;	// 备注  STR(200)<null>
  private Integer _cust;	// 客户 <表主键:SysCustom>  INT
  private String _custName;	// 客户名称  STR(100)
  private Integer _warehouse;	// 仓库 <表主键:GsWarehouse>  INT
  private BigDecimal _amt;	// 金额  DEC(16,2)
  private BigDecimal _amtPay;	// 现付金额  DEC(16,2)
  private BigDecimal _amtRec;	// 挂账金额  DEC(16,2)
  private BigDecimal _amtRecBack;	// 挂账回款金额  DEC(16,2)
  private BigDecimal _amtCost;	// 费用合计  DEC(16,2)
  private Integer _operator;	// 业务员 <表主键:SysUser>  INT
  private Byte _inoutStatus;	// 出库状态 <OInoutStatus>  BYTE
	// INIT:1,未完成
	// CRT:2,已产生出入库单
	// DONE:3,已完成
  private Byte _billFlag;	// 开票标准 <OBillFlag>  BYTE
	// YES:1,开票
	// NO:0,不开票
	// WAIT:3,待定
  private Short _rowVersion;	// 版本  SHORT

	@Override
  public SalRtn init(){
		super.init();
    _code=null;	// 单据号  STR(40)
    _status=OBillStatus.DEFAULT.getLine().getKey();	// 状态 <OBillStatus>  BYTE
    _org=null;	// 机构 <表主键:SysOrg>  INT
    _cell=null;	// 核算单元 <表主键:SysCell>  INT
    _dept=null;	// 部门 <表主键:SysDept>  INT
    _createdBy=Idu.getUser().getPkey();	// 建档员 <表主键:SysUser>  INT
    _createdTime=Env.getTranBeginTime();	// 建档时间  TIME
    _apprBy=null;	// 审核员 <表主键:SysUser>  INT
    _apprTime=null;	// 审核时间  TIME
    _tallyBy=null;	// 记账员 <表主键:SysUser>  INT
    _tallyTime=null;	// 记账日期  DATE
    _rem=null;	// 备注  STR(200)
    _cust=null;	// 客户 <表主键:SysCustom>  INT
    _custName=null;	// 客户名称  STR(100)
    _warehouse=null;	// 仓库 <表主键:GsWarehouse>  INT
    _amt=ZERO;	// 金额  DEC(16,2)
    _amtPay=ZERO;	// 现付金额  DEC(16,2)
    _amtRec=ZERO;	// 挂账金额  DEC(16,2)
    _amtRecBack=ZERO;	// 挂账回款金额  DEC(16,2)
    _amtCost=ZERO;	// 费用合计  DEC(16,2)
    _operator=null;	// 业务员 <表主键:SysUser>  INT
    _inoutStatus=OInoutStatus.DEFAULT.getLine().getKey();	// 出库状态 <OInoutStatus>  BYTE
    _billFlag=OBillFlag.DEFAULT.getLine().getKey();	// 开票标准 <OBillFlag>  BYTE
    _rowVersion=0;	// 版本  SHORT
    return this;
  }

  //方法----------------------------------------------
  public static SalRtn loadUniqueCode(boolean lockFlag,String code) {
    return (SalRtn)loadUnique(T.IDX_CODE,lockFlag,code);
  }
  public static SalRtn chkUniqueCode(boolean lockFlag,String code) {
    return (SalRtn)chkUnique(T.IDX_CODE,lockFlag,code);
  }
  public Long getPkey(){
    return _pkey;
  }
  public void setPkey(Long pkey){
    _pkey=pkey;
  }
  public String getCode(){
    return _code;
  }
  public void setCode(String code){
    _code=code;
  }
  public Byte getStatus(){
    return _status;
  }
  public void setStatus(Byte status){
    _status=status;
  }
  public OBillStatus gtStatus(){
    return (OBillStatus)(OBillStatus.INIT.getLine().get(_status));
  }
  public void stStatus(OBillStatus status){
    _status=status.getLine().getKey();
  }
  public Integer getOrg(){
    return _org;
  }
  public void setOrg(Integer org){
    _org=org;
  }
  public SysOrg gtOrg(){
    if(getOrg()==null)
      return null;
    return (SysOrg)get(SysOrg.class,getOrg());
  }
  public void stOrg(SysOrg org){
    if(org==null)
      setOrg(null);
    else
      setOrg(org.getPkey());
  }
  public Integer getCell(){
    return _cell;
  }
  public void setCell(Integer cell){
    _cell=cell;
  }
  public SysCell gtCell(){
    if(getCell()==null)
      return null;
    return (SysCell)get(SysCell.class,getCell());
  }
  public void stCell(SysCell cell){
    if(cell==null)
      setCell(null);
    else
      setCell(cell.getPkey());
  }
  public Integer getDept(){
    return _dept;
  }
  public void setDept(Integer dept){
    _dept=dept;
  }
  public SysDept gtDept(){
    if(getDept()==null)
      return null;
    return (SysDept)get(SysDept.class,getDept());
  }
  public void stDept(SysDept dept){
    if(dept==null)
      setDept(null);
    else
      setDept(dept.getPkey());
  }
  public Integer getCreatedBy(){
    return _createdBy;
  }
  public void setCreatedBy(Integer createdBy){
    _createdBy=createdBy;
  }
  public SysUser gtCreatedBy(){
    if(getCreatedBy()==null)
      return null;
    return (SysUser)get(SysUser.class,getCreatedBy());
  }
  public void stCreatedBy(SysUser createdBy){
    if(createdBy==null)
      setCreatedBy(null);
    else
      setCreatedBy(createdBy.getPkey());
  }
  public Date getCreatedTime(){
    return _createdTime;
  }
  public void setCreatedTime(Date createdTime){
    _createdTime=createdTime;
  }
  public Integer getApprBy(){
    return _apprBy;
  }
  public void setApprBy(Integer apprBy){
    _apprBy=apprBy;
  }
  public SysUser gtApprBy(){
    if(getApprBy()==null)
      return null;
    return (SysUser)get(SysUser.class,getApprBy());
  }
  public void stApprBy(SysUser apprBy){
    if(apprBy==null)
      setApprBy(null);
    else
      setApprBy(apprBy.getPkey());
  }
  public Date getApprTime(){
    return _apprTime;
  }
  public void setApprTime(Date apprTime){
    _apprTime=apprTime;
  }
  public Integer getTallyBy(){
    return _tallyBy;
  }
  public void setTallyBy(Integer tallyBy){
    _tallyBy=tallyBy;
  }
  public SysUser gtTallyBy(){
    if(getTallyBy()==null)
      return null;
    return (SysUser)get(SysUser.class,getTallyBy());
  }
  public void stTallyBy(SysUser tallyBy){
    if(tallyBy==null)
      setTallyBy(null);
    else
      setTallyBy(tallyBy.getPkey());
  }
  public Date getTallyTime(){
    return _tallyTime;
  }
  public void setTallyTime(Date tallyTime){
    _tallyTime=tallyTime;
  }
  public String getRem(){
    return _rem;
  }
  public void setRem(String rem){
    _rem=rem;
  }
  public Integer getCust(){
    return _cust;
  }
  public void setCust(Integer cust){
    _cust=cust;
  }
  public SysCustom gtCust(){
    if(getCust()==null)
      return null;
    return (SysCustom)get(SysCustom.class,getCust());
  }
  public void stCust(SysCustom cust){
    if(cust==null)
      setCust(null);
    else
      setCust(cust.getPkey());
  }
  public String getCustName(){
    return _custName;
  }
  public void setCustName(String custName){
    _custName=custName;
  }
  public Integer getWarehouse(){
    return _warehouse;
  }
  public void setWarehouse(Integer warehouse){
    _warehouse=warehouse;
  }
  public GsWarehouse gtWarehouse(){
    if(getWarehouse()==null)
      return null;
    return (GsWarehouse)get(GsWarehouse.class,getWarehouse());
  }
  public void stWarehouse(GsWarehouse warehouse){
    if(warehouse==null)
      setWarehouse(null);
    else
      setWarehouse(warehouse.getPkey());
  }
  public BigDecimal getAmt(){
    return _amt;
  }
  public void setAmt(BigDecimal amt){
    _amt=amt;
  }
  public BigDecimal getAmtPay(){
    return _amtPay;
  }
  public void setAmtPay(BigDecimal amtPay){
    _amtPay=amtPay;
  }
  public BigDecimal getAmtRec(){
    return _amtRec;
  }
  public void setAmtRec(BigDecimal amtRec){
    _amtRec=amtRec;
  }
  public BigDecimal getAmtRecBack(){
    return _amtRecBack;
  }
  public void setAmtRecBack(BigDecimal amtRecBack){
    _amtRecBack=amtRecBack;
  }
  public BigDecimal getAmtCost(){
    return _amtCost;
  }
  public void setAmtCost(BigDecimal amtCost){
    _amtCost=amtCost;
  }
  public Integer getOperator(){
    return _operator;
  }
  public void setOperator(Integer operator){
    _operator=operator;
  }
  public SysUser gtOperator(){
    if(getOperator()==null)
      return null;
    return (SysUser)get(SysUser.class,getOperator());
  }
  public void stOperator(SysUser operator){
    if(operator==null)
      setOperator(null);
    else
      setOperator(operator.getPkey());
  }
  public Byte getInoutStatus(){
    return _inoutStatus;
  }
  public void setInoutStatus(Byte inoutStatus){
    _inoutStatus=inoutStatus;
  }
  public OInoutStatus gtInoutStatus(){
    return (OInoutStatus)(OInoutStatus.INIT.getLine().get(_inoutStatus));
  }
  public void stInoutStatus(OInoutStatus inoutStatus){
    _inoutStatus=inoutStatus.getLine().getKey();
  }
  public Byte getBillFlag(){
    return _billFlag;
  }
  public void setBillFlag(Byte billFlag){
    _billFlag=billFlag;
  }
  public Boolean gtBillFlag(){
    return byteToBoolean(_billFlag);
  }
  public void stBillFlag(Boolean billFlag){
    _billFlag=booleanToByte(billFlag);
  }
  public Short getRowVersion(){
    return _rowVersion;
  }
  public void setRowVersion(Short rowVersion){
    _rowVersion=rowVersion;
  }

	//<<<以上是自动产生的源代码行--源代码--请保留此行用于识别<<<
}
