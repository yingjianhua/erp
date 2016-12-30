Ext.define('mvc.model.gs.GsStockStimate',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsStockStimate_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.warehouse',mapping : 'warehouse',type : 'string',outkey : true}
	,{name : 'bean.goods',mapping : 'goods',type : 'string',outkey : true}
	,{name : 'bean.enrouteType',mapping : 'enrouteType',type : 'int',useNull : true}
	,{name : 'bean.uom',mapping : 'uom',type : 'string',outkey : true}
	,{name : 'bean.qty',mapping : 'qty',type : 'float',useNull : true}
	,{name : 'bean.planDate',mapping : 'planDate',type : 'date'}
	,{name : 'bean.origForm',mapping : 'origForm',type : 'string',outkey : true}
	,{name : 'bean.origFormNum',mapping : 'origFormNum',type : 'string'}
	,{name : 'bean.createdDate',mapping : 'createdDate',type : 'date'}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	,{name : 'link.goodsName',mapping : 'goodsName',type : 'string'}
	,{name : 'link.goodsSpec',mapping : 'goodsSpec',type : 'string'}
	]
});