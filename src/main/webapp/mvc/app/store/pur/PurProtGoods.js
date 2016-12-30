Ext.define('mvc.store.pur.PurProtGoods',{
extend : 'Ext.data.Store',
requires : 'mvc.model.pur.PurProtGoods',
model : 'mvc.model.pur.PurProtGoods',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/pur_PurProtGoods_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});