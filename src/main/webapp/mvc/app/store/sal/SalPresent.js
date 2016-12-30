Ext.define('mvc.store.sal.SalPresent',{
extend : 'Ext.data.Store',
requires : 'mvc.model.sal.SalPresent',
model : 'mvc.model.sal.SalPresent',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/sal_SalPresent_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});