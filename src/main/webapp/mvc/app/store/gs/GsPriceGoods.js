Ext.define('mvc.store.gs.GsPriceGoods',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsPriceGoods',
model : 'mvc.model.gs.GsPriceGoods',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsPriceGoods_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});