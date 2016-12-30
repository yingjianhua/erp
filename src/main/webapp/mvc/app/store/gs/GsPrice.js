Ext.define('mvc.store.gs.GsPrice',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsPrice',
model : 'mvc.model.gs.GsPrice',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsPrice_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});