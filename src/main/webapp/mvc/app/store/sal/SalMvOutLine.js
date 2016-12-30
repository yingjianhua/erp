Ext.define('mvc.store.sal.SalMvOutLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.sal.SalMvOutLine',
model : 'mvc.model.sal.SalMvOutLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/sal_SalMvOutLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});