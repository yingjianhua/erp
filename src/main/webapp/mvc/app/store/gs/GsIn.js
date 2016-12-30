Ext.define('mvc.store.gs.GsIn',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsIn',
model : 'mvc.model.gs.GsIn',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsIn_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});