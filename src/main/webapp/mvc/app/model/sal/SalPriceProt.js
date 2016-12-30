Ext.define('mvc.model.sal.SalPriceProt',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/sal_SalPriceProt_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.cell',mapping : 'cell',type : 'string',outkey : true}
	,{name : 'bean.cust',mapping : 'cust',type : 'string',outkey : true}
	,{name : 'bean.name',mapping : 'name',type : 'string'}
	,{name : 'bean.priceLevel',mapping : 'priceLevel',type : 'int',useNull : true}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	]
});