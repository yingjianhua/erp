Ext.define('mvc.store.gs.GsPriceCtl',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsPriceCtl',
model : 'mvc.model.gs.GsPriceCtl',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsPriceCtl_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});