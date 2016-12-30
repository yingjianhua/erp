Ext.define('mvc.model.gl.GlReportLine',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlReportLine_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.report',mapping : 'report',type : 'string',outkey : true}
	,{name : 'bean.subject',mapping : 'subject',type : 'string',outkey : true}
	,{name : 'bean.direct',mapping : 'direct',type : 'int',useNull : true}
	,{name : 'bean.symbolType',mapping : 'symbolType',type : 'int',useNull : true}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	]
});