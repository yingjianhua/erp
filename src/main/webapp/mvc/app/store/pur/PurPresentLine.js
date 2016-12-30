Ext.define('mvc.store.pur.PurPresentLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.pur.PurPresentLine',
model : 'mvc.model.pur.PurPresentLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/pur_PurPresentLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});