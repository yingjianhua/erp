Ext.define('mvc.store.sal.SalPriceProtMv',{
extend : 'Ext.data.Store',
requires : 'mvc.model.sal.SalPriceProtMv',
model : 'mvc.model.sal.SalPriceProtMv',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/sal_SalPriceProtMv_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});