Ext.define('mvc.view.gs.GsGoodsKind.WinSearch',{
extend : 'Ext.window.Window',
oldId : 'GsGoodsKind_searchWin_',
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
			url : base_path+'/gs_GsGoodsKind_list',
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
								text : '上级类别'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_parent',
											width : 80,
											value : 3,
											store : outstore
										})
							,{
								xtype : 'beantrigger',
								name : 'parent',
								bean : 'GsGoodsKind',
								beanType : 'gs',
								emptyText : form_empty_text
							}
						,{
								xtype : 'label',
								text : '类型'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_type',
											width : 80,
											value : 3,
											store : numstore
										})
							,mvc.Tools.crtComboForm(true,{
											name : 'type',
											store : Ext.create('mvc.combo.gs.GsOType')
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
								text : '存货科目别名'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_subjectAlias',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'subjectAlias'}
							
						,{
								xtype : 'label',
								text : '更新员'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_updateby',
											width : 80,
											value : 3,
											store : outstore
										})
							,{
								xtype : 'beantrigger',
								name : 'updateby',
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