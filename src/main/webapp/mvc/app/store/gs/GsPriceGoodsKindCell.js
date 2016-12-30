Ext.define('mvc.store.gs.GsPriceGoodsKindCell',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsPriceGoodsKindCell',
model : 'mvc.model.gs.GsPriceGoodsKindCell',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsPriceGoodsKindCell_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});