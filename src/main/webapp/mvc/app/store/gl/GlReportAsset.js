Ext.define('mvc.store.gl.GlReportAsset',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gl.GlReportAsset',
model : 'mvc.model.gl.GlReportAsset',
pageSize : 100,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlReportAsset_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});