Ext.define('mvc.store.gl.GlBook', {
	extend : 'Ext.data.Store',
	requires : 'mvc.model.gl.GlBook',
	model : 'mvc.model.gl.GlBook',
	pageSize : 20,
	remoteSort : false,
	autoLoad : false,
	proxy : {
		type : 'ajax',
		url : base_path+'/gl_GlBook_list',
		reader : {
			type : 'json',
			root : 'items',
			totalProperty : 'total'
		},
		simpleSortMode : true
	}
})
