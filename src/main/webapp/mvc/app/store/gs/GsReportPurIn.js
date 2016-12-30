Ext.define('mvc.store.gs.GsReportPurIn',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsReportPurIn',
model : 'mvc.model.gs.GsReportPurIn',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsReportPurIn_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});