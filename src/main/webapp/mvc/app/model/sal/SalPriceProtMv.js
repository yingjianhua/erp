Ext.define('mvc.model.sal.SalPriceProtMv',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/sal_SalPriceProtMv_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.cellSal',mapping : 'cellSal',type : 'string',outkey : true}
	,{name : 'bean.cellPur',mapping : 'cellPur',type : 'string',outkey : true}
	,{name : 'bean.priceLevel',mapping : 'priceLevel',type : 'int',useNull : true}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	]
});