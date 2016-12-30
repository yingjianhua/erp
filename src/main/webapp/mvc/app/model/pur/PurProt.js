Ext.define('mvc.model.pur.PurProt',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/pur_PurProt_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
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
	,{name : 'bean.shipMode',mapping : 'shipMode',type : 'string',outkey : true}
	,{name : 'bean.shipType',mapping : 'shipType',type : 'int',useNull : true}
	,{name : 'bean.dateProt',mapping : 'dateProt',type : 'date'}
	,{name : 'bean.dateStart',mapping : 'dateStart',type : 'date'}
	,{name : 'bean.dateEnd',mapping : 'dateEnd',type : 'date'}
	,{name : 'bean.updatedBy',mapping : 'updatedBy',type : 'string',outkey : true}
	,{name : 'bean.updatedTime',mapping : 'updatedTime',type : 'date',dateFormat : 'Y-m-d H:i:s'}
	,{name : 'bean.rem',mapping : 'rem',type : 'string'}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	]
});