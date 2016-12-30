Ext.define('mvc.store.gs.GsUnite',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsUnite',
model : 'mvc.model.gs.GsUnite',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsUnite_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});