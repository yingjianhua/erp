Ext.define('mvc.store.gs.GsDemand',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsDemand',
model : 'mvc.model.gs.GsDemand',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsDemand_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});