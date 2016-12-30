Ext.define('mvc.view.gl.GlGoods.ListLineGlGoodsLine',{
extend : 'Ext.grid.Panel',
disableSelection : false,
loadMask : true,
multiSelect : true,
viewConfig : {enableTextSelection : true},
initComponent : function(){
		this.columns = [{text : '数量',width : 100,dataIndex : 'bean.qty',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'}
	,{text : '单价',width : 100,dataIndex : 'bean.price',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'}
	,{text : '金额',width : 100,dataIndex : 'bean.amt',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '结余数量',width : 100,dataIndex : 'bean.balanceQty',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'}
	,{text : '余额',width : 100,dataIndex : 'bean.balance',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '记账单据',width : 100,dataIndex : 'bean.daybookLine',sortable : true,renderer : mvc.Tools.beanRenderer()}
	];
		this.store=Ext.create('mvc.store.gl.GlGoodsLine');
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