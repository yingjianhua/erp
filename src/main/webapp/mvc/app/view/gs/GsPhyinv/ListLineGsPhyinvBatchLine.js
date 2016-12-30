Ext.define('mvc.view.gs.GsPhyinv.ListLineGsPhyinvBatchLine',{
extend : 'Ext.grid.Panel',
disableSelection : false,
loadMask : true,
multiSelect : true,
selModel : {selType : 'checkboxmodel'},
initComponent : function(){
		this.columns = [{text : '货物',width : 100,dataIndex : 'bean.goods',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'goods',mn : 'view.gs.GsGoods.List'}
	,{text : '货位',width : 100,dataIndex : 'bean.location',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'location',mn : 'view.gs.GsLocation.List'}
	,{text : '批次',width : 100,dataIndex : 'bean.batch',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'batch',mn : 'view.gs.GsBatch.List'}
	,{text : '计量单位',width : 100,dataIndex : 'bean.uom',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '账上数量',width : 100,dataIndex : 'bean.qty',sortable : true,align : 'right'}
	,{text : '实际数量',width : 100,dataIndex : 'bean.countQty',sortable : true,align : 'right'}
	,{text : '数量差额',width : 100,dataIndex : 'bean.diffQty',sortable : true,align : 'right'}
	,{text : '金额差额',width : 100,dataIndex : 'bean.diffAmt',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	];
		mvc.Tools.doGoodsLine(this.columns, 1);		this.store=Ext.create('mvc.store.gs.GsPhyinvBatchLine');
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