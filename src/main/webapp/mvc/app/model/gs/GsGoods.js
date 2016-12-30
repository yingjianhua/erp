Ext.define('mvc.model.gs.GsGoods',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsGoods_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.code',mapping : 'code',type : 'string'}
	,{name : 'bean.kind',mapping : 'kind',type : 'string',outkey : true}
	,{name : 'bean.codeOld',mapping : 'codeOld',type : 'string'}
	,{name : 'bean.name',mapping : 'name',type : 'string'}
	,{name : 'bean.shortkey',mapping : 'shortkey',type : 'string'}
	,{name : 'bean.uom',mapping : 'uom',type : 'string',outkey : true}
	,{name : 'bean.spec',mapping : 'spec',type : 'string'}
	,{name : 'bean.cust1',mapping : 'cust1',type : 'string'}
	,{name : 'bean.cust2',mapping : 'cust2',type : 'string'}
	,{name : 'bean.cust3',mapping : 'cust3',type : 'string'}
	,{name : 'bean.cust4',mapping : 'cust4',type : 'string'}
	,{name : 'bean.cust5',mapping : 'cust5',type : 'string'}
	,{name : 'bean.weightRate',mapping : 'weightRate',type : 'float',useNull : true}
	,{name : 'bean.valumeRate',mapping : 'valumeRate',type : 'float',useNull : true}
	,{name : 'bean.inFlag',mapping : 'inFlag',type : 'string'}
	,{name : 'bean.outFlag',mapping : 'outFlag',type : 'string'}
	,{name : 'bean.descrip',mapping : 'descrip',type : 'string'}
	,{name : 'bean.barCode',mapping : 'barCode',type : 'string'}
	,{name : 'bean.zeroOutFlag',mapping : 'zeroOutFlag',type : 'int',useNull : true}
	,{name : 'bean.batchType',mapping : 'batchType',type : 'int',useNull : true}
	,{name : 'bean.economicQty',mapping : 'economicQty',type : 'float',useNull : true}
	,{name : 'bean.purLeadDays',mapping : 'purLeadDays',type : 'int',useNull : true}
	,{name : 'bean.enabled',mapping : 'enabled',type : 'int',useNull : true}
	,{name : 'bean.org',mapping : 'org',type : 'string',outkey : true}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	]
});