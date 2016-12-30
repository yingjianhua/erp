Ext.define('mvc.store.gs.GsSplitLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsSplitLine',
model : 'mvc.model.gs.GsSplitLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsSplitLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});