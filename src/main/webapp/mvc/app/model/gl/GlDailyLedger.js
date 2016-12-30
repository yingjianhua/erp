Ext.define('mvc.model.gl.GlDailyLedger',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlDailyLedger_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.cell',mapping : 'cell',type : 'string',outkey : true}
	,{name : 'bean.subject',mapping : 'subject',type : 'string',outkey : true}
	,{name : 'bean.workDate',mapping : 'workDate',type : 'date'}
	,{name : 'bean.currency',mapping : 'currency',type : 'int',useNull : true}
	,{name : 'bean.drQty',mapping : 'drQty',type : 'int',useNull : true}
	,{name : 'bean.drAmt',mapping : 'drAmt',type : 'float',useNull : true}
	,{name : 'bean.crQty',mapping : 'crQty',type : 'int',useNull : true}
	,{name : 'bean.crAmt',mapping : 'crAmt',type : 'float',useNull : true}
	,{name : 'bean.drBalance',mapping : 'drBalance',type : 'float',useNull : true}
	,{name : 'bean.crBalance',mapping : 'crBalance',type : 'float',useNull : true}
	,{name : 'bean.num',mapping : 'num',type : 'int',useNull : true}
	,{name : 'bean.org',mapping : 'org',type : 'string',outkey : true}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	]
});