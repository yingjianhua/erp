Ext.define('mvc.view.gs.GsUom.ListForm',{
extend : 'Ext.grid.Panel',
disableSelection : false,
loadMask : true,
mainKey : null,
initComponent : function(){
		var mainActs = [{
		text : '新增',
		iconCls : 'ins-icon',
		scope : this,
		handler : this.onIns
	},{
		text : '删除',
		iconCls : 'del-icon',
		scope : this,
		handler : this.onDel
	}];
		this.tbar = mainActs;
		this.store=Ext.create('mvc.store.【1】.【2】');
		this.store.pageSize = 0;
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
		this.plugins = [this.cellEditing];
		this.callParent(arguments);	
[{
				text : '名称',
				width : 100,
				dataIndex : 'bean.name',
				sortable : true,
				editor : {}
				
			},{
				text : '快捷键',
				width : 100,
				dataIndex : 'bean.shortkey',
				sortable : true,
				editor : {}
				
			},{
				text : '启用标志',
				width : 100,
				dataIndex : 'bean.enabled',
				sortable : true,
				renderer : mvc.Tools.optRenderer('sys','Sys','OEnabled')
				
			},{
				text : '备注',
				width : 100,
				dataIndex : 'bean.rem',
				sortable : true,
				editor : {}
				
			}]},
onIns : function(){
		var model = Ext.create('mvc.store.【从表包名】.【从表类名】');
        this.store.insert(0, model);
        this.cellEditing.startEditByPosition({row: 0, column: 0});
},
onDel : function(){
		var selection = this.getView().getSelectionModel().getSelection();
		if (selection){
			this.getStore().remove(selection);
		}
}
});