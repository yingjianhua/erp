Ext.define('mvc.store.gs.GsReportMvOut',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gs.GsReportMvOut',
model : 'mvc.model.gs.GsReportMvOut',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsReportMvOut_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});