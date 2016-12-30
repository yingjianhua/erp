Ext.define('mvc.store.gs.GsInLineView',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsInLineView',
model : 'mvc.model.gs.GsInLineView',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsInLineView_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});