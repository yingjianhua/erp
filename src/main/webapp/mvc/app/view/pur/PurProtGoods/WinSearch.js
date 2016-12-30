Ext.define('mvc.view.pur.PurProtGoods.WinSearch',{
extend : 'Ext.window.Window',
oldId : 'PurProtGoods_searchWin_',
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
			url : base_path+'/pur_PurProtGoods_list',
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
								text : '他方品名'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_vendorGoodsName',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'vendorGoodsName'}
							
						,{
								xtype : 'label',
								text : '他方代码'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_vendorNum',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'vendorNum'}
							
						,{
								xtype : 'label',
								text : '他方规格'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_vendorSpec',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'vendorSpec'}
							
						,{
								xtype : 'label',
								text : '协议价'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_price',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'price',decimalPrecision : 4}
							
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
								text : '上次成交价'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_priceLast',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'priceLast',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '上次成交时间'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_dateLast',
											width : 80,
											value : 7,
											store : datestore,
											listeners : {
												scope : this,
												change : function(field,newv,oldv,opts){
this.onBetween(newv,this.oldId + 'dateLast',this.oldId + 'dateLastEd',this.oldId + 'dateLast_empty');this.doLayout();											}
											}
										})
							,{
									xtype : 'datefield',
									name : 'dateLast',
									format : 'Y-m-d',
									itemId : this.oldId + 'dateLast'
								},{
									xtype : 'datefieldexp',
									name : 'dateLastEd',
									format : 'Y-m-d',
									hidden : true,
									itemId : this.oldId + 'dateLastEd'
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