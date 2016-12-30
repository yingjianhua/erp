Ext.define('mvc.store.gs.GsStockBatch',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsStockBatch',
model : 'mvc.model.gs.GsStockBatch',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsStockBatch_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});