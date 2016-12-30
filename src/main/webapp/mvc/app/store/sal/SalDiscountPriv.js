Ext.define('mvc.store.sal.SalDiscountPriv',{
extend : 'Ext.data.Store',
requires : 'mvc.model.sal.SalDiscountPriv',
model : 'mvc.model.sal.SalDiscountPriv',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/sal_SalDiscountPriv_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});