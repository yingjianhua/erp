Ext.define('mvc.view.gs.GsStock.ListLineGsStockLine',{
extend : 'Ext.grid.Panel',
disableSelection : false,
loadMask : true,
multiSelect : true,
viewConfig : {enableTextSelection : true},
initComponent : function(){
		this.columns = [{text : '名称',width : 100,dataIndex : 'bean.name',sortable : true}
	,{text : '出入库单据',width : 80,dataIndex : 'bean.gsForm',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '出入库单据号',width : 135,dataIndex : 'bean.gsFormNum',sortable : true}
	,{text : '源单据',width : 80,dataIndex : 'bean.origForm',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '源单据号',width : 135,dataIndex : 'bean.origFormNum',sortable : true}
	,{text : '出入库时间',width : 140,dataIndex : 'bean.gsTime',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s')}
	,{text : '批次代码',width : 100,dataIndex : 'bean.gsBatchName',sortable : true}
	,{text : '出入库数量',width : 100,dataIndex : 'bean.gsQty',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'}
	,{text : '剩余数量',width : 100,dataIndex : 'bean.qty',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'}
	];
		this.store=Ext.create('mvc.store.gs.GsStockLine');
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