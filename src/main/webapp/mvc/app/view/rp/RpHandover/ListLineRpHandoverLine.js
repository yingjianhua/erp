Ext.define('mvc.view.rp.RpHandover.ListLineRpHandoverLine',{
extend : 'Ext.grid.Panel',
disableSelection : false,
loadMask : true,
multiSelect : true,
viewConfig : {enableTextSelection : true},
initComponent : function(){
		this.columns = [{text : '物品',width : 80,dataIndex : 'bean.boxGoods',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '物品名称',width : 100,dataIndex : 'bean.name',sortable : true}
	];
		this.store=Ext.create('mvc.store.rp.RpHandoverLine');
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
		this.on({cellclick:mvc.Tools.onCellclick});
		this.dockedItems=[{
		dock : 'top',
		xtype : 'toolbar',
		xtype : 'pagingtoolbar',
		store : this.store,
		dock : 'bottom',
		displayInfo : true,
		displayMsg : '显示 {0} - {1} 条，共计 {2} 条',
		emptyMsg : '没有数据',
		items : [{
				xtype : Ext.create('mvc.tools.ComboxPaging',{myList : this})
			}]
	}];
		this.callParent(arguments);}
});