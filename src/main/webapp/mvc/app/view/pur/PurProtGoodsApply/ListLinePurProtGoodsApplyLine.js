Ext.define('mvc.view.pur.PurProtGoodsApply.ListLinePurProtGoodsApplyLine',{
extend : 'Ext.grid.Panel',
disableSelection : false,
loadMask : true,
multiSelect : true,
viewConfig : {enableTextSelection : true},
initComponent : function(){
		this.columns = [{text : '货物',width : 100,dataIndex : 'bean.goods',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'goods',mn : 'view.gs.GsGoods.List'}
	,{text : '计量单位',width : 75,dataIndex : 'bean.uom',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '他方品名',width : 100,dataIndex : 'bean.vendorGoodsName',sortable : true}
	,{text : '他方代码',width : 100,dataIndex : 'bean.vendorNum',sortable : true}
	,{text : '他方规格',width : 100,dataIndex : 'bean.vendorSpec',sortable : true}
	,{text : '协议价',width : 100,dataIndex : 'bean.price',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'}
	,{text : '启用日期',width : 100,dataIndex : 'bean.dateStart',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d')}
	,{text : '到期日期',width : 100,dataIndex : 'bean.dateEnd',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d')}
	,{text : '变更后他方品名',width : 100,dataIndex : 'bean.aftVendorGoodsName',sortable : true}
	,{text : '变更后他方代码',width : 100,dataIndex : 'bean.aftVendorNum',sortable : true}
	,{text : '变更后他方规格',width : 100,dataIndex : 'bean.aftVendorSpec',sortable : true}
	,{text : '变更后协议价',width : 100,dataIndex : 'bean.aftPrice',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'}
	,{text : '变更后启用日期',width : 100,dataIndex : 'bean.aftDateStart',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d')}
	,{text : '变更后到期日期',width : 100,dataIndex : 'bean.aftDateEnd',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d')}
	];
		mvc.Tools.doGoodsLine(this.columns, 1);		this.store=Ext.create('mvc.store.pur.PurProtGoodsApplyLine');
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