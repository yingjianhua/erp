Ext.define('mvc.model.sal.SalMvOut',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/sal_SalMvOut_load'
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
	,{name : 'bean.mvType',mapping : 'mvType',type : 'int',useNull : true}
	,{name : 'bean.goodsFrom',mapping : 'goodsFrom',type : 'int',useNull : true}
	,{name : 'bean.warehouse',mapping : 'warehouse',type : 'string',outkey : true}
	,{name : 'bean.inForm',mapping : 'inForm',type : 'string',outkey : true}
	,{name : 'bean.orgOther',mapping : 'orgOther',type : 'string',outkey : true}
	,{name : 'bean.cellOther',mapping : 'cellOther',type : 'string',outkey : true}
	,{name : 'bean.warehouseOther',mapping : 'warehouseOther',type : 'string',outkey : true}
	,{name : 'bean.fromType',mapping : 'fromType',type : 'int',useNull : true}
	,{name : 'bean.amt',mapping : 'amt',type : 'float',useNull : true}
	,{name : 'bean.amtCost',mapping : 'amtCost',type : 'float',useNull : true}
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