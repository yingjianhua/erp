Ext.define('mvc.view.gs.GsIn.ListLineGsInLineView',{
extend : 'Ext.grid.Panel',
disableSelection : false,
loadMask : true,
multiSelect : true,
initComponent : function(){
		this.columns = [{text : '货物',width : 100,dataIndex : 'bean.goods',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '数量',width : 100,dataIndex : 'bean.qty',sortable : true,align : 'right'}
	,{text : '计量单位',width : 100,dataIndex : 'bean.uom',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '存货批次',width : 100,dataIndex : 'bean.batchCode',sortable : true}
	,{text : '货位',width : 100,dataIndex : 'bean.location',sortable : true,renderer : mvc.Tools.beanRenderer()}
	];
		mvc.Tools.doGoodsLine(this.columns, 1);		this.store=Ext.create('mvc.store.gs.GsInLineView');
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
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