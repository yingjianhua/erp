Ext.define('mvc.model.gl.GlSubjectMap',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlSubjectMap_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'string'}
	,{name : 'bean.templat',mapping : 'templat',type : 'string',outkey : true}
	,{name : 'bean.aliasSource',mapping : 'aliasSource',type : 'string'}
	,{name : 'bean.aliasTarget',mapping : 'aliasTarget',type : 'string'}
	,{name : 'bean.name',mapping : 'name',type : 'string'}
	,{name : 'bean.subject',mapping : 'subject',type : 'string',outkey : true}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	]
});