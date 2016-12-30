Ext.define('mvc.model.gl.GlNoteView',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlNoteView_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.bill',mapping : 'bill',type : 'string',outkey : true}
	,{name : 'bean.journal',mapping : 'journal',type : 'string',outkey : true}
	,{name : 'bean.direct',mapping : 'direct',type : 'int',useNull : true}
	,{name : 'bean.status',mapping : 'status',type : 'int',useNull : true}
	,{name : 'bean.amt',mapping : 'amt',type : 'float',useNull : true}
	,{name : 'bean.docNum',mapping : 'docNum',type : 'string'}
	,{name : 'bean.summary',mapping : 'summary',type : 'string'}
	,{name : 'bean.writeoffFlag',mapping : 'writeoffFlag',type : 'int',useNull : true}
	,{name : 'bean.writeoff',mapping : 'writeoff',type : 'string',outkey : true}
	,{name : 'bean.dateStart',mapping : 'dateStart',type : 'date'}
	,{name : 'bean.dateDue',mapping : 'dateDue',type : 'date'}
	,{name : 'bean.createdBy',mapping : 'createdBy',type : 'string',outkey : true}
	,{name : 'bean.createdTime',mapping : 'createdTime',type : 'date',dateFormat : 'Y-m-d H:i:s'}
	,{name : 'bean.apprBy',mapping : 'apprBy',type : 'string',outkey : true}
	,{name : 'bean.apprTime',mapping : 'apprTime',type : 'date',dateFormat : 'Y-m-d H:i:s'}
	,{name : 'bean.rem',mapping : 'rem',type : 'string'}
	]
});