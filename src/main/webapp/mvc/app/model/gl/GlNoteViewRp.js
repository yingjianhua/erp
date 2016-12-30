Ext.define('mvc.model.gl.GlNoteViewRp',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlNoteViewRp_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.bill',mapping : 'bill',type : 'string',outkey : true}
	,{name : 'bean.journal',mapping : 'journal',type : 'string',outkey : true}
	,{name : 'bean.direct',mapping : 'direct',type : 'int',useNull : true}
	,{name : 'bean.status',mapping : 'status',type : 'int',useNull : true}
	,{name : 'bean.amt',mapping : 'amt',type : 'float',useNull : true}
	,{name : 'bean.docNum',mapping : 'docNum',type : 'string'}
	,{name : 'bean.summary',mapping : 'summary',type : 'string'}
	,{name : 'bean.type',mapping : 'type',type : 'int',useNull : true}
	,{name : 'bean.typeTime',mapping : 'typeTime',type : 'date',dateFormat : 'Y-m-d H:i:s'}
	,{name : 'bean.typeDes',mapping : 'typeDes',type : 'string'}
	,{name : 'bean.cashier',mapping : 'cashier',type : 'string',outkey : true}
	,{name : 'bean.createdBy',mapping : 'createdBy',type : 'string',outkey : true}
	,{name : 'bean.createdTime',mapping : 'createdTime',type : 'date',dateFormat : 'Y-m-d H:i:s'}
	,{name : 'bean.apprBy',mapping : 'apprBy',type : 'string',outkey : true}
	,{name : 'bean.apprTime',mapping : 'apprTime',type : 'date',dateFormat : 'Y-m-d H:i:s'}
	,{name : 'bean.rem',mapping : 'rem',type : 'string'}
	]
});