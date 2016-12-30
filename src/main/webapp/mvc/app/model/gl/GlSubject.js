Ext.define('mvc.model.gl.GlSubject',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlSubject_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.templat',mapping : 'templat',type : 'string',outkey : true}
	,{name : 'bean.subjectUp',mapping : 'subjectUp',type : 'string',outkey : true}
	,{name : 'bean.code',mapping : 'code',type : 'string'}
	,{name : 'bean.name',mapping : 'name',type : 'string'}
	,{name : 'bean.subjectKind',mapping : 'subjectKind',type : 'int',useNull : true}
	,{name : 'bean.currency',mapping : 'currency',type : 'int',useNull : true}
	,{name : 'bean.direct',mapping : 'direct',type : 'int',useNull : true}
	,{name : 'bean.totalFlag',mapping : 'totalFlag',type : 'int',useNull : true}
	,{name : 'bean.enabled',mapping : 'enabled',type : 'int',useNull : true}
	,{name : 'bean.accJournalType',mapping : 'accJournalType',type : 'int',useNull : true}
	,{name : 'bean.tallyFlag',mapping : 'tallyFlag',type : 'int',useNull : true}
	,{name : 'bean.useScope',mapping : 'useScope',type : 'int',useNull : true}
	,{name : 'bean.accType',mapping : 'accType',type : 'int',useNull : true}
	,{name : 'bean.autoCrt',mapping : 'autoCrt',type : 'int',useNull : true}
	,{name : 'bean.writeoffFlag',mapping : 'writeoffFlag',type : 'int',useNull : true}
	,{name : 'bean.inFlag',mapping : 'inFlag',type : 'int',useNull : true}
	,{name : 'bean.rem',mapping : 'rem',type : 'string'}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	]
});