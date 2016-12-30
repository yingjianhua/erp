Ext.define('mvc.store.gl.GlTransformLine', {
	extend : 'Ext.data.Store',
	requires : 'mvc.model.gl.GlTransformLine',
	model : 'mvc.model.gl.GlTransformLine',
	pageSize : 20,
	remoteSort : false,
	autoLoad : false,
	proxy : {
		type : 'ajax',
		url : base_path+'/gl_GlTransformLine_list',
		reader : {
			type : 'json',
			root : 'items',
			totalProperty : 'total'
		},
		simpleSortMode : true
	}
})
