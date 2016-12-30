Ext.define('mvc.store.gs.GsReportSalOut',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsReportSalOut',
model : 'mvc.model.gs.GsReportSalOut',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsReportSalOut_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});