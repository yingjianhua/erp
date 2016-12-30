Ext.define('mvc.store.gs.GsStock',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsStock',
model : 'mvc.model.gs.GsStock',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsStock_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});