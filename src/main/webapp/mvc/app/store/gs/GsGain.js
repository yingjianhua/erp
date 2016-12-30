Ext.define('mvc.store.gs.GsGain',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsGain',
model : 'mvc.model.gs.GsGain',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsGain_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});