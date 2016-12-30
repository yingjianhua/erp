Ext.define('mvc.model.pur.PurProtGoodsApplyLine',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/pur_PurProtGoodsApplyLine_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.goods',mapping : 'goods',type : 'string',outkey : true}
	,{name : 'bean.uom',mapping : 'uom',type : 'string',outkey : true}
	,{name : 'bean.vendorGoodsName',mapping : 'vendorGoodsName',type : 'string'}
	,{name : 'bean.vendorNum',mapping : 'vendorNum',type : 'string'}
	,{name : 'bean.vendorSpec',mapping : 'vendorSpec',type : 'string'}
	,{name : 'bean.price',mapping : 'price',type : 'float',useNull : true}
	,{name : 'bean.dateStart',mapping : 'dateStart',type : 'date'}
	,{name : 'bean.dateEnd',mapping : 'dateEnd',type : 'date'}
	,{name : 'bean.aftVendorGoodsName',mapping : 'aftVendorGoodsName',type : 'string'}
	,{name : 'bean.aftVendorNum',mapping : 'aftVendorNum',type : 'string'}
	,{name : 'bean.aftVendorSpec',mapping : 'aftVendorSpec',type : 'string'}
	,{name : 'bean.aftPrice',mapping : 'aftPrice',type : 'float',useNull : true}
	,{name : 'bean.aftDateStart',mapping : 'aftDateStart',type : 'date'}
	,{name : 'bean.aftDateEnd',mapping : 'aftDateEnd',type : 'date'}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	,{name : 'link.goodsName',mapping : 'goodsName',type : 'string'}
	,{name : 'link.goodsSpec',mapping : 'goodsSpec',type : 'string'}
	]
});