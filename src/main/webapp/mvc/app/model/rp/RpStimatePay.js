Ext.define('mvc.model.rp.RpStimatePay',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/rp_RpStimatePay_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.origForm',mapping : 'origForm',type : 'string',outkey : true}
	,{name : 'bean.origFormNum',mapping : 'origFormNum',type : 'string'}
	,{name : 'bean.obj',mapping : 'obj',type : 'string',outkey : true}
	,{name : 'bean.name',mapping : 'name',type : 'string'}
	,{name : 'bean.amt',mapping : 'amt',type : 'float',useNull : true}
	,{name : 'bean.balance',mapping : 'balance',type : 'float',useNull : true}
	,{name : 'bean.clearTime',mapping : 'clearTime',type : 'date',dateFormat : 'Y-m-d H:i:s'}
	,{name : 'bean.dept',mapping : 'dept',type : 'string',outkey : true}
	,{name : 'bean.cell',mapping : 'cell',type : 'string',outkey : true}
	,{name : 'bean.org',mapping : 'org',type : 'string',outkey : true}
	,{name : 'bean.createdBy',mapping : 'createdBy',type : 'string',outkey : true}
	,{name : 'bean.createdTime',mapping : 'createdTime',type : 'date',dateFormat : 'Y-m-d H:i:s'}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	]
});