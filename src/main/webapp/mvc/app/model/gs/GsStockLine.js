Ext.define('mvc.model.gs.GsStockLine',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsStockLine_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.stock',mapping : 'stock',type : 'string',outkey : true}
	,{name : 'bean.name',mapping : 'name',type : 'string'}
	,{name : 'bean.gsForm',mapping : 'gsForm',type : 'string',outkey : true}
	,{name : 'bean.gsFormNum',mapping : 'gsFormNum',type : 'string'}
	,{name : 'bean.origForm',mapping : 'origForm',type : 'string',outkey : true}
	,{name : 'bean.origFormNum',mapping : 'origFormNum',type : 'string'}
	,{name : 'bean.gsTime',mapping : 'gsTime',type : 'date',dateFormat : 'Y-m-d H:i:s'}
	,{name : 'bean.gsBatchName',mapping : 'gsBatchName',type : 'string'}
	,{name : 'bean.gsQty',mapping : 'gsQty',type : 'float',useNull : true}
	,{name : 'bean.qty',mapping : 'qty',type : 'float',useNull : true}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	]
});