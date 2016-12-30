Ext.define('mvc.view.gl.GlEntryDef.WinEdit',{
extend : 'Ext.window.Window',
width : 800,
height : 600,
layout : 'border',
resizable : true,
maximizable : true,
modal : true,
iconCls : 'app-icon',
record : null,
oldId : 'GlEntryDef_edit_',
isEdit : true,
initComponent : function(){
		var mainPkey = this.record.get('bean.pkey');
this.items =[{
		region : 'north',
		xtype : 'form',
		border : false,
		bodyPadding : '5 5 0 5',
		layout : {
			type : 'table',
			columns : 2,
			itemCls : 'x-layout-table-items'
		},
		fieldDefaults : {
			labelWidth : 120,
			width : 300,
			labelStyle : 'font-weight : bold',
			readOnly : true
		},
		items : [
				mvc.Tools.crtComboTrigger(true,'sys_SysTemplat','',{
							value : this.record.get('bean.templat'),
							fieldLabel : '科目模板'
						})
			,
				mvc.Tools.crtComboTrigger(true,'sys_SysTable','',{
							value : this.record.get('bean.tableId'),
							fieldLabel : '表'
						})
			,{xtype : 'textfield',fieldLabel : '代码',value : this.record.get('bean.code')}
			]
	},{
		region : 'center',
		xtype : 'tabpanel',
		border : false,
		items : [{
				xtype: Ext.create('mvc.view.gl.GlEntryDefLine.ListEdit',{
							border : false,
							title : '分录定义行',
							itemId : this.oldId+'1',
							mainPkey : mainPkey,
							iconCls : 'tab-user-icon',
							isEdit : this.isEdit
						})
			}]
	}];
		this.callParent(arguments);},
loadData : function(){
		this.down('#'+this.oldId+'1').onLoadFirst();
},
close : function(){
		//关闭WIN窗口时需要手动调用单元格编辑取消事件]
		var tab = this.down('tabpanel').getActiveTab();
		if (tab.isEdit)
			this.down('tabpanel').getActiveTab().cellEditing.cancelEdit();
		this.callParent(arguments);
}
});