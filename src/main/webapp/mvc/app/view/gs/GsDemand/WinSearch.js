Ext.define('mvc.view.gs.GsDemand.WinSearch',{
extend : 'Ext.window.Window',
oldId : 'GsDemand_searchWin_',
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
			url : base_path+'/gs_GsDemand_list',
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
								text : '仓库'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_warehouse',
											width : 80,
											value : 3,
											store : outstore
										})
							,
								mvc.Tools.crtComboTrigger(true,'gs_GsWarehouse','',{
											name : 'warehouse'
										})
							
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
								text : '数量'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_qty',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'qty',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '需求时间'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_requestTime',
											width : 80,
											value : 7,
											store : datestore,
											listeners : {
												scope : this,
												change : function(field,newv,oldv,opts){
this.onBetween(newv,this.oldId + 'requestTime',this.oldId + 'requestTimeEd',this.oldId + 'requestTime_empty');this.doLayout();											}
											}
										})
							,{
									xtype : 'datefield',
									name : 'requestTime',
									format : 'Y-m-d H:i:s',
									itemId : this.oldId + 'requestTime'
								},{
									xtype : 'datefieldexp',
									name : 'requestTimeEd',
									format : 'Y-m-d',
									hidden : true,
									itemId : this.oldId + 'requestTimeEd'
								}
							
						,{
								xtype : 'label',
								text : '源单据'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_origForm',
											width : 80
										})
							,{xtype : 'beantrigger',name : 'origForm'}
							
						,{
								xtype : 'label',
								text : '源单据号'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_origFormNum',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'origFormNum'}
							
						,{
								xtype : 'label',
								text : '供应单'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_poForm',
											width : 80
										})
							,{xtype : 'beantrigger',name : 'poForm'}
							
						,{
								xtype : 'label',
								text : '供应单号'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_poFormNum',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'poFormNum'}
							
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
								text : '来源单元'
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
								text : '来源机构'
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