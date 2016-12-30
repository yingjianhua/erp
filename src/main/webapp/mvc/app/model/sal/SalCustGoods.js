Ext.define('mvc.model.sal.SalCustGoods',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/sal_SalCustGoods_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.org',mapping : 'org',type : 'string',outkey : true}
	,{name : 'bean.cust',mapping : 'cust',type : 'string',outkey : true}
	,{name : 'bean.goods',mapping : 'goods',type : 'string',outkey : true}
	,{name : 'link.goodsName',mapping : 'goodsName',type : 'string'}
	,{name : 'link.goodsSpec',mapping : 'goodsSpec',type : 'string'}
	,{name : 'bean.latestPrice',mapping : 'latestPrice',type : 'float',useNull : true}
	,{name : 'bean.latestDate',mapping : 'latestDate',type : 'date'}
	,{name : 'bean.latestSpePrice',mapping : 'latestSpePrice',type : 'float',useNull : true}
	,{name : 'bean.latestSpeDate',mapping : 'latestSpeDate',type : 'date'}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	]
});