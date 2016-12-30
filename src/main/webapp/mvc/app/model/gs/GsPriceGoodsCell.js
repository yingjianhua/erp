Ext.define('mvc.model.gs.GsPriceGoodsCell',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsPriceGoodsCell_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.cell',mapping : 'cell',type : 'string',outkey : true}
	,{name : 'bean.priceGoods',mapping : 'priceGoods',type : 'string',outkey : true}
	,{name : 'bean.priceName',mapping : 'priceName',type : 'string',outkey : true}
	,{name : 'bean.goods',mapping : 'goods',type : 'string',outkey : true}
	,{name : 'link.goodsName',mapping : 'goodsName',type : 'string'}
	,{name : 'link.goodsSpec',mapping : 'goodsSpec',type : 'string'}
	,{name : 'bean.uom',mapping : 'uom',type : 'string',outkey : true}
	,{name : 'bean.priceCost',mapping : 'priceCost',type : 'float',useNull : true}
	,{name : 'bean.price1',mapping : 'price1',type : 'float',useNull : true}
	,{name : 'bean.price2',mapping : 'price2',type : 'float',useNull : true}
	,{name : 'bean.price3',mapping : 'price3',type : 'float',useNull : true}
	,{name : 'bean.price4',mapping : 'price4',type : 'float',useNull : true}
	,{name : 'bean.price5',mapping : 'price5',type : 'float',useNull : true}
	,{name : 'bean.price6',mapping : 'price6',type : 'float',useNull : true}
	,{name : 'bean.price7',mapping : 'price7',type : 'float',useNull : true}
	,{name : 'bean.price8',mapping : 'price8',type : 'float',useNull : true}
	,{name : 'bean.price9',mapping : 'price9',type : 'float',useNull : true}
	,{name : 'bean.price10',mapping : 'price10',type : 'float',useNull : true}
	,{name : 'bean.price11',mapping : 'price11',type : 'float',useNull : true}
	,{name : 'bean.price12',mapping : 'price12',type : 'float',useNull : true}
	,{name : 'bean.flagSal',mapping : 'flagSal',type : 'int',useNull : true}
	,{name : 'bean.flagPf',mapping : 'flagPf',type : 'int',useNull : true}
	,{name : 'bean.flagMvout',mapping : 'flagMvout',type : 'int',useNull : true}
	,{name : 'bean.flagMvin',mapping : 'flagMvin',type : 'int',useNull : true}
	,{name : 'bean.flagPur',mapping : 'flagPur',type : 'int',useNull : true}
	,{name : 'bean.flagFini',mapping : 'flagFini',type : 'int',useNull : true}
	,{name : 'bean.flagHalf',mapping : 'flagHalf',type : 'int',useNull : true}
	,{name : 'bean.flagPriv',mapping : 'flagPriv',type : 'int',useNull : true}
	,{name : 'bean.syncFlag',mapping : 'syncFlag',type : 'int',useNull : true}
	,{name : 'bean.enabled',mapping : 'enabled',type : 'int',useNull : true}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	]
});