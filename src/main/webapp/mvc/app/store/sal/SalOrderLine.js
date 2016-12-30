Ext.define('mvc.store.sal.SalOrderLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.sal.SalOrderLine',
model : 'mvc.model.sal.SalOrderLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/sal_SalOrderLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});