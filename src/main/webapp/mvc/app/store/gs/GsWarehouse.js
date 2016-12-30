Ext.define('mvc.store.gs.GsWarehouse',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsWarehouse',
model : 'mvc.model.gs.GsWarehouse',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsWarehouse_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});