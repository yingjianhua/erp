Ext.define('mvc.store.gl.GlReportProfitLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gl.GlReportProfitLine',
model : 'mvc.model.gl.GlReportProfitLine',
pageSize : 100,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlReportProfitLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});