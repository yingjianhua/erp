Ext.define('mvc.store.gs.GsPriceGoodsCell',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsPriceGoodsCell',
model : 'mvc.model.gs.GsPriceGoodsCell',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsPriceGoodsCell_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});