Ext.define('mvc.model.gs.GsGoodsCmb',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsGoodsCmb_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.goods',mapping : 'goods',type : 'string',outkey : true}
	,{name : 'link.goodsName',mapping : 'goodsName',type : 'string'}
	,{name : 'link.goodsSpec',mapping : 'goodsSpec',type : 'string'}
	,{name : 'bean.innerGoods',mapping : 'innerGoods',type : 'string',outkey : true}
	,{name : 'link.innerGoodsName',mapping : 'innerGoodsName',type : 'string'}
	,{name : 'link.innerGoodsSpec',mapping : 'innerGoodsSpec',type : 'string'}
	,{name : 'bean.innerCount',mapping : 'innerCount',type : 'float',useNull : true}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	,{name : 'bean.sort',mapping : 'sort',type : 'int',useNull : true}
	]
});