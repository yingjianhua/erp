Ext.define('mvc.view.frm.FrmHandover.ListForm',{
extend : 'Ext.grid.Panel',
disableSelection : false,
loadMask : true,
cellEditing : Ext.create('Ext.grid.plugin.CellEditing', { clicksToEdit: 1 }),
mainPkey : null,
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
		this.columns =[
		       {text : '单据',width : 200,dataIndex : 'bean.form',sortable : true,renderer : mvc.Tools.beanRenderer()},
		       {text : '单据号',width : 200,dataIndex : 'bean.formNum',sortable : true}
		];
		this.store=Ext.create('mvc.store.frm.FrmHandoverLine');
		this.store.pageSize = 0;
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
		this.plugins = [this.cellEditing];
		this.callParent(arguments);	
},
onIns : function(){
		var win = Ext.create("mvc.view.frm.FrmPending.HandTrigger");
		win.on('trigger', this.onTrigger, this);
		win.show();
},
onTrigger : function(data, params) {
	this.store.loadData(data);
},
onDel : function(){
		var selection = this.getView().getSelectionModel().getSelection();
		if (selection){
			this.getStore().remove(selection);
		}
}
});