Ext.define('mvc.store.sal.SalSale',{
extend : 'Ext.data.Store',
requires : 'mvc.model.sal.SalSale',
model : 'mvc.model.sal.SalSale',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/sal_SalSale_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});