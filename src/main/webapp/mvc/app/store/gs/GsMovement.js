Ext.define('mvc.store.gs.GsMovement',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsMovement',
model : 'mvc.model.gs.GsMovement',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsMovement_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});