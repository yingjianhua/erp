Ext.define('mvc.store.gs.GsPhyinvGoodsLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsPhyinvGoodsLine',
model : 'mvc.model.gs.GsPhyinvGoodsLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsPhyinvGoodsLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});