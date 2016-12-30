Ext.define('mvc.store.gs.GsOut',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsOut',
model : 'mvc.model.gs.GsOut',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsOut_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});