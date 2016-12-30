Ext.define('mvc.store.sal.SalPresentLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.sal.SalPresentLine',
model : 'mvc.model.sal.SalPresentLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/sal_SalPresentLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});