Ext.define('mvc.store.sal.SalCollect',{
extend : 'Ext.data.Store',
requires : 'mvc.model.sal.SalCollect',
model : 'mvc.model.sal.SalCollect',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/sal_SalCollect_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});