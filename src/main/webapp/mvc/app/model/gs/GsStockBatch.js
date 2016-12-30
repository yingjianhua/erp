Ext.define('mvc.model.gs.GsStockBatch',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsStockBatch_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.stock',mapping : 'stock',type : 'string',outkey : true}
	,{name : 'bean.name',mapping : 'name',type : 'string'}
	,{name : 'bean.cleared',mapping : 'cleared',type : 'int',useNull : true}
	,{name : 'bean.expDate',mapping : 'expDate',type : 'date'}
	,{name : 'bean.entryTime',mapping : 'entryTime',type : 'date',dateFormat : 'Y-m-d H:i:s'}
	,{name : 'bean.qty',mapping : 'qty',type : 'float',useNull : true}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	,{name : 'bean.goods',mapping : 'goods',type : 'string',outkey : true}
	,{name : 'link.goodsName',mapping : 'goodsName',type : 'string'}
	,{name : 'link.goodsSpec',mapping : 'goodsSpec',type : 'string'}
	,{name : 'bean.goodsUom',mapping : 'goodsUom',type : 'string',outkey : true}
	]
});