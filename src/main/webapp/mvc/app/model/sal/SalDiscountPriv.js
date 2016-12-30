Ext.define('mvc.model.sal.SalDiscountPriv',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/sal_SalDiscountPriv_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'string',outkey : true}
	,{name : 'bean.discountLevel',mapping : 'discountLevel',type : 'int',useNull : true}
	,{name : 'bean.updatedBy',mapping : 'updatedBy',type : 'string',outkey : true}
	,{name : 'bean.updatedTime',mapping : 'updatedTime',type : 'date',dateFormat : 'Y-m-d H:i:s'}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	]
});