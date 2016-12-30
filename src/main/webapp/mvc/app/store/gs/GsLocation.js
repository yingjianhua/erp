Ext.define('mvc.store.gs.GsLocation',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsLocation',
model : 'mvc.model.gs.GsLocation',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsLocation_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});