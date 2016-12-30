Ext.define('mvc.view.gs.GsGoods.WinSearch',{
extend : 'Ext.window.Window',
oldId : 'GsGoods_searchWin_',
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
			url : base_path+'/gs_GsGoods_list',
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
								text : '货物类别'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_kind',
											width : 80,
											value : 3,
											store : outstore
										})
							,{
								xtype : 'beantrigger',
								name : 'kind',
								bean : 'GsGoodsKind',
								beanType : 'gs',
								emptyText : form_empty_text
							}
						,{
								xtype : 'label',
								text : '原代码'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_codeOld',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'codeOld'}
							
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
								text : '快捷键'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_shortkey',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'shortkey'}
							
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
								text : '规格'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_spec',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'spec'}
							
						,{
								xtype : 'label',
								text : '属性名称1'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_cust1',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'cust1'}
							
						,{
								xtype : 'label',
								text : '属性名称2'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_cust2',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'cust2'}
							
						,{
								xtype : 'label',
								text : '属性名称3'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_cust3',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'cust3'}
							
						,{
								xtype : 'label',
								text : '属性名称4'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_cust4',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'cust4'}
							
						,{
								xtype : 'label',
								text : '属性名称5'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_cust5',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'cust5'}
							
						,{
								xtype : 'label',
								text : '单位重量'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_weightRate',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'weightRate',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '单位体积'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_valumeRate',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'valumeRate',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '入库标识'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_inFlag',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'inFlag'}
							
						,{
								xtype : 'label',
								text : '出库标识'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_outFlag',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'outFlag'}
							
						,{
								xtype : 'label',
								text : '描述'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_descrip',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'descrip'}
							
						,{
								xtype : 'label',
								text : '条型码'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_barCode',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'barCode'}
							
						,{
								xtype : 'label',
								text : '可否零库存出库'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_zeroOutFlag',
											width : 80,
											value : 3,
											store : numstore
										})
							,mvc.Tools.crtComboForm(true,{
											name : 'zeroOutFlag',
											store : Ext.create('mvc.combo.sys.SysOYn')
										})
							
						,{
								xtype : 'label',
								text : '批次管理类型'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_batchType',
											width : 80,
											value : 3,
											store : numstore
										})
							,mvc.Tools.crtComboForm(true,{
											name : 'batchType',
											store : Ext.create('mvc.combo.gs.GsOBatchType')
										})
							
						,{
								xtype : 'label',
								text : '经济批量'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_economicQty',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'economicQty',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '采购提前天数'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_purLeadDays',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'purLeadDays',allowDecimals : false}
							
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