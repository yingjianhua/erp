Ext.define('mvc.store.gs.GsSplit',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsSplit',
model : 'mvc.model.gs.GsSplit',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsSplit_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});