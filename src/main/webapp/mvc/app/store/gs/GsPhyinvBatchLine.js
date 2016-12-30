Ext.define('mvc.store.gs.GsPhyinvBatchLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsPhyinvBatchLine',
model : 'mvc.model.gs.GsPhyinvBatchLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsPhyinvBatchLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});