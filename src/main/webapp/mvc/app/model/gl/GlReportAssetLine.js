Ext.define('mvc.model.gl.GlReportAssetLine',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlReportAssetLine_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.assetReport',mapping : 'assetReport',type : 'string',outkey : true}
	,{name : 'bean.keyValue',mapping : 'keyValue',type : 'int',useNull : true}
	,{name : 'bean.keyName',mapping : 'keyName',type : 'string'}
	,{name : 'bean.tableType',mapping : 'tableType',type : 'int',useNull : true}
	,{name : 'bean.amtBegin',mapping : 'amtBegin',type : 'float',useNull : true}
	,{name : 'bean.amtEnd',mapping : 'amtEnd',type : 'float',useNull : true}
	,{name : 'bean.orderId',mapping : 'orderId',type : 'int',useNull : true}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	]
});