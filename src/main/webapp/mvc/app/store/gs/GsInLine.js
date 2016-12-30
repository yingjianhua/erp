Ext.define('mvc.store.gs.GsInLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsInLine',
model : 'mvc.model.gs.GsInLine',
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