Ext.define('mvc.model.sal.SalRtn',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/sal_SalRtn_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.code',mapping : 'code',type : 'string'}
	,{name : 'bean.status',mapping : 'status',type : 'int',useNull : true}
	,{name : 'bean.org',mapping : 'org',type : 'string',outkey : true}
	,{name : 'bean.cell',mapping : 'cell',type : 'string',outkey : true}
	,{name : 'bean.dept',mapping : 'dept',type : 'string',outkey : true}
	,{name : 'bean.createdBy',mapping : 'createdBy',type : 'string',outkey : true}
	,{name : 'bean.createdTime',mapping : 'createdTime',type : 'date',dateFormat : 'Y-m-d H:i:s'}
	,{name : 'bean.apprBy',mapping : 'apprBy',type : 'string',outkey : true}
	,{name : 'bean.apprTime',mapping : 'apprTime',type : 'date',dateFormat : 'Y-m-d H:i:s'}
	,{name : 'bean.tallyBy',mapping : 'tallyBy',type : 'string',outkey : true}
	,{name : 'bean.tallyTime',mapping : 'tallyTime',type : 'date'}
	,{name : 'bean.rem',mapping : 'rem',type : 'string'}
	,{name : 'bean.cust',mapping : 'cust',type : 'string',outkey : true}
	,{name : 'bean.custName',mapping : 'custName',type : 'string'}
	,{name : 'bean.warehouse',mapping : 'warehouse',type : 'string',outkey : true}
	,{name : 'bean.amt',mapping : 'amt',type : 'float',useNull : true}
	,{name : 'bean.amtPay',mapping : 'amtPay',type : 'float',useNull : true}
	,{name : 'bean.amtRec',mapping : 'amtRec',type : 'float',useNull : true}
	,{name : 'bean.amtRecBack',mapping : 'amtRecBack',type : 'float',useNull : true}
	,{name : 'bean.amtCost',mapping : 'amtCost',type : 'float',useNull : true}
	,{name : 'bean.operator',mapping : 'operator',type : 'string',outkey : true}
	,{name : 'bean.inoutStatus',mapping : 'inoutStatus',type : 'int',useNull : true}
	,{name : 'bean.billFlag',mapping : 'billFlag',type : 'int',useNull : true}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	]
});