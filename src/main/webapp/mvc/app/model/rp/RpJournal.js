Ext.define('mvc.model.rp.RpJournal',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/rp_RpJournal_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.code',mapping : 'code',type : 'string'}
	,{name : 'bean.name',mapping : 'name',type : 'string'}
	,{name : 'bean.enabled',mapping : 'enabled',type : 'int',useNull : true}
	,{name : 'bean.rpJournalType',mapping : 'rpJournalType',type : 'int',useNull : true}
	,{name : 'bean.yestodayBalance',mapping : 'yestodayBalance',type : 'float',useNull : true}
	,{name : 'bean.drQty',mapping : 'drQty',type : 'int',useNull : true}
	,{name : 'bean.drAmt',mapping : 'drAmt',type : 'float',useNull : true}
	,{name : 'bean.crQty',mapping : 'crQty',type : 'int',useNull : true}
	,{name : 'bean.crAmt',mapping : 'crAmt',type : 'float',useNull : true}
	,{name : 'bean.balance',mapping : 'balance',type : 'float',useNull : true}
	,{name : 'bean.bankName',mapping : 'bankName',type : 'string'}
	,{name : 'bean.bankAccCode',mapping : 'bankAccCode',type : 'string'}
	,{name : 'bean.bankAccName',mapping : 'bankAccName',type : 'string'}
	,{name : 'bean.workBox',mapping : 'workBox',type : 'string',outkey : true}
	,{name : 'bean.cashier',mapping : 'cashier',type : 'string',outkey : true}
	,{name : 'bean.org',mapping : 'org',type : 'string',outkey : true}
	,{name : 'bean.cell',mapping : 'cell',type : 'string',outkey : true}
	,{name : 'bean.rem',mapping : 'rem',type : 'string'}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	]
});