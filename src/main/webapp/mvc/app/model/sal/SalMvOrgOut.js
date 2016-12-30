Ext.define('mvc.model.sal.SalMvOrgOut',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/sal_SalMvOrgOut_load'
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
	,{name : 'bean.goodsFrom',mapping : 'goodsFrom',type : 'int',useNull : true}
	,{name : 'bean.warehouse',mapping : 'warehouse',type : 'string',outkey : true}
	,{name : 'bean.inForm',mapping : 'inForm',type : 'string',outkey : true}
	,{name : 'bean.orgOther',mapping : 'orgOther',type : 'string',outkey : true}
	,{name : 'bean.cellOther',mapping : 'cellOther',type : 'string',outkey : true}
	,{name : 'bean.warehouseOther',mapping : 'warehouseOther',type : 'string',outkey : true}
	,{name : 'bean.fromType',mapping : 'fromType',type : 'int',useNull : true}
	,{name : 'bean.amt',mapping : 'amt',type : 'float',useNull : true}
	,{name : 'bean.amtCost',mapping : 'amtCost',type : 'float',useNull : true}
	,{name : 'bean.packDemand',mapping : 'packDemand',type : 'string'}
	,{name : 'bean.shipMode',mapping : 'shipMode',type : 'string',outkey : true}
	,{name : 'bean.timeShipPlan',mapping : 'timeShipPlan',type : 'date',dateFormat : 'Y-m-d H:i:s'}
	,{name : 'bean.timeShip',mapping : 'timeShip',type : 'date',dateFormat : 'Y-m-d H:i:s'}
	,{name : 'bean.timeArrPlan',mapping : 'timeArrPlan',type : 'date',dateFormat : 'Y-m-d H:i:s'}
	,{name : 'bean.timeArr',mapping : 'timeArr',type : 'date',dateFormat : 'Y-m-d H:i:s'}
	,{name : 'bean.goodsbyName',mapping : 'goodsbyName',type : 'string'}
	,{name : 'bean.goodsbyAddr',mapping : 'goodsbyAddr',type : 'string'}
	,{name : 'bean.goodsbyMobile',mapping : 'goodsbyMobile',type : 'string'}
	,{name : 'bean.goodsbyTel',mapping : 'goodsbyTel',type : 'string'}
	,{name : 'bean.goodsbyZip',mapping : 'goodsbyZip',type : 'string'}
	,{name : 'bean.billFlag',mapping : 'billFlag',type : 'int',useNull : true}
	]
});