Ext.define('mvc.store.sal.SalRtnLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.sal.SalRtnLine',
model : 'mvc.model.sal.SalRtnLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/sal_SalRtnLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});