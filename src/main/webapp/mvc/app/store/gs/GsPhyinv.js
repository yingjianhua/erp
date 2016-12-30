Ext.define('mvc.store.gs.GsPhyinv',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsPhyinv',
model : 'mvc.model.gs.GsPhyinv',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsPhyinv_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});