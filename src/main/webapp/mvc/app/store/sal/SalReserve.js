Ext.define('mvc.store.sal.SalReserve',{
extend : 'Ext.data.Store',
requires : 'mvc.model.sal.SalReserve',
model : 'mvc.model.sal.SalReserve',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/sal_SalReserve_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});