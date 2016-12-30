Ext.define('mvc.store.gl.GlJlAmtLine', {
	extend : 'Ext.data.Store',
	requires : 'mvc.model.gl.GlJlAmtLine',
	model : 'mvc.model.gl.GlJlAmtLine',
	pageSize : 20,
	remoteSort : false,
	autoLoad : false,
	proxy : {
		type : 'ajax',
		url : base_path+'/gl_GlJlAmtLine_list',
		reader : {
			type : 'json',
			root : 'items',
			totalProperty : 'total'
		},
		simpleSortMode : true
	}
})
