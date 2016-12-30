Ext.define('mvc.store.sal.SalCustGoods',{
extend : 'Ext.data.Store',
requires : 'mvc.model.sal.SalCustGoods',
model : 'mvc.model.sal.SalCustGoods',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/sal_SalCustGoods_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});