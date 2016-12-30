Ext.define('mvc.model.gl.GlNote',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlNote_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.bill',mapping : 'bill',type : 'string',outkey : true}
	,{name : 'bean.code',mapping : 'code',type : 'string'}
	,{name : 'bean.extTable',mapping : 'extTable',type : 'string',outkey : true}
	,{name : 'bean.journal',mapping : 'journal',type : 'string',outkey : true}
	,{name : 'bean.direct',mapping : 'direct',type : 'int',useNull : true}
	,{name : 'bean.status',mapping : 'status',type : 'int',useNull : true}
	,{name : 'bean.amt',mapping : 'amt',type : 'float',useNull : true}
	,{name : 'bean.docNum',mapping : 'docNum',type : 'string'}
	,{name : 'bean.summary',mapping : 'summary',type : 'string'}
	,{name : 'bean.createdBy',mapping : 'createdBy',type : 'string',outkey : true}
	,{name : 'bean.createdTime',mapping : 'createdTime',type : 'date',dateFormat : 'Y-m-d H:i:s'}
	,{name : 'bean.apprBy',mapping : 'apprBy',type : 'string',outkey : true}
	,{name : 'bean.apprTime',mapping : 'apprTime',type : 'date',dateFormat : 'Y-m-d H:i:s'}
	,{name : 'bean.rem',mapping : 'rem',type : 'string'}
	,{name : 'bean.isAuto',mapping : 'isAuto',type : 'int',useNull : true}
	,{name : 'extContent',mapping : 'extContent',type : 'string',useNull : true}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	,{name : 'bean.org',mapping : 'org',type : 'string',outkey : true}
	,{name : 'bean.cell',mapping : 'cell',type : 'string',outkey : true}
	,{name : 'bean.dept',mapping : 'dept',type : 'string',outkey : true}
	]
});