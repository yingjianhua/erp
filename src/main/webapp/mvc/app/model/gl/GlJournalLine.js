Ext.define('mvc.model.gl.GlJournalLine',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlJournalLine_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.mainPkey',mapping : 'mainPkey',type : 'string',outkey : true}
	,{name : 'bean.balance',mapping : 'balance',type : 'float',useNull : true}
	,{name : 'bean.tallyDate',mapping : 'tallyDate',type : 'date'}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	,{name : 'bean.direct',mapping : 'direct',type : 'int',useNull : true}
	,{name : 'bean.amt',mapping : 'amt',type : 'float',useNull : true}
	,{name : 'bean.summary',mapping : 'summary',type : 'string'}
	,{name : 'bean.docNum',mapping : 'docNum',type : 'string'}
	]
});