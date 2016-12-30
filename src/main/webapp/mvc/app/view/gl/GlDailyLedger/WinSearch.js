Ext.define('mvc.view.gl.GlDailyLedger.WinSearch',{
extend : 'Ext.window.Window',
oldId : 'GlDailyLedger_searchWin_',
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
			url : base_path+'/gl_GlDailyLedger_list',
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
								text : '核算单元'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_cell',
											width : 80,
											value : 3,
											store : outstore
										})
							,
								mvc.Tools.crtComboTrigger(true,'sys_SysCell','',{
											name : 'cell'
										})
							
						,{
								xtype : 'label',
								text : '科目字典'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_subject',
											width : 80,
											value : 3,
											store : outstore
										})
							,{
								xtype : 'beantrigger',
								name : 'subject',
								bean : 'GlSubject',
								beanType : 'gl',
								emptyText : form_empty_text
							}
						,{
								xtype : 'label',
								text : '工作日期'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_workDate',
											width : 80,
											value : 7,
											store : datestore,
											listeners : {
												scope : this,
												change : function(field,newv,oldv,opts){
this.onBetween(newv,this.oldId + 'workDate',this.oldId + 'workDateEd',this.oldId + 'workDate_empty');this.doLayout();											}
											}
										})
							,{
									xtype : 'datefield',
									name : 'workDate',
									format : 'Y-m-d',
									itemId : this.oldId + 'workDate'
								},{
									xtype : 'datefieldexp',
									name : 'workDateEd',
									format : 'Y-m-d',
									hidden : true,
									itemId : this.oldId + 'workDateEd'
								}
							
						,{
								xtype : 'label',
								text : '币种'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_currency',
											width : 80,
											value : 3,
											store : numstore
										})
							,mvc.Tools.crtComboForm(true,{
											name : 'currency',
											store : Ext.create('mvc.combo.sys.SysOCurrency')
										})
							
						,{
								xtype : 'label',
								text : '借方发生笔数'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_drQty',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'drQty',allowDecimals : false}
							
						,{
								xtype : 'label',
								text : '借方发生额'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_drAmt',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'drAmt',decimalPrecision : 2}
							
						,{
								xtype : 'label',
								text : '贷方发生笔数'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_crQty',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'crQty',allowDecimals : false}
							
						,{
								xtype : 'label',
								text : '贷方发生额'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_crAmt',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'crAmt',decimalPrecision : 2}
							
						,{
								xtype : 'label',
								text : '借方余额'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_drBalance',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'drBalance',decimalPrecision : 2}
							
						,{
								xtype : 'label',
								text : '贷方余额'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_crBalance',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'crBalance',decimalPrecision : 2}
							
						,{
								xtype : 'label',
								text : '有效账户数'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_num',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'num',allowDecimals : false}
							
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