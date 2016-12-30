Ext.define('mvc.view.gl.GlReport.List',{
extend : 'Ext.panel.Panel',
oldId : 'GlReport_list_',
loadMask : true,
multiSelect : true,
roles : '',
layout : 'border',
lock : true,
mdSearch : null,
mdAct : null,
mdMain : null,
mdMainTable : null,
mdLineTable : null,
initComponent : function(){
var mainActs = [];		this.items =[{
		region : 'north',
		xtype : 'panel',
		border : false,
		items : [{
				xtype : 'toolbar',
				itemId : this.oldId+'act',
				items : mainActs
			},{
				xtype : 'form',
				itemId :  this.oldId+'main',
				bodyPadding : '5 5 0 5',
				fieldDefaults : {
					anchor : '100%',
					labelWidth : 100,
					width : 275,
					labelAlign : 'right',
					readOnly : true
				},
				items : [{
						xtype : 'fieldset',
						title : '报表设置信息',
						collapsible : true,
						layout : {
							type : 'table',
							columns : 3
						},
						items : [{
								xtype : 'hiddenfield',
								name : 'bean.pkey'
							},{xtype : 'textfield',name : 'bean.code',fieldLabel : '代码'}
							,{xtype : 'numberfield',name : 'bean.keyValue',fieldLabel : '键',allowDecimals : false}
							,{xtype : 'textfield',name : 'bean.name',fieldLabel : '名称'}
							,{xtype : 'numberfield',name : 'bean.parent',fieldLabel : '上级',allowDecimals : false}
							,
								mvc.Tools.crtComboForm(true,{
											name : 'bean.tableType',
											fieldLabel : '表类型',
											store : Ext.create('mvc.combo.gl.GlOTableType')
										})
							,
								mvc.Tools.crtComboForm(true,{
											name : 'bean.valueType',
											fieldLabel : '值类型',
											store : Ext.create('mvc.combo.gl.GlOValueType')
										})
							,
								mvc.Tools.crtComboForm(true,{
											name : 'bean.symbolType',
											fieldLabel : '加减类型',
											store : Ext.create('mvc.combo.gl.GlOSymbolType')
										})
							,{xtype : 'numberfield',name : 'bean.orderId',fieldLabel : '顺序号',allowDecimals : false}
							]
					}]
			}]
	},{
		region : 'center',
		xtype : 'tabpanel',
		tabBar : {
			style : 'background:#fff'
		},
		items : [{
				xtype : Ext.create('mvc.view.gl.GlReport.ListMain',{
							title : '资产报表设置',
							itemId : this.oldId+'maintable1',
							iconCls : 'tab-user-icon',
							roles : this.roles
						})
			},{
				xtype : Ext.create('mvc.view.gl.GlReport.ListMain',{
							title : '负债报表设置',
							itemId : this.oldId+'maintable2',
							iconCls : 'tab-user-icon',
							roles : this.roles
						})
			},{
				xtype : Ext.create('mvc.view.gl.GlReport.ListMain',{
							title : '所有者权益报表设置',
							itemId : this.oldId+'maintable3',
							iconCls : 'tab-user-icon',
							roles : this.roles
						})
			},{
				xtype : Ext.create('mvc.view.gl.GlReport.ListMain',{
							title : '利润表报表设置',
							itemId : this.oldId+'maintable4',
							iconCls : 'tab-user-icon',
							roles : this.roles
						})
			},{
				xtype : Ext.create('mvc.view.gl.GlReport.ListLineGlReportLine',{
							title : '报表设置明细',
							itemId : this.oldId+'linetable',
							iconCls : 'tab-user-icon'
						})
			}]
	}];
		this.callParent(arguments);
		this.mdSearch = this.down('#'+this.oldId+'search');
		this.mdAct = this.down('#'+this.oldId+'act');
		this.mdMain = this.down('#'+this.oldId+'main');
		this.mdMainTable = this.down('#'+this.oldId+'maintable');
		this.mdLineTable = this.down('#'+this.oldId+'linetable');
		var table;
		var array;
		for(var i=1;i<=4;i++) {
			table = this.down('#'+this.oldId+'maintable'+i);
			array = [{"property":"tableType","value":i}];
			table.store.clearFilter(true);
			table.store.filter(array);
		}
},
getStore : function(){
		return this.mdMainTable.store;
},
onSearchCancel : function(){
		mvc.Tools.searchClear(this.mdSearch);
		this.mdMainTable.store.clearFilter();
},
freshTable : function(){
		var table;
		var array;
		for(var i=1;i<=4;i++) {
			table = this.down('#'+this.oldId+'maintable'+i);
			array = [{"property":"tableType","value":i}];
			table.store.clearFilter(true);
			table.store.filter(array);
		}
},
onSearchAdv : function(){
		var win = Ext.create('mvc.view.gl.GlReport.WinSearch',{
			title : this.title+'>高级搜索',
			listStore : this.mdMainTable.store
		});
		win.show();
}
});