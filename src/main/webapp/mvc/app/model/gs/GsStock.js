Ext.define('mvc.model.gs.GsStock',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsStock_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.warehouse',mapping : 'warehouse',type : 'string',outkey : true}
	,{name : 'bean.goods',mapping : 'goods',type : 'string',outkey : true}
	,{name : 'link.goodsName',mapping : 'goodsName',type : 'string'}
	,{name : 'link.goodsSpec',mapping : 'goodsSpec',type : 'string'}
	,{name : 'bean.qty',mapping : 'qty',type : 'float',useNull : true}
	,{name : 'bean.location',mapping : 'location',type : 'string',outkey : true}
	,{name : 'bean.enrouteQty',mapping : 'enrouteQty',type : 'float',useNull : true}
	,{name : 'bean.lockedQty',mapping : 'lockedQty',type : 'float',useNull : true}
	,{name : 'bean.lowestQty',mapping : 'lowestQty',type : 'float',useNull : true}
	,{name : 'bean.safetyQty',mapping : 'safetyQty',type : 'float',useNull : true}
	,{name : 'bean.limitQty',mapping : 'limitQty',type : 'float',useNull : true}
	,{name : 'bean.purLeadDays',mapping : 'purLeadDays',type : 'int',useNull : true}
	,{name : 'bean.enabled',mapping : 'enabled',type : 'int',useNull : true}
	,{name : 'bean.cell',mapping : 'cell',type : 'string',outkey : true}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	,{name : 'bean.uom',mapping : 'uom',type : 'string',outkey : true}
	]
});