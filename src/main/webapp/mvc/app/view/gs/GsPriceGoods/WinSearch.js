Ext.define('mvc.view.gs.GsPriceGoods.WinSearch',{
extend : 'Ext.window.Window',
oldId : 'GsPriceGoods_searchWin_',
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
			url : base_path+'/gs_GsPriceGoods_list',
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
								text : '计量单位'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_uom',
											width : 80,
											value : 3,
											store : outstore
										})
							,{
								xtype : 'beantrigger',
								name : 'uom',
								bean : 'GsUom',
								beanType : 'gs',
								emptyText : form_empty_text
							}
						,{
								xtype : 'label',
								text : '基础价格分类'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_priceKind',
											width : 80,
											value : 3,
											store : outstore
										})
							,
								mvc.Tools.crtComboTrigger(true,'gs_GsPriceGoodsKind','',{
											name : 'priceKind'
										})
							
						,{
								xtype : 'label',
								text : '定价名称'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_priceName',
											width : 80,
											value : 3,
											store : outstore
										})
							,
								mvc.Tools.crtComboTrigger(true,'gs_GsPrice','',{
											name : 'priceName'
										})
							
						,{
								xtype : 'label',
								text : '定价基数'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_priceCost',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'priceCost',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '价格1'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_price1',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'price1',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '价格2'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_price2',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'price2',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '价格3'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_price3',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'price3',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '价格4'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_price4',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'price4',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '价格5'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_price5',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'price5',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '价格6'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_price6',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'price6',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '价格7'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_price7',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'price7',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '价格8'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_price8',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'price8',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '价格9'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_price9',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'price9',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '价格10'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_price10',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'price10',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '价格11'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_price11',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'price11',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '价格12'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_price12',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'price12',decimalPrecision : 4}
							
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