package irille.gl.rp;

import irille.core.sys.SysCell;
import irille.core.sys.SysDept;
import irille.core.sys.SysOrg;
import irille.core.sys.SysUser;
import irille.core.sys.Sys.OBillStatus;
import irille.pub.Log;
import irille.pub.bean.BeanBill;
import irille.pub.bean.CmbBill;
import irille.pub.gl.TallyLines;
import irille.pub.idu.Idu;
import irille.pub.svr.Env;
import irille.pub.tb.EnumLine;
import irille.pub.tb.Fld;
import irille.pub.tb.IEnumFld;
import irille.pub.tb.IEnumOpt;
import irille.pub.tb.Tb;
import irille.pub.tb.Tb.Index;

import java.math.BigDecimal;
import java.util.Date;

public class RpFundMvOld extends BeanBill<RpFundMvOld> {
	private static final Log LOG = new Log(RpFundMvOld.class);

	public static final Tb TB = new Tb(RpFundMvOld.class, "资金调拨单-旧").setAutoIncrement().addActIUDL().addActApprove()
	    .addActOpt("rec", "接收").addActNote().addActTally();

	public enum OMvType implements IEnumOpt {//@formatter:off
		CELL(1,"核算单元内部"),ORG(2,"机构内部核算单元之间"),GRP(3,"跨机构");
		public static final String NAME="类型";
		public static final OMvType DEFAULT = CELL; // 定义缺省值
		private EnumLine _line;
		private OMvType(int key, String name) {_line=new EnumLine(this,key,name);	}
		public EnumLine getLine(){return _line;	}
	}		//@formatter:on

	public enum T implements IEnumFld {//@formatter:off
		CMB_BILL(CmbBill.fldFlds()),
		SOURCE_JOURNAL(RpJournal.fldOutKey().setName("来源账户")),  
		TYPE(TB.crt(OMvType.DEFAULT)),
		DESC_JOURNAL(RpJournal.fldOutKey().setName("调入账户")),
		DESC_ORG(SYS.ORG,"调入机构"),
		DESC_CELL(SYS.CELL,"调入核算单元"),
		AMT(SYS.AMT),
		DESC_BY(SYS.USER_SYS, "调入接收人"),
		TAKE_OVER_TIME(SYS.DATE_TIME__NULL, "接收时间"),
		ROW_VERSION(SYS.ROW_VERSION),
		//>>>以下是自动产生的源代码行--内嵌字段定义--请保留此行用于识别>>>
		PKEY(TB.get("pkey")),	//编号
		CODE(TB.get("code")),	//单据号
		STATUS(TB.get("status")),	//状态
		ORG(TB.get("org")),	//机构
		CELL(TB.get("cell")),	//核算单元
		DEPT(TB.get("dept")),	//部门
		CREATED_BY(TB.get("createdBy")),	//交接人
		CREATED_TIME(TB.get("createdTime")),	//交出时间
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
		private T(IEnumFld fld,boolean... isnull) { this(fld,null,isnull); } 
		private T(IEnumFld fld, String name,boolean... null1) {
			_fld=TB.add(fld,this,name,null1);}
		private T(IEnumFld fld, String name,int strLen) {
			_fld=TB.add(fld,this,name,strLen);}
		private T(Fld fld) {_fld=TB.add(fld,this); }
		public Fld getFld(){return _fld;}
	}

	static { //在此可以加一些对FLD进行特殊设定的代码
		T.DESC_BY.getFld();//字段初始化
		Rp.changeCreatedNameAndLock(TB);
	}
	//@formatter:on

	public void getAccObjs(String name, irille.pub.gl.AccObjs objs) {
	};

	@Override
	public void initTallyLines(TallyLines ls) {
	}

	// >>>以下是自动产生的源代码行--源代码--请保留此行用于识别>>>
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
  private Integer _createdBy;	// 交接人 <表主键:SysUser>  INT
  private Date _createdTime;	// 交出时间  TIME
  private Integer _apprBy;	// 审核员 <表主键:SysUser>  INT<null>
  private Date _apprTime;	// 审核时间  TIME<null>
  private Integer _tallyBy;	// 记账员 <表主键:SysUser>  INT<null>
  private Date _tallyTime;	// 记账日期  DATE<null>
  private String _rem;	// 备注  STR(200)<null>
  private Long _sourceJournal;	// 来源账户 <表主键:RpJournal>  LONG
  private Byte _type;	// 类型 <OMvType>  BYTE
	// CELL:1,核算单元内部
	// ORG:2,机构内部核算单元之间
	// GRP:3,跨机构
  private Long _descJournal;	// 调入账户 <表主键:RpJournal>  LONG
  private Integer _descOrg;	// 调入机构 <表主键:SysOrg>  INT
  private Integer _descCell;	// 调入核算单元 <表主键:SysCell>  INT
  private BigDecimal _amt;	// 金额  DEC(16,2)
  private Integer _descBy;	// 调入接收人 <表主键:SysUser>  INT
  private Date _takeOverTime;	// 接收时间  TIME<null>
  private Short _rowVersion;	// 版本  SHORT

	@Override
  public RpFundMvOld init(){
		super.init();
    _code=null;	// 单据号  STR(40)
    _status=OBillStatus.DEFAULT.getLine().getKey();	// 状态 <OBillStatus>  BYTE
    _org=null;	// 机构 <表主键:SysOrg>  INT
    _cell=null;	// 核算单元 <表主键:SysCell>  INT
    _dept=null;	// 部门 <表主键:SysDept>  INT
    _createdBy=Idu.getUser().getPkey();	// 交接人 <表主键:SysUser>  INT
    _createdTime=Env.getTranBeginTime();	// 交出时间  TIME
    _apprBy=null;	// 审核员 <表主键:SysUser>  INT
    _apprTime=null;	// 审核时间  TIME
    _tallyBy=null;	// 记账员 <表主键:SysUser>  INT
    _tallyTime=null;	// 记账日期  DATE
    _rem=null;	// 备注  STR(200)
    _sourceJournal=null;	// 来源账户 <表主键:RpJournal>  LONG
    _type=OMvType.DEFAULT.getLine().getKey();	// 类型 <OMvType>  BYTE
    _descJournal=null;	// 调入账户 <表主键:RpJournal>  LONG
    _descOrg=null;	// 调入机构 <表主键:SysOrg>  INT
    _descCell=null;	// 调入核算单元 <表主键:SysCell>  INT
    _amt=ZERO;	// 金额  DEC(16,2)
    _descBy=null;	// 调入接收人 <表主键:SysUser>  INT
    _takeOverTime=null;	// 接收时间  TIME
    _rowVersion=0;	// 版本  SHORT
    return this;
  }

  //方法----------------------------------------------
  public static RpFundMvOld loadUniqueCode(boolean lockFlag,String code) {
    return (RpFundMvOld)loadUnique(T.IDX_CODE,lockFlag,code);
  }
  public static RpFundMvOld chkUniqueCode(boolean lockFlag,String code) {
    return (RpFundMvOld)chkUnique(T.IDX_CODE,lockFlag,code);
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
  public Long getSourceJournal(){
    return _sourceJournal;
  }
  public void setSourceJournal(Long sourceJournal){
    _sourceJournal=sourceJournal;
  }
  public RpJournal gtSourceJournal(){
    if(getSourceJournal()==null)
      return null;
    return (RpJournal)get(RpJournal.class,getSourceJournal());
  }
  public void stSourceJournal(RpJournal sourceJournal){
    if(sourceJournal==null)
      setSourceJournal(null);
    else
      setSourceJournal(sourceJournal.getPkey());
  }
  public Byte getType(){
    return _type;
  }
  public void setType(Byte type){
    _type=type;
  }
  public OMvType gtType(){
    return (OMvType)(OMvType.CELL.getLine().get(_type));
  }
  public void stType(OMvType type){
    _type=type.getLine().getKey();
  }
  public Long getDescJournal(){
    return _descJournal;
  }
  public void setDescJournal(Long descJournal){
    _descJournal=descJournal;
  }
  public RpJournal gtDescJournal(){
    if(getDescJournal()==null)
      return null;
    return (RpJournal)get(RpJournal.class,getDescJournal());
  }
  public void stDescJournal(RpJournal descJournal){
    if(descJournal==null)
      setDescJournal(null);
    else
      setDescJournal(descJournal.getPkey());
  }
  public Integer getDescOrg(){
    return _descOrg;
  }
  public void setDescOrg(Integer descOrg){
    _descOrg=descOrg;
  }
  public SysOrg gtDescOrg(){
    if(getDescOrg()==null)
      return null;
    return (SysOrg)get(SysOrg.class,getDescOrg());
  }
  public void stDescOrg(SysOrg descOrg){
    if(descOrg==null)
      setDescOrg(null);
    else
      setDescOrg(descOrg.getPkey());
  }
  public Integer getDescCell(){
    return _descCell;
  }
  public void setDescCell(Integer descCell){
    _descCell=descCell;
  }
  public SysCell gtDescCell(){
    if(getDescCell()==null)
      return null;
    return (SysCell)get(SysCell.class,getDescCell());
  }
  public void stDescCell(SysCell descCell){
    if(descCell==null)
      setDescCell(null);
    else
      setDescCell(descCell.getPkey());
  }
  public BigDecimal getAmt(){
    return _amt;
  }
  public void setAmt(BigDecimal amt){
    _amt=amt;
  }
  public Integer getDescBy(){
    return _descBy;
  }
  public void setDescBy(Integer descBy){
    _descBy=descBy;
  }
  public SysUser gtDescBy(){
    if(getDescBy()==null)
      return null;
    return (SysUser)get(SysUser.class,getDescBy());
  }
  public void stDescBy(SysUser descBy){
    if(descBy==null)
      setDescBy(null);
    else
      setDescBy(descBy.getPkey());
  }
  public Date getTakeOverTime(){
    return _takeOverTime;
  }
  public void setTakeOverTime(Date takeOverTime){
    _takeOverTime=takeOverTime;
  }
  public Short getRowVersion(){
    return _rowVersion;
  }
  public void setRowVersion(Short rowVersion){
    _rowVersion=rowVersion;
  }

	// <<<以上是自动产生的源代码行--源代码--请保留此行用于识别<<<
}
