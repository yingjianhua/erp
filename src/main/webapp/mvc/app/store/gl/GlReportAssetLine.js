Ext.define('mvc.store.gl.GlReportAssetLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gl.GlReportAssetLine',
model : 'mvc.model.gl.GlReportAssetLine',
pageSize : 100,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlReportAssetLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});