Ext.define('mvc.store.gl.GlWriteoffLine', {
	extend : 'Ext.data.Store',
	requires : 'mvc.model.gl.GlWriteoffLine',
	model : 'mvc.model.gl.GlWriteoffLine',
	pageSize : 20,
	remoteSort : false,
	autoLoad : false,
	proxy : {
		type : 'ajax',
		url : base_path+'/gl_GlWriteoffLine_list',
		reader : {
			type : 'json',
			root : 'items',
			totalProperty : 'total'
		},
		simpleSortMode : true
	}
})
