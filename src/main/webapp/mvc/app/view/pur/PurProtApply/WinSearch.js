Ext.define('mvc.view.pur.PurProtApply.WinSearch',{
extend : 'Ext.window.Window',
oldId : 'PurProtApply_searchWin_',
width : 680,
layout : 'fit',
resizable : true,
iconCls : 'app-icon',
listCmp : null,
initComponent : function(){
	var strstore = Ext.create('mvc.combo.sys.SysOOptCht');
	var datestore = Ext.create('mvc.combo.sys.SysOOptCht');
	var numstore = Ext.create('mvc.combo.sys.SysOOptCht');
	var outstore = Ext.create('mvc.combo.sys.SysOOptCht');
	strstore.filter('value', new RegExp('^([1-4|9]|[1][0])$'));
	datestore.filter('value', new RegExp('^([3-9]|[1][0-1])$'));
	numstore.filter('value', new RegExp('^([3-9]|[1][0])$'));
	outstore.filter('value', new RegExp('^([3|4|9]|[1][0])$'));
	this.items ={
	anchor : '100%',
	plain : true,
	items : [{
			xtype : 'panel',
			layout : 'form',
			border : false,
			frame : false,
			bodyPadding : '5 5 5 5',
			url : base_path+'/pur_PurProtApply_list',
			fieldDefaults : {
				labelWidth : 100,
				labelStyle : 'font-weight : bold'
			},
			items : [{
					xtype : 'form',
					border : false,
					layout : {
						type : 'table',
						columns : 6,
						itemCls : 'x-layout-table-items-form'
					},
					items : [{
								xtype : 'label',
								text : '单据号'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_code',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'code'}
							
						,{
								xtype : 'label',
								text : '科目模板'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_templat',
											width : 80,
											value : 3,
											store : outstore
										})
							,
								mvc.Tools.crtComboTrigger(true,'sys_SysTemplat','',{
											name : 'templat'
										})
							
						,{
								xtype : 'label',
								text : '供应商'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_supplier',
											width : 80,
											value : 3,
											store : outstore
										})
							,
								mvc.Tools.crtComboTrigger(true,'sys_SysSupplier','',{
											name : 'supplier'
										})
							
						,{
								xtype : 'label',
								text : '供应商名称'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_name',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'name'}
							
						,{
								xtype : 'label',
								text : '结算方式'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_settle',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'settle'}
							
						,{
								xtype : 'label',
								text : '是否月结'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_settleMonth',
											width : 80,
											value : 3,
											store : numstore
										})
							,mvc.Tools.crtComboForm(true,{
											name : 'settleMonth',
											store : Ext.create('mvc.combo.sys.SysOYn')
										})
							
						,{
								xtype : 'label',
								text : '次月天数'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_settleNextDay',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'settleNextDay',allowDecimals : false}
							
						,{
								xtype : 'label',
								text : '信用等级'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_creditLevel',
											width : 80,
											value : 3,
											store : numstore
										})
							,mvc.Tools.crtComboForm(true,{
											name : 'creditLevel',
											store : Ext.create('mvc.combo.sal.SalOCreditLevel')
										})
							
						,{
								xtype : 'label',
								text : '信用额度'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_creditLimit',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'creditLimit',decimalPrecision : 2}
							
						,{
								xtype : 'label',
								text : '押抵金额'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_creditOther',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'creditOther',decimalPrecision : 2}
							
						,{
								xtype : 'label',
								text : '税点(%)'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_taxRate',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'taxRate',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '产品质量'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_descKind',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'descKind'}
							
						,{
								xtype : 'label',
								text : '年承诺销售数量'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_descSal',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'descSal'}
							
						,{
								xtype : 'label',
								text : '包装要求'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_packDemand',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'packDemand'}
							
						,{
								xtype : 'label',
								text : '费用承担方式'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_shipType',
											width : 80,
											value : 3,
											store : numstore
										})
							,mvc.Tools.crtComboForm(true,{
											name : 'shipType',
											store : Ext.create('mvc.combo.sal.SalOShipType')
										})
							
						,{
								xtype : 'label',
								text : '协议签订日期'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_dateProt',
											width : 80,
											value : 7,
											store : datestore,
											listeners : {
												scope : this,
												change : function(field,newv,oldv,opts){
this.onBetween(newv,this.oldId + 'dateProt',this.oldId + 'dateProtEd',this.oldId + 'dateProt_empty');this.doLayout();											}
											}
										})
							,{
									xtype : 'datefield',
									name : 'dateProt',
									format : 'Y-m-d',
									itemId : this.oldId + 'dateProt'
								},{
									xtype : 'datefieldexp',
									name : 'dateProtEd',
									format : 'Y-m-d',
									hidden : true,
									itemId : this.oldId + 'dateProtEd'
								}
							
						,{
								xtype : 'label',
								text : '启用日期'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_dateStart',
											width : 80,
											value : 7,
											store : datestore,
											listeners : {
												scope : this,
												change : function(field,newv,oldv,opts){
this.onBetween(newv,this.oldId + 'dateStart',this.oldId + 'dateStartEd',this.oldId + 'dateStart_empty');this.doLayout();											}
											}
										})
							,{
									xtype : 'datefield',
									name : 'dateStart',
									format : 'Y-m-d',
									itemId : this.oldId + 'dateStart'
								},{
									xtype : 'datefieldexp',
									name : 'dateStartEd',
									format : 'Y-m-d',
									hidden : true,
									itemId : this.oldId + 'dateStartEd'
								}
							
						,{
								xtype : 'label',
								text : '到期日期'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_dateEnd',
											width : 80,
											value : 7,
											store : datestore,
											listeners : {
												scope : this,
												change : function(field,newv,oldv,opts){
this.onBetween(newv,this.oldId + 'dateEnd',this.oldId + 'dateEndEd',this.oldId + 'dateEnd_empty');this.doLayout();											}
											}
										})
							,{
									xtype : 'datefield',
									name : 'dateEnd',
									format : 'Y-m-d',
									itemId : this.oldId + 'dateEnd'
								},{
									xtype : 'datefieldexp',
									name : 'dateEndEd',
									format : 'Y-m-d',
									hidden : true,
									itemId : this.oldId + 'dateEndEd'
								}
							
						,{
								xtype : 'label',
								text : '变更后结算方式'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_aftSettle',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'aftSettle'}
							
						,{
								xtype : 'label',
								text : '变更后是否月结'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_aftSettleMonth',
											width : 80,
											value : 3,
											store : numstore
										})
							,mvc.Tools.crtComboForm(true,{
											name : 'aftSettleMonth',
											store : Ext.create('mvc.combo.sys.SysOYn')
										})
							
						,{
								xtype : 'label',
								text : '变更后次月天数'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_aftSettleNextDay',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'aftSettleNextDay',allowDecimals : false}
							
						,{
								xtype : 'label',
								text : '变更后信用等级'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_aftCreditLevel',
											width : 80,
											value : 3,
											store : numstore
										})
							,mvc.Tools.crtComboForm(true,{
											name : 'aftCreditLevel',
											store : Ext.create('mvc.combo.sal.SalOCreditLevel')
										})
							
						,{
								xtype : 'label',
								text : '变更后信用额度'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_aftCreditLimit',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'aftCreditLimit',decimalPrecision : 2}
							
						,{
								xtype : 'label',
								text : '变更后押抵金额'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_aftCreditOther',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'aftCreditOther',decimalPrecision : 2}
							
						,{
								xtype : 'label',
								text : '变更后税点(%)'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_aftTaxRate',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'aftTaxRate',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '变更后产品质量'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_aftDescKind',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'aftDescKind'}
							
						,{
								xtype : 'label',
								text : '变更后年承诺销售数量'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_aftDescSal',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'aftDescSal'}
							
						,{
								xtype : 'label',
								text : '变更后包装要求'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_aftPackDemand',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'aftPackDemand'}
							
						,{
								xtype : 'label',
								text : '变更后费用承担方式'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_aftShipType',
											width : 80,
											value : 3,
											store : numstore
										})
							,mvc.Tools.crtComboForm(true,{
											name : 'aftShipType',
											store : Ext.create('mvc.combo.sal.SalOShipType')
										})
							
						,{
								xtype : 'label',
								text : '变更后协议签订日期'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_aftDateProt',
											width : 80,
											value : 7,
											store : datestore,
											listeners : {
												scope : this,
												change : function(field,newv,oldv,opts){
this.onBetween(newv,this.oldId + 'aftDateProt',this.oldId + 'aftDateProtEd',this.oldId + 'aftDateProt_empty');this.doLayout();											}
											}
										})
							,{
									xtype : 'datefield',
									name : 'aftDateProt',
									format : 'Y-m-d',
									itemId : this.oldId + 'aftDateProt'
								},{
									xtype : 'datefieldexp',
									name : 'aftDateProtEd',
									format : 'Y-m-d',
									hidden : true,
									itemId : this.oldId + 'aftDateProtEd'
								}
							
						,{
								xtype : 'label',
								text : '变更后启用日期'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_aftDateStart',
											width : 80,
											value : 7,
											store : datestore,
											listeners : {
												scope : this,
												change : function(field,newv,oldv,opts){
this.onBetween(newv,this.oldId + 'aftDateStart',this.oldId + 'aftDateStartEd',this.oldId + 'aftDateStart_empty');this.doLayout();											}
											}
										})
							,{
									xtype : 'datefield',
									name : 'aftDateStart',
									format : 'Y-m-d',
									itemId : this.oldId + 'aftDateStart'
								},{
									xtype : 'datefieldexp',
									name : 'aftDateStartEd',
									format : 'Y-m-d',
									hidden : true,
									itemId : this.oldId + 'aftDateStartEd'
								}
							
						,{
								xtype : 'label',
								text : '变更后到期日期'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_aftDateEnd',
											width : 80,
											value : 7,
											store : datestore,
											listeners : {
												scope : this,
												change : function(field,newv,oldv,opts){
this.onBetween(newv,this.oldId + 'aftDateEnd',this.oldId + 'aftDateEndEd',this.oldId + 'aftDateEnd_empty');this.doLayout();											}
											}
										})
							,{
									xtype : 'datefield',
									name : 'aftDateEnd',
									format : 'Y-m-d',
									itemId : this.oldId + 'aftDateEnd'
								},{
									xtype : 'datefieldexp',
									name : 'aftDateEndEd',
									format : 'Y-m-d',
									hidden : true,
									itemId : this.oldId + 'aftDateEndEd'
								}
							
						,{
								xtype : 'label',
								text : '状态'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_status',
											width : 80,
											value : 3,
											store : numstore
										})
							,mvc.Tools.crtComboForm(true,{
											name : 'status',
											store : Ext.create('mvc.combo.sys.SysOBillStatus')
										})
							
						,{
								xtype : 'label',
								text : '机构'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_org',
											width : 80,
											value : 3,
											store : outstore
										})
							,
								mvc.Tools.crtComboTrigger(true,'sys_SysOrg','',{
											name : 'org'
										})
							
						,{
								xtype : 'label',
								text : '部门'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_dept',
											width : 80,
											value : 3,
											store : outstore
										})
							,{
								xtype : 'beantrigger',
								name : 'dept',
								bean : 'SysDept',
								beanType : 'sys',
								emptyText : form_empty_text
							}
						,{
								xtype : 'label',
								text : '建档员'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_createdBy',
											width : 80,
											value : 3,
											store : outstore
										})
							,{
								xtype : 'beantrigger',
								name : 'createdBy',
								bean : 'SysUser',
								beanType : 'sys',
								emptyText : form_empty_text
							}
						,{
								xtype : 'label',
								text : '建档时间'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_createdTime',
											width : 80,
											value : 7,
											store : datestore,
											listeners : {
												scope : this,
												change : function(field,newv,oldv,opts){
this.onBetween(newv,this.oldId + 'createdTime',this.oldId + 'createdTimeEd',this.oldId + 'createdTime_empty');this.doLayout();											}
											}
										})
							,{
									xtype : 'datefield',
									name : 'createdTime',
									format : 'Y-m-d H:i:s',
									itemId : this.oldId + 'createdTime'
								},{
									xtype : 'datefieldexp',
									name : 'createdTimeEd',
									format : 'Y-m-d',
									hidden : true,
									itemId : this.oldId + 'createdTimeEd'
								}
							
						,{
								xtype : 'label',
								text : '审核员'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_apprBy',
											width : 80,
											value : 3,
											store : outstore
										})
							,{
								xtype : 'beantrigger',
								name : 'apprBy',
								bean : 'SysUser',
								beanType : 'sys',
								emptyText : form_empty_text
							}
						,{
								xtype : 'label',
								text : '审核时间'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_apprTime',
											width : 80,
											value : 7,
											store : datestore,
											listeners : {
												scope : this,
												change : function(field,newv,oldv,opts){
this.onBetween(newv,this.oldId + 'apprTime',this.oldId + 'apprTimeEd',this.oldId + 'apprTime_empty');this.doLayout();											}
											}
										})
							,{
									xtype : 'datefield',
									name : 'apprTime',
									format : 'Y-m-d H:i:s',
									itemId : this.oldId + 'apprTime'
								},{
									xtype : 'datefieldexp',
									name : 'apprTimeEd',
									format : 'Y-m-d',
									hidden : true,
									itemId : this.oldId + 'apprTimeEd'
								}
							
						,{
								xtype : 'label',
								text : '备注'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_rem',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'rem'}
							
						]
				}]
		}]
};
	this.buttonAlign = 'right',
	this.buttons =[{
		text : '重置',
		scope : this,
		iconCls : 'win-refresh-icon',
		handler : this.onReset
	},{
		text : '关闭',
		scope : this,
		iconCls : 'win-close-icon',
		handler : this.onClose
	},{
		text : '搜索',
		scope : this,
		iconCls : 'win-ok-icon',
		handler : this.onSearchAdv
	}];
		this.callParent(arguments);
		this.addEvents('create');
		this.form = this.items.items[0];
},
setActiveRecord : function(record){
		this.form.activeRecord = record;
		if (record || this.form.activeRecord) {
			this.form.getForm().loadRecord(record);
		} else {
			this.form.getForm().reset();
		}
},
onBetween : function(newv,label,dateEd){
	if(newv == 11) {
		this.down('#'+label).hide();
		this.down('#'+label).setValue(null);
		this.down('#'+dateEd).show();
	} else {
		this.down('#'+label).show();
		this.down('#'+dateEd).hide();
		this.down('#'+dateEd).setValue(null);
	}
},
onReset : function(){
		this.setActiveRecord(this.form.activeRecord);
},
onClose : function(){
		this.close();
},
onSearchAdv : function(){
	var array = mvc.Tools.advancedSearchValues(this.down('form'));
	this.listCmp.onSearchDo(array);
	this.close();
}
});