Ext.define('mvc.store.sal.SalReserveLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.sal.SalReserveLine',
model : 'mvc.model.sal.SalReserveLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/sal_SalReserveLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});