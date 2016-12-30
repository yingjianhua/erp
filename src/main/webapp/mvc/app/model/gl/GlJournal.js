Ext.define('mvc.model.gl.GlJournal',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlJournal_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.code',mapping : 'code',type : 'string'}
	,{name : 'bean.name',mapping : 'name',type : 'string'}
	,{name : 'bean.cell',mapping : 'cell',type : 'string',outkey : true}
	,{name : 'bean.subject',mapping : 'subject',type : 'string',outkey : true}
	,{name : 'bean.currency',mapping : 'currency',type : 'int',useNull : true}
	,{name : 'bean.balance',mapping : 'balance',type : 'float',useNull : true}
	,{name : 'bean.balanceUse',mapping : 'balanceUse',type : 'float',useNull : true}
	,{name : 'bean.state',mapping : 'state',type : 'int',useNull : true}
	,{name : 'bean.org',mapping : 'org',type : 'string',outkey : true}
	,{name : 'bean.rem',mapping : 'rem',type : 'string'}
	,{name : 'bean.interestAccrual',mapping : 'interestAccrual',type : 'int',useNull : true}
	,{name : 'bean.frostFlag',mapping : 'frostFlag',type : 'int',useNull : true}
	,{name : 'bean.accType',mapping : 'accType',type : 'int',useNull : true}
	,{name : 'bean.objPkey',mapping : 'objPkey',type : 'string',outkey : true}
	,{name : 'bean.inFlag',mapping : 'inFlag',type : 'int',useNull : true}
	,{name : 'bean.direct',mapping : 'direct',type : 'int',useNull : true}
	,{name : 'bean.accJournalType',mapping : 'accJournalType',type : 'int',useNull : true}
	,{name : 'bean.tallyFlag',mapping : 'tallyFlag',type : 'int',useNull : true}
	,{name : 'bean.extTable',mapping : 'extTable',type : 'string',outkey : true}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	]
});