Ext.define('mvc.store.sal.SalSaleLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.sal.SalSaleLine',
model : 'mvc.model.sal.SalSaleLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/sal_SalSaleLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});