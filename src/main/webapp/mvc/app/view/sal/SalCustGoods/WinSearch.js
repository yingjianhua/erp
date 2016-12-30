Ext.define('mvc.view.sal.SalCustGoods.WinSearch',{
extend : 'Ext.window.Window',
oldId : 'SalCustGoods_searchWin_',
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
			url : base_path+'/sal_SalCustGoods_list',
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
								text : '客户'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_cust',
											width : 80,
											value : 3,
											store : outstore
										})
							,{
								xtype : 'beantrigger',
								name : 'cust',
								bean : 'SysCustom',
								beanType : 'sys',
								emptyText : form_empty_text
							}
						,{
								xtype : 'label',
								text : '货物'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_goods',
											width : 80,
											value : 3,
											store : outstore
										})
							,{
								xtype : 'beantrigger',
								name : 'goods',
								bean : 'GsGoods',
								beanType : 'gs',
								emptyText : form_empty_text
							}
						,{
								xtype : 'label',
								text : '货物名称'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_goodsName',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'goodsName'}
							
						,{
								xtype : 'label',
								text : '货物规格'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_goodsSpec',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'goodsSpec'}
							
						,{
								xtype : 'label',
								text : '上次成交价'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_latestPrice',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'latestPrice',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '上次成交日期'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_latestDate',
											width : 80,
											value : 7,
											store : datestore,
											listeners : {
												scope : this,
												change : function(field,newv,oldv,opts){
this.onBetween(newv,this.oldId + 'latestDate',this.oldId + 'latestDateEd',this.oldId + 'latestDate_empty');this.doLayout();											}
											}
										})
							,{
									xtype : 'datefield',
									name : 'latestDate',
									format : 'Y-m-d',
									itemId : this.oldId + 'latestDate'
								},{
									xtype : 'datefieldexp',
									name : 'latestDateEd',
									format : 'Y-m-d',
									hidden : true,
									itemId : this.oldId + 'latestDateEd'
								}
							
						,{
								xtype : 'label',
								text : '上次成交特价'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_latestSpePrice',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'latestSpePrice',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '上次特价成交日期'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_latestSpeDate',
											width : 80,
											value : 7,
											store : datestore,
											listeners : {
												scope : this,
												change : function(field,newv,oldv,opts){
this.onBetween(newv,this.oldId + 'latestSpeDate',this.oldId + 'latestSpeDateEd',this.oldId + 'latestSpeDate_empty');this.doLayout();											}
											}
										})
							,{
									xtype : 'datefield',
									name : 'latestSpeDate',
									format : 'Y-m-d',
									itemId : this.oldId + 'latestSpeDate'
								},{
									xtype : 'datefieldexp',
									name : 'latestSpeDateEd',
									format : 'Y-m-d',
									hidden : true,
									itemId : this.oldId + 'latestSpeDateEd'
								}
							
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