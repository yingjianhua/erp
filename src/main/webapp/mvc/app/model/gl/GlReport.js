Ext.define('mvc.model.gl.GlReport',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlReport_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.code',mapping : 'code',type : 'string'}
	,{name : 'bean.keyValue',mapping : 'keyValue',type : 'int',useNull : true}
	,{name : 'bean.name',mapping : 'name',type : 'string'}
	,{name : 'bean.parent',mapping : 'parent',type : 'string',outkey : true}
	,{name : 'bean.tableType',mapping : 'tableType',type : 'int',useNull : true}
	,{name : 'bean.valueType',mapping : 'valueType',type : 'int',useNull : true}
	,{name : 'bean.symbolType',mapping : 'symbolType',type : 'int',useNull : true}
	,{name : 'bean.orderId',mapping : 'orderId',type : 'int',useNull : true}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	]
});