Ext.define('mvc.model.gs.GsPriceGoodsKind',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsPriceGoodsKind_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.code',mapping : 'code',type : 'string'}
	,{name : 'bean.name',mapping : 'name',type : 'string'}
	,{name : 'bean.price',mapping : 'price',type : 'string',outkey : true}
	,{name : 'bean.priceOrig',mapping : 'priceOrig',type : 'int',useNull : true}
	,{name : 'bean.enabled',mapping : 'enabled',type : 'int',useNull : true}
	,{name : 'bean.rate1',mapping : 'rate1',type : 'float',useNull : true}
	,{name : 'bean.rate2',mapping : 'rate2',type : 'float',useNull : true}
	,{name : 'bean.rate3',mapping : 'rate3',type : 'float',useNull : true}
	,{name : 'bean.rate4',mapping : 'rate4',type : 'float',useNull : true}
	,{name : 'bean.rate5',mapping : 'rate5',type : 'float',useNull : true}
	,{name : 'bean.rate6',mapping : 'rate6',type : 'float',useNull : true}
	,{name : 'bean.rate7',mapping : 'rate7',type : 'float',useNull : true}
	,{name : 'bean.rate8',mapping : 'rate8',type : 'float',useNull : true}
	,{name : 'bean.rate9',mapping : 'rate9',type : 'float',useNull : true}
	,{name : 'bean.rate10',mapping : 'rate10',type : 'float',useNull : true}
	,{name : 'bean.rate11',mapping : 'rate11',type : 'float',useNull : true}
	,{name : 'bean.rate12',mapping : 'rate12',type : 'float',useNull : true}
	,{name : 'bean.rangeType',mapping : 'rangeType',type : 'int',useNull : true}
	,{name : 'bean.rangePkey',mapping : 'rangePkey',type : 'string',outkey : true}
	,{name : 'bean.cell',mapping : 'cell',type : 'string',outkey : true}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	]
});