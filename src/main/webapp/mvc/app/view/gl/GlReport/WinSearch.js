Ext.define('mvc.view.gl.GlReport.WinSearch',{
extend : 'Ext.window.Window',
oldId : 'GlReport_searchWin_',
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
			url : base_path+'/gl_GlReport_list',
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
								text : '键'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_keyValue',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'keyValue',allowDecimals : false}
							
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
								text : '上级'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_parent',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'parent',allowDecimals : false}
							
						,{
								xtype : 'label',
								text : '表类型'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_tableType',
											width : 80,
											value : 3,
											store : numstore
										})
							,mvc.Tools.crtComboForm(true,{
											name : 'tableType',
											store : Ext.create('mvc.combo.gl.GlOTableType')
										})
							
						,{
								xtype : 'label',
								text : '值类型'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_valueType',
											width : 80,
											value : 3,
											store : numstore
										})
							,mvc.Tools.crtComboForm(true,{
											name : 'valueType',
											store : Ext.create('mvc.combo.gl.GlOValueType')
										})
							
						,{
								xtype : 'label',
								text : '加减类型'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_symbolType',
											width : 80,
											value : 3,
											store : numstore
										})
							,mvc.Tools.crtComboForm(true,{
											name : 'symbolType',
											store : Ext.create('mvc.combo.gl.GlOSymbolType')
										})
							
						,{
								xtype : 'label',
								text : '顺序号'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_orderId',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'orderId',allowDecimals : false}
							
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