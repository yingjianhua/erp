Ext.define('mvc.store.gs.GsRequestLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsRequestLine',
model : 'mvc.model.gs.GsRequestLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsRequestLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});