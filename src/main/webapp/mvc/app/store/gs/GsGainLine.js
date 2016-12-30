Ext.define('mvc.store.gs.GsGainLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsGainLine',
model : 'mvc.model.gs.GsGainLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsGainLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});