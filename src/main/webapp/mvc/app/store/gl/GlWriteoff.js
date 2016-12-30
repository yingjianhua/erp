Ext.define('mvc.store.gl.GlWriteoff', {
	extend : 'Ext.data.Store',
	requires : 'mvc.model.gl.GlWriteoff',
	model : 'mvc.model.gl.GlWriteoff',
	pageSize : 20,
	remoteSort : false,
	autoLoad : false,
	proxy : {
		type : 'ajax',
		url : base_path+'/gl_GlWriteoff_list',
		reader : {
			type : 'json',
			root : 'items',
			totalProperty : 'total'
		},
		simpleSortMode : true
	}
})
