Ext.define('mvc.store.gs.GsDemandDirect',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsDemandDirect',
model : 'mvc.model.gs.GsDemandDirect',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsDemandDirect_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});