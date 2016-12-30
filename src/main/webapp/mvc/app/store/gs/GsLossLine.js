Ext.define('mvc.store.gs.GsLossLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsLossLine',
model : 'mvc.model.gs.GsLossLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsLossLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});