Ext.define('mvc.view.pur.PurMvIn.WinDemand',{
extend : 'Ext.window.Window',
width : 770,
resizable : false,
modal : true,
iconCls : 'app-icon',
pkeyFlag : true,
demandStore : null,
supplierStore : null,
insFlag : true,
warehouse : null,
tmp : null,
parent : null,
supplier : null,
initComponent : function(){
	
	this.demandStore=Ext.create('mvc.store.gs.GsDemand');
	this.demandStore.remoteFilter = true;
	this.demandStore.proxy.filterParam = 'filter';
	var cols = [
	           	{text : '序号', width : 100, dataIndex : 'bean.pkey', sortable : true,hidden:true},
				{text : '货物', width : 100, dataIndex : 'bean.goods', sortable : true, renderer : mvc.Tools.beanRenderer()},
				{text : '单位', width : 50, dataIndex : 'bean.uom', sortable : true, renderer : mvc.Tools.beanRenderer()},
				{text : '数量', width : 120, dataIndex : 'bean.qty', sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'},
				{text : '需求时间', width : 140, dataIndex : 'bean.requestTime', sortable : true, renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s')}
			];
	mvc.Tools.doGoodsLine(cols, 2);
	this.items =[{
				xtype : 'toolbar',
				items : [{
					xtype : 'label',
					text : '仓库：'
					},mvc.Tools.crtComboTrigger(true,'gs_GsWarehouse','',{
						name : 'warehouse'
					}),{
						xtype : 'button',
						text : '搜索',
						scope : this,
						iconCls : 'win-ok-icon',
						handler : this.onSearch
					}]
				},Ext.create('Ext.grid.Panel', {
						height : 400,
						itemId : 'goodsGrid',
						store : this.demandStore,
						multiSelect : true,
						selModel : {selType : 'checkboxmodel'},
						columns : cols
					})
			         
				];
	
	this.buttonAlign = 'right',
	this.buttons =[{
			text : '关闭',
			iconCls : 'win-close-icon',
			scope : this,
			handler : this.onClose
		},{
			text : '确定',
			iconCls : 'win-save-icon',
			scope : this,
			handler : this.onSave
		}];
	
	this.callParent(arguments);
},
onClose : function(){
	this.close();
},
onSearch : function(){
	var array = mvc.Tools.searchValues(this.down('toolbar'));
	if (array.length == 0){
		this.demandStore.removeAll();
		return;
	}
	this.warehouse = array[0].value;
	array.push({id:'status',property:'status',value:'11'});
	this.demandStore.clearFilter(true);
	this.demandStore.filter(array);
},
onSave : function(){
	//var ws = 
	var win = Ext.create('mvc.view.pur.PurMvIn.Win',{
		title : '调入单>新增',
		insFd : true
	});
	win.on('create',this.parent.onSaveRecord,this.parent);
	var selections = this.down('#goodsGrid').getView().getSelectionModel().getSelection();
	if(selections.length > 0){
		win.show();
		win.setActiveRecordIns(this.warehouse,selections);
		this.close();
	}
}
});