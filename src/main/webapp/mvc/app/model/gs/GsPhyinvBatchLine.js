Ext.define('mvc.model.gs.GsPhyinvBatchLine',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsPhyinvBatchLine_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.goods',mapping : 'goods',type : 'string',outkey : true}
	,{name : 'bean.location',mapping : 'location',type : 'string',outkey : true}
	,{name : 'bean.batch',mapping : 'batch',type : 'string',outkey : true}
	,{name : 'bean.qty',mapping : 'qty',type : 'float',useNull : true}
	,{name : 'bean.uom',mapping : 'uom',type : 'string',outkey : true}
	,{name : 'bean.countQty',mapping : 'countQty',type : 'float',useNull : true}
	,{name : 'bean.diffQty',mapping : 'diffQty',type : 'float',useNull : true}
	,{name : 'bean.diffAmt',mapping : 'diffAmt',type : 'float',useNull : true}
	,{name : 'link.goodsName',mapping : 'goodsName',type : 'string'}
	,{name : 'link.goodsSpec',mapping : 'goodsSpec',type : 'string'}
	]
});