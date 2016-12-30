Ext.define('mvc.store.gs.GsStockLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsStockLine',
model : 'mvc.model.gs.GsStockLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsStockLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});