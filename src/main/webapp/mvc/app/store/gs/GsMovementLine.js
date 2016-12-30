Ext.define('mvc.store.gs.GsMovementLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsMovementLine',
model : 'mvc.model.gs.GsMovementLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsMovementLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});