Ext.define('mvc.store.gs.GsOutLineView',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsOutLineView',
model : 'mvc.model.gs.GsOutLineView',
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