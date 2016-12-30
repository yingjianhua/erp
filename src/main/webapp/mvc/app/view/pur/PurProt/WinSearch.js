Ext.define('mvc.view.pur.PurProt.WinSearch',{
extend : 'Ext.window.Window',
oldId : 'PurProt_searchWin_',
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
			url : base_path+'/pur_PurProt_list',
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
								text : '运输方式'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_shipMode',
											width : 80,
											value : 3,
											store : outstore
										})
							,
								mvc.Tools.crtComboTrigger(true,'lgt_LgtShipMode','',{
											name : 'shipMode'
										})
							
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
								text : '更新员'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_updatedBy',
											width : 80,
											value : 3,
											store : outstore
										})
							,{
								xtype : 'beantrigger',
								name : 'updatedBy',
								bean : 'SysUser',
								beanType : 'sys',
								emptyText : form_empty_text
							}
						,{
								xtype : 'label',
								text : '更新时间'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_updatedTime',
											width : 80,
											value : 7,
											store : datestore,
											listeners : {
												scope : this,
												change : function(field,newv,oldv,opts){
this.onBetween(newv,this.oldId + 'updatedTime',this.oldId + 'updatedTimeEd',this.oldId + 'updatedTime_empty');this.doLayout();											}
											}
										})
							,{
									xtype : 'datefield',
									name : 'updatedTime',
									format : 'Y-m-d H:i:s',
									itemId : this.oldId + 'updatedTime'
								},{
									xtype : 'datefieldexp',
									name : 'updatedTimeEd',
									format : 'Y-m-d',
									hidden : true,
									itemId : this.oldId + 'updatedTimeEd'
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
							
						,{
							xtype : 'label',
							text : '',
							colspan : 3
						}]
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