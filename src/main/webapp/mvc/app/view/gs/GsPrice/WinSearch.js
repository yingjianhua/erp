Ext.define('mvc.view.gs.GsPrice.WinSearch',{
extend : 'Ext.window.Window',
oldId : 'GsPrice_searchWin_',
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
			url : base_path+'/gs_GsPrice_list',
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
								text : '价格名称1'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_namePrice1',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'namePrice1'}
							
						,{
								xtype : 'label',
								text : '价格名称2'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_namePrice2',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'namePrice2'}
							
						,{
								xtype : 'label',
								text : '价格名称3'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_namePrice3',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'namePrice3'}
							
						,{
								xtype : 'label',
								text : '价格名称4'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_namePrice4',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'namePrice4'}
							
						,{
								xtype : 'label',
								text : '价格名称5'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_namePrice5',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'namePrice5'}
							
						,{
								xtype : 'label',
								text : '价格名称6'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_namePrice6',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'namePrice6'}
							
						,{
								xtype : 'label',
								text : '价格名称7'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_namePrice7',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'namePrice7'}
							
						,{
								xtype : 'label',
								text : '价格名称8'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_namePrice8',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'namePrice8'}
							
						,{
								xtype : 'label',
								text : '价格名称9'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_namePrice9',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'namePrice9'}
							
						,{
								xtype : 'label',
								text : '价格名称10'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_namePrice10',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'namePrice10'}
							
						,{
								xtype : 'label',
								text : '价格名称11'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_namePrice11',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'namePrice11'}
							
						,{
								xtype : 'label',
								text : '价格名称12'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_namePrice12',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'namePrice12'}
							
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