Ext.define('mvc.view.gs.GsPriceGoodsKind.WinSearch',{
extend : 'Ext.window.Window',
oldId : 'GsPriceGoodsKind_searchWin_',
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
			url : base_path+'/gs_GsPriceGoodsKind_list',
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
								text : '定价名称'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_price',
											width : 80,
											value : 3,
											store : outstore
										})
							,
								mvc.Tools.crtComboTrigger(true,'gs_GsPrice','',{
											name : 'price'
										})
							
						,{
								xtype : 'label',
								text : '定价基数来源'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_priceOrig',
											width : 80,
											value : 3,
											store : numstore
										})
							,mvc.Tools.crtComboForm(true,{
											name : 'priceOrig',
											store : Ext.create('mvc.combo.gs.GsOPriceOrig')
										})
							
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
								text : '利润率1(%)'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_rate1',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'rate1',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '利润率2(%)'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_rate2',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'rate2',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '利润率3(%)'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_rate3',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'rate3',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '利润率4(%)'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_rate4',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'rate4',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '利润率5(%)'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_rate5',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'rate5',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '利润率6(%)'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_rate6',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'rate6',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '利润率7(%)'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_rate7',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'rate7',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '利润率8(%)'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_rate8',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'rate8',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '利润率9(%)'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_rate9',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'rate9',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '利润率10(%)'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_rate10',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'rate10',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '利润率11(%)'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_rate11',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'rate11',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '利润率12(%)'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_rate12',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'rate12',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '可视范围'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_rangeType',
											width : 80,
											value : 3,
											store : numstore
										})
							,mvc.Tools.crtComboForm(true,{
											name : 'rangeType',
											store : Ext.create('mvc.combo.sys.SysORangeType')
										})
							
						,{
								xtype : 'label',
								text : '可用对象主键值'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_rangePkey',
											width : 80
										})
							,{xtype : 'beantrigger',name : 'rangePkey'}
							
						,{
								xtype : 'label',
								text : '管理核算单元'
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