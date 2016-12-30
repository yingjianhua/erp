Ext.define('mvc.store.gs.GsPriceGoodsKind',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsPriceGoodsKind',
model : 'mvc.model.gs.GsPriceGoodsKind',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsPriceGoodsKind_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});