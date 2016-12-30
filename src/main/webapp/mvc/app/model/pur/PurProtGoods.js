Ext.define('mvc.model.pur.PurProtGoods',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/pur_PurProtGoods_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.templat',mapping : 'templat',type : 'string',outkey : true}
	,{name : 'bean.supplier',mapping : 'supplier',type : 'string',outkey : true}
	,{name : 'bean.name',mapping : 'name',type : 'string'}
	,{name : 'bean.goods',mapping : 'goods',type : 'string',outkey : true}
	,{name : 'bean.uom',mapping : 'uom',type : 'string',outkey : true}
	,{name : 'bean.vendorGoodsName',mapping : 'vendorGoodsName',type : 'string'}
	,{name : 'bean.vendorNum',mapping : 'vendorNum',type : 'string'}
	,{name : 'bean.vendorSpec',mapping : 'vendorSpec',type : 'string'}
	,{name : 'bean.price',mapping : 'price',type : 'float',useNull : true}
	,{name : 'bean.dateStart',mapping : 'dateStart',type : 'date'}
	,{name : 'bean.dateEnd',mapping : 'dateEnd',type : 'date'}
	,{name : 'bean.priceLast',mapping : 'priceLast',type : 'float',useNull : true}
	,{name : 'bean.dateLast',mapping : 'dateLast',type : 'date'}
	,{name : 'bean.updatedBy',mapping : 'updatedBy',type : 'string',outkey : true}
	,{name : 'bean.updatedTime',mapping : 'updatedTime',type : 'date',dateFormat : 'Y-m-d H:i:s'}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	,{name : 'link.goodsName',mapping : 'goodsName',type : 'string'}
	,{name : 'link.goodsSpec',mapping : 'goodsSpec',type : 'string'}
	]
});