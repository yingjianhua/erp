Ext.define('mvc.store.gs.GsUom',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsUom',
model : 'mvc.model.gs.GsUom',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsUom_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});