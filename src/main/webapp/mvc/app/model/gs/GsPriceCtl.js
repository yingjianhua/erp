Ext.define('mvc.model.gs.GsPriceCtl',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsPriceCtl_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.tbObj',mapping : 'tbObj',type : 'string',outkey : true}
	,{name : 'bean.price',mapping : 'price',type : 'string',outkey : true}
	,{name : 'bean.retailLevel',mapping : 'retailLevel',type : 'string',useNull : true}
	,{name : 'bean.lowestLevel',mapping : 'lowestLevel',type : 'string',useNull : true}
	,{name : 'bean.tradeLevel',mapping : 'tradeLevel',type : 'string',useNull : true}
	,{name : 'bean.mvLevel',mapping : 'mvLevel',type : 'string',useNull : true}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	,{name : 'tbObjType',mapping : 'tbObjType',type : 'int',useNull : true}
	,{name : 'tbObjOrg',mapping : 'tbObjOrg',type : 'string',outkey : true}
	,{name : 'tbObjCell',mapping : 'tbObjCell',type : 'string',outkey : true}
	]
});