Ext.define('mvc.store.sal.SalRtn',{
extend : 'Ext.data.Store',
requires : 'mvc.model.sal.SalRtn',
model : 'mvc.model.sal.SalRtn',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/sal_SalRtn_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});