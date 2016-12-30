Ext.define('mvc.store.pur.PurProtApply',{
extend : 'Ext.data.Store',
requires : 'mvc.model.pur.PurProtApply',
model : 'mvc.model.pur.PurProtApply',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/pur_PurProtApply_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});