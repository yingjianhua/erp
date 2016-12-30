Ext.define('mvc.store.gl.GlReportProfit',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gl.GlReportProfit',
model : 'mvc.model.gl.GlReportProfit',
pageSize : 100,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlReportProfit_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});