Ext.define('mvc.store.gs.GsGoodsKind',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsGoodsKind',
model : 'mvc.model.gs.GsGoodsKind',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsGoodsKind_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});