Ext.define('mvc.view.gs.GsIn.WinSearch',{
extend : 'Ext.window.Window',
oldId : 'GsIn_searchWin_',
width : 680,
layout : 'fit',
resizable : true,
iconCls : 'app-icon',
listStore : null,
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
			url : base_path+'/gs_GsIn_list',
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
							,
								mvc.Tools.crtComboTrigger(true,'sys_SysDept','',{
											name : 'dept'
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
							,
								mvc.Tools.crtComboTrigger(true,'sys_SysUser','',{
											name : 'createdBy'
										})
							
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
							,
								mvc.Tools.crtComboTrigger(true,'sys_SysUser','',{
											name : 'apprBy'
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
							
						,{
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
								text : '理货员'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_operator',
											width : 80,
											value : 3,
											store : outstore
										})
							,
								mvc.Tools.crtComboTrigger(true,'sys_SysUser','',{
											name : 'operator'
										})
							
						,{
								xtype : 'label',
								text : '检验员'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_checker',
											width : 80,
											value : 3,
											store : outstore
										})
							,
								mvc.Tools.crtComboTrigger(true,'sys_SysUser','',{
											name : 'checker'
										})
							
						,{
								xtype : 'label',
								text : '运输方式'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_shipingMode',
											width : 80,
											value : 3,
											store : numstore
										})
							,mvc.Tools.crtComboForm(true,{
											name : 'shipingMode',
											store : Ext.create('mvc.combo.sys.SysOShipingMode')
										})
							
						,{
								xtype : 'label',
								text : '发货信息'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_shiping',
											width : 80,
											value : 3,
											store : outstore
										})
							,
								mvc.Tools.crtComboTrigger(true,'sys_SysShiping','',{
											name : 'shiping'
										})
							
						,{
							xtype : 'label',
							text : '',
							colspan : 3
						},{
								xtype : 'label',
								text : '建档时间'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_createdTime',
											width : 80,
											value : 11,
											store : datestore,
											listeners : {
												scope : this,
												change : function(field,newv,oldv,opts){
this.onBetween(newv,this.oldId + 'createdTime_label',this.oldId + 'createdTimeEd',this.oldId + 'createdTime_empty');this.doLayout();											}
											}
										})
							,{
									xtype : 'datefield',
									name : 'createdTime',
									format : 'Y-m-d H:i:s'
								},{
									xtype : 'label',
									text : '至',
									itemId : this.oldId + 'createdTime_label'
								},{
									xtype : 'datefield',
									name : 'createdTimeEd',
									format : 'Y-m-d H:i:s',
									colspan : 2,
									itemId : this.oldId + 'createdTimeEd'
								},{
									xtype : 'label',
									text : '',
									colspan : 3,
									hidden : true,
									itemId : this.oldId + 'createdTime_empty'
								}
							
						,{
								xtype : 'label',
								text : '审核时间'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_apprTime',
											width : 80,
											value : 11,
											store : datestore,
											listeners : {
												scope : this,
												change : function(field,newv,oldv,opts){
this.onBetween(newv,this.oldId + 'apprTime_label',this.oldId + 'apprTimeEd',this.oldId + 'apprTime_empty');this.doLayout();											}
											}
										})
							,{
									xtype : 'datefield',
									name : 'apprTime',
									format : 'Y-m-d H:i:s'
								},{
									xtype : 'label',
									text : '至',
									itemId : this.oldId + 'apprTime_label'
								},{
									xtype : 'datefield',
									name : 'apprTimeEd',
									format : 'Y-m-d H:i:s',
									colspan : 2,
									itemId : this.oldId + 'apprTimeEd'
								},{
									xtype : 'label',
									text : '',
									colspan : 3,
									hidden : true,
									itemId : this.oldId + 'apprTime_empty'
								}
							
						,{
								xtype : 'label',
								text : '实际入库时间'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_inTime',
											width : 80,
											value : 11,
											store : datestore,
											listeners : {
												scope : this,
												change : function(field,newv,oldv,opts){
this.onBetween(newv,this.oldId + 'inTime_label',this.oldId + 'inTimeEd',this.oldId + 'inTime_empty');this.doLayout();											}
											}
										})
							,{
									xtype : 'datefield',
									name : 'inTime',
									format : 'Y-m-d H:i:s'
								},{
									xtype : 'label',
									text : '至',
									itemId : this.oldId + 'inTime_label'
								},{
									xtype : 'datefield',
									name : 'inTimeEd',
									format : 'Y-m-d H:i:s',
									colspan : 2,
									itemId : this.oldId + 'inTimeEd'
								},{
									xtype : 'label',
									text : '',
									colspan : 3,
									hidden : true,
									itemId : this.oldId + 'inTime_empty'
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
		handler : this.onSearch
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
onBetween : function(newv,label,dateEd,empty){
	if(newv == 11) {
		this.down('#'+label).show();
		this.down('#'+dateEd).show();
		this.down('#'+empty).hide();
	} else {
		this.down('#'+label).hide();
		this.down('#'+dateEd).hide();
		this.down('#'+empty).show();
	}
},
onReset : function(){
		this.setActiveRecord(this.form.activeRecord);
},
onClose : function(){
		this.close();
},
onSearch : function(){
	var array = mvc.Tools.advancedSearchValues(this.down('form'));
	if (array.length == 0){
		this.listStore.clearFilter();
		this.close();
		return;
	}
	this.listStore.clearFilter(true);
	this.listStore.filter(array);
	this.close();
}
});