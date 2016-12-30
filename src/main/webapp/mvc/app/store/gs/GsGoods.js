Ext.define('mvc.store.gs.GsGoods',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsGoods',
model : 'mvc.model.gs.GsGoods',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsGoods_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});