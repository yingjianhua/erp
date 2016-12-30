Ext.define('mvc.store.gs.GsUniteLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsUniteLine',
model : 'mvc.model.gs.GsUniteLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsUniteLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});