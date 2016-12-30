Ext.define('mvc.view.gl.GlRate.WinSearch',{
extend : 'Ext.window.Window',
oldId : 'GlRate_searchWin_',
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
			url : base_path+'/gl_GlRate_list',
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
								text : '利率类型'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_rateType',
											width : 80,
											value : 3,
											store : outstore
										})
							,
								mvc.Tools.crtComboTrigger(true,'gl_GlRateType','',{
											name : 'rateType'
										})
							
						,{
								xtype : 'label',
								text : '基准利率'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_baseRate',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'baseRate',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '最大上浮幅度'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_floatUp',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'floatUp',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '最大下浮幅度'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_floatDown',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'floatDown',decimalPrecision : 4}
							
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
								text : '罚息利率'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_interestRate',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'interestRate',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '罚息最大上浮幅度'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_irFloatUp',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'irFloatUp',decimalPrecision : 4}
							
						,{
								xtype : 'label',
								text : '罚息最大下浮幅度'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_irFloatDown',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'irFloatDown',decimalPrecision : 4}
							
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
								text : '启用日期'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_bdate',
											width : 80,
											value : 11,
											store : datestore,
											listeners : {
												scope : this,
												change : function(field,newv,oldv,opts){
this.onBetween(newv,this.oldId + 'bdate_label',this.oldId + 'bdateEd',this.oldId + 'bdate_empty');this.doLayout();											}
											}
										})
							,{
									xtype : 'datefield',
									name : 'bdate',
									format : 'Y-m-d'
								},{
									xtype : 'label',
									text : '至',
									itemId : this.oldId + 'bdate_label'
								},{
									xtype : 'datefield',
									name : 'bdateEd',
									format : 'Y-m-d',
									colspan : 2,
									itemId : this.oldId + 'bdateEd'
								},{
									xtype : 'label',
									text : '',
									colspan : 3,
									hidden : true,
									itemId : this.oldId + 'bdate_empty'
								}
							
						,{
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