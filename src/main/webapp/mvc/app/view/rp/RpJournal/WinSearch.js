Ext.define('mvc.view.rp.RpJournal.WinSearch',{
extend : 'Ext.window.Window',
oldId : 'RpJournal_searchWin_',
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
			url : base_path+'/rp_RpJournal_list',
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
								text : '代码'
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
								text : '名称'
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
								text : '启用标志'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_enabled',
											width : 80,
											value : 3,
											store : numstore
										})
							,mvc.Tools.crtComboForm(true,{
											name : 'enabled',
											store : Ext.create('mvc.combo.sys.SysOEnabled')
										})
							
						,{
								xtype : 'label',
								text : '账户类型'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_rpJournalType',
											width : 80,
											value : 3,
											store : numstore
										})
							,mvc.Tools.crtComboForm(true,{
											name : 'rpJournalType',
											store : Ext.create('mvc.combo.rp.RpORpJournalType')
										})
							
						,{
								xtype : 'label',
								text : '昨天余额'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_yestodayBalance',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'yestodayBalance',decimalPrecision : 2}
							
						,{
								xtype : 'label',
								text : '今日收入笔数'
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
								text : '今日收入金额'
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
								text : '今日支出笔数'
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
								text : '今日支出金额'
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
								text : '今日余额'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_balance',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'balance',decimalPrecision : 2}
							
						,{
								xtype : 'label',
								text : '银行名称'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_bankName',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'bankName'}
							
						,{
								xtype : 'label',
								text : '银行账号'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_bankAccCode',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'bankAccCode'}
							
						,{
								xtype : 'label',
								text : '账户名称'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_bankAccName',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'bankAccName'}
							
						,{
								xtype : 'label',
								text : '所属工作箱'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_workBox',
											width : 80,
											value : 3,
											store : outstore
										})
							,{
								xtype : 'beantrigger',
								name : 'workBox',
								bean : 'RpWorkBox',
								beanType : 'rp',
								emptyText : form_empty_text
							}
						,{
								xtype : 'label',
								text : '出纳'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_cashier',
											width : 80,
											value : 3,
											store : outstore
										})
							,{
								xtype : 'beantrigger',
								name : 'cashier',
								bean : 'SysUser',
								beanType : 'sys',
								emptyText : form_empty_text
							}
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