Ext.define('mvc.view.gs.GsPhyinv.InvListForm', {
	extend : 'Ext.grid.Panel',
	disableSelection : false,
	loadMask : true,
	cellEditing : Ext.create('Ext.grid.plugin.CellEditing', {
		clicksToEdit : 1
	}),
	initComponent : function() {
		this.columns = [{text : '货物',width : 100,dataIndex : 'bean.goods',sortable : true,renderer : mvc.Tools.beanRenderer()}
		,{text : '货位',width : 100,dataIndex : 'bean.location',sortable : true,renderer : mvc.Tools.beanRenderer()}
		,{text : '批次',width : 100,dataIndex : 'bean.batch',sortable : true,renderer : mvc.Tools.beanRenderer()}
		,{text : '计量单位',width : 100,dataIndex : 'bean.uom',sortable : true,renderer : mvc.Tools.beanRenderer()}
		,{text : '账上数量',width : 120,dataIndex : 'bean.qty',sortable : true,align : 'right',renderer : mvc.Tools.numberRenderer(4)}
		,{text : '实际数量',width : 120,dataIndex : 'bean.countQty',sortable : true,align : 'right',renderer : mvc.Tools.numberRenderer(4),
			editor: {
				xtype : 'numberfield',
				decimalPrecision : 4
			}}
//		,{text : '数量差额',width : 100,dataIndex : 'bean.diffQty',sortable : true,align : 'right'}
//		,{text : '金额差额',width : 100,dataIndex : 'bean.diffAmt',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
		];
		mvc.Tools.doGoodsLine(this.columns, 1);
		this.store = Ext.create('mvc.store.gs.GsPhyinvBatchLine');
		this.store.pageSize = 0;
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
		this.plugins = [ this.cellEditing ];
		this.callParent(arguments);
	}
});
