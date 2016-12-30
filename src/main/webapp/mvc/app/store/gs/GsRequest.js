Ext.define('mvc.store.gs.GsRequest',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsRequest',
model : 'mvc.model.gs.GsRequest',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsRequest_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});