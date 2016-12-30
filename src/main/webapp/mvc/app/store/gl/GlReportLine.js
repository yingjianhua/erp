Ext.define('mvc.store.gl.GlReportLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gl.GlReportLine',
model : 'mvc.model.gl.GlReportLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlReportLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});