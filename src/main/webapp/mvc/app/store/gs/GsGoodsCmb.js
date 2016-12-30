Ext.define('mvc.store.gs.GsGoodsCmb',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsGoodsCmb',
model : 'mvc.model.gs.GsGoodsCmb',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsGoodsCmb_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});