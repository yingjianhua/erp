Ext.define('mvc.store.gl.GlAccount', {
	extend : 'Ext.data.Store',
	requires : 'mvc.model.gl.GlAccount',
	model : 'mvc.model.gl.GlAccount',
	pageSize : 20,
	remoteSort : false,
	autoLoad : false,
	proxy : {
		type : 'ajax',
		url : base_path+'/gl_GlAccount_list',
		reader : {
			type : 'json',
			root : 'items',
			totalProperty : 'total'
		},
		simpleSortMode : true
	}
})
