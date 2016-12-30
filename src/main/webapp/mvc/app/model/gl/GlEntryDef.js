Ext.define('mvc.model.gl.GlEntryDef',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlEntryDef_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.templat',mapping : 'templat',type : 'string',outkey : true}
	,{name : 'bean.tableId',mapping : 'tableId',type : 'string',outkey : true}
	,{name : 'bean.code',mapping : 'code',type : 'string'}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	]
});