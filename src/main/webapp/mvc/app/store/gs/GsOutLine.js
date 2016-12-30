Ext.define('mvc.store.gs.GsOutLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsOutLine',
model : 'mvc.model.gs.GsOutLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsOutLineView_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});