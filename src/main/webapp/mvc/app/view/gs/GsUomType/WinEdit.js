Ext.define('mvc.view.gs.GsUomType.WinEdit',{
extend : 'Ext.window.Window',
width : 800,
height : 500,
layout : 'border',
resizable : true,
maximizable : true,
modal : true,
iconCls : 'app-icon',
record : null,
oldId : 'GsUomType_edit_',
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
		items : [{xtype : 'textfield',fieldLabel : '名称',value : this.record.get('bean.name')}
			,{xtype : 'textfield',fieldLabel : '快捷键',value : this.record.get('bean.shortkey')}
			,
				mvc.Tools.crtComboForm(true,{
							value : this.record.get('bean.enabled'),
							fieldLabel : '启用标志',
							store : Ext.create('mvc.combo.sys.SysOEnabled')
						})
			,{xtype : 'textfield',fieldLabel : '备注',value : this.record.get('bean.rem')}
			]
	},{
		region : 'center',
		xtype : 'tabpanel',
		border : false,
		items : [{
				xtype: Ext.create('mvc.view.gs.GsUom.ListEdit',{
							border : false,
							title : '计量单位',
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