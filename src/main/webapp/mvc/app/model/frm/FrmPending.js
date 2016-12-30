Ext.define('mvc.model.frm.FrmPending',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/frm_FrmPending_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.origForm',mapping : 'origForm',type : 'string',outkey : true}
	,{name : 'bean.origFormNum',mapping : 'origFormNum',type : 'string'}
	,{name : 'bean.org',mapping : 'org',type : 'string',outkey : true}
	,{name : 'bean.cell',mapping : 'cell',type : 'string',outkey : true}
	,{name : 'bean.formHandover',mapping : 'formHandover',type : 'string',outkey : true}
	,{name : 'bean.userSys',mapping : 'userSys',type : 'string',outkey : true}
	,{name : 'bean.userCrt',mapping : 'userCrt',type : 'string',outkey : true}
	,{name : 'bean.descType',mapping : 'descType',type : 'string',outkey : true}
	,{name : 'bean.createdTime',mapping : 'createdTime',type : 'date',dateFormat : 'Y-m-d H:i:s'}
	,{name : 'bean.rem',mapping : 'rem',type : 'string'}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	,{name : 'one.amt',mapping : 'amt',type : 'float',useNull : true}
	]
});