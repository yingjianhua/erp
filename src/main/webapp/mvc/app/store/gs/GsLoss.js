Ext.define('mvc.store.gs.GsLoss',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsLoss',
model : 'mvc.model.gs.GsLoss',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsLoss_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});