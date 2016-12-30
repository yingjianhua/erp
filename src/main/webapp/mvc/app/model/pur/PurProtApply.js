Ext.define('mvc.model.pur.PurProtApply',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/pur_PurProtApply_load'
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
	,{name : 'bean.templat',mapping : 'templat',type : 'string',outkey : true}
	,{name : 'bean.supplier',mapping : 'supplier',type : 'string',outkey : true}
	,{name : 'bean.name',mapping : 'name',type : 'string'}
	,{name : 'bean.settle',mapping : 'settle',type : 'string'}
	,{name : 'bean.settleMonth',mapping : 'settleMonth',type : 'int',useNull : true}
	,{name : 'bean.settleNextDay',mapping : 'settleNextDay',type : 'int',useNull : true}
	,{name : 'bean.creditLevel',mapping : 'creditLevel',type : 'int',useNull : true}
	,{name : 'bean.creditLimit',mapping : 'creditLimit',type : 'float',useNull : true}
	,{name : 'bean.creditOther',mapping : 'creditOther',type : 'float',useNull : true}
	,{name : 'bean.taxRate',mapping : 'taxRate',type : 'float',useNull : true}
	,{name : 'bean.descKind',mapping : 'descKind',type : 'string'}
	,{name : 'bean.descSal',mapping : 'descSal',type : 'string'}
	,{name : 'bean.packDemand',mapping : 'packDemand',type : 'string'}
	,{name : 'bean.shipType',mapping : 'shipType',type : 'int',useNull : true}
	,{name : 'bean.dateProt',mapping : 'dateProt',type : 'date'}
	,{name : 'bean.dateStart',mapping : 'dateStart',type : 'date'}
	,{name : 'bean.dateEnd',mapping : 'dateEnd',type : 'date'}
	,{name : 'bean.aftSettle',mapping : 'aftSettle',type : 'string'}
	,{name : 'bean.aftSettleMonth',mapping : 'aftSettleMonth',type : 'int',useNull : true}
	,{name : 'bean.aftSettleNextDay',mapping : 'aftSettleNextDay',type : 'int',useNull : true}
	,{name : 'bean.aftCreditLevel',mapping : 'aftCreditLevel',type : 'int',useNull : true}
	,{name : 'bean.aftCreditLimit',mapping : 'aftCreditLimit',type : 'float',useNull : true}
	,{name : 'bean.aftCreditOther',mapping : 'aftCreditOther',type : 'float',useNull : true}
	,{name : 'bean.aftTaxRate',mapping : 'aftTaxRate',type : 'float',useNull : true}
	,{name : 'bean.aftDescKind',mapping : 'aftDescKind',type : 'string'}
	,{name : 'bean.aftDescSal',mapping : 'aftDescSal',type : 'string'}
	,{name : 'bean.aftPackDemand',mapping : 'aftPackDemand',type : 'string'}
	,{name : 'bean.aftShipType',mapping : 'aftShipType',type : 'int',useNull : true}
	,{name : 'bean.aftDateProt',mapping : 'aftDateProt',type : 'date'}
	,{name : 'bean.aftDateStart',mapping : 'aftDateStart',type : 'date'}
	,{name : 'bean.aftDateEnd',mapping : 'aftDateEnd',type : 'date'}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	]
});