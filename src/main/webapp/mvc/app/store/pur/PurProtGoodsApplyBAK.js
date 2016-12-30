Ext.define('mvc.store.pur.PurProtGoodsApply',{
extend : 'Ext.data.Store',
requires : 'mvc.model.pur.PurProtGoodsApply',
model : 'mvc.model.pur.PurProtGoodsApply',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/pur_PurProtGoodsApply_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});