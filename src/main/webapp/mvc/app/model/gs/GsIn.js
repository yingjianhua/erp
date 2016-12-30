Ext.define('mvc.model.gs.GsIn',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsIn_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.code',mapping : 'code',type : 'string'}
	,{name : 'bean.status',mapping : 'status',type : 'int',useNull : true}
	,{name : 'bean.org',mapping : 'org',type : 'string',outkey : true}
	,{name : 'bean.dept',mapping : 'dept',type : 'string',outkey : true}
	,{name : 'bean.createdBy',mapping : 'createdBy',type : 'string',outkey : true}
	,{name : 'bean.createdTime',mapping : 'createdTime',type : 'date',dateFormat : 'Y-m-d H:i:s'}
	,{name : 'bean.apprBy',mapping : 'apprBy',type : 'string',outkey : true}
	,{name : 'bean.apprTime',mapping : 'apprTime',type : 'date',dateFormat : 'Y-m-d H:i:s'}
	,{name : 'bean.rem',mapping : 'rem',type : 'string'}
	,{name : 'bean.warehouse',mapping : 'warehouse',type : 'string',outkey : true}
	,{name : 'bean.gsName',mapping : 'gsName',type : 'string'}
	,{name : 'bean.origForm',mapping : 'origForm',type : 'string',outkey : true}
	,{name : 'bean.origFormNum',mapping : 'origFormNum',type : 'string'}
	,{name : 'bean.operator',mapping : 'operator',type : 'string',outkey : true}
	,{name : 'bean.checker',mapping : 'checker',type : 'string',outkey : true}
	,{name : 'bean.inTime',mapping : 'inTime',type : 'date',dateFormat : 'Y-m-d H:i:s'}
	,{name : 'bean.shipingMode',mapping : 'shipingMode',type : 'int',useNull : true}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	,{name : 'ship.timeShipPlan',mapping : 'timeShipPlan',type : 'date',dateFormat : 'Y-m-d H:i:s'}
	,{name : 'ship.timeArrPlan',mapping : 'timeArrPlan',type : 'date',dateFormat : 'Y-m-d H:i:s'}
	,{name : 'ship.name',mapping : 'name',type : 'string'}
	,{name : 'ship.addr',mapping : 'addr',type : 'string'}
	,{name : 'ship.mobile',mapping : 'mobile',type : 'string'}
	,{name : 'ship.tel',mapping : 'tel',type : 'string'}
	]
});