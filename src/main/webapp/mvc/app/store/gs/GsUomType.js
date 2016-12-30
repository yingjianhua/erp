Ext.define('mvc.store.gs.GsUomType',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsUomType',
model : 'mvc.model.gs.GsUomType',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsUomType_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});