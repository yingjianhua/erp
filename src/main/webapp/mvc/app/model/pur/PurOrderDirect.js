Ext.define('mvc.model.pur.PurOrderDirect',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/pur_PurOrderDirect_load'
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
	,{name : 'bean.origForm',mapping : 'origForm',type : 'string',outkey : true}
	,{name : 'bean.origFormNum',mapping : 'origFormNum',type : 'string'}
	,{name : 'bean.supplier',mapping : 'supplier',type : 'string',outkey : true}
	,{name : 'bean.supname',mapping : 'supname',type : 'string'}
	,{name : 'bean.amt',mapping : 'amt',type : 'float',useNull : true}
	,{name : 'bean.amtCost',mapping : 'amtCost',type : 'float',useNull : true}
	,{name : 'bean.amtXf',mapping : 'amtXf',type : 'float',useNull : true}
	,{name : 'bean.amtGz',mapping : 'amtGz',type : 'float',useNull : true}
	,{name : 'bean.buyer',mapping : 'buyer',type : 'string',outkey : true}
	,{name : 'bean.revAddr',mapping : 'revAddr',type : 'string'}
	,{name : 'bean.billFlag',mapping : 'billFlag',type : 'int',useNull : true}
	,{name : 'bean.shipingMode',mapping : 'shipingMode',type : 'int',useNull : true}
	,{name : 'bean.shiping',mapping : 'shiping',type : 'string',outkey : true}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	,{name : 'ship.timeShipPlan',mapping : 'timeShipPlan',type : 'date',dateFormat : 'Y-m-d H:i:s'}
	,{name : 'ship.timeArrPlan',mapping : 'timeArrPlan',type : 'date',dateFormat : 'Y-m-d H:i:s'}
	,{name : 'ship.name',mapping : 'name',type : 'string'}
	,{name : 'ship.addr',mapping : 'addr',type : 'string'}
	,{name : 'ship.mobile',mapping : 'mobile',type : 'string'}
	,{name : 'ship.tel',mapping : 'tel',type : 'string'}
	]
});