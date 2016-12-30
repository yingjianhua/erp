Ext.define('mvc.store.gl.GlJlAmt', {
	extend : 'Ext.data.Store',
	requires : 'mvc.model.gl.GlJlAmt',
	model : 'mvc.model.gl.GlJlAmt',
	pageSize : 20,
	remoteSort : false,
	autoLoad : false,
	proxy : {
		type : 'ajax',
		url : base_path+'/gl_GlJlAmt_list',
		reader : {
			type : 'json',
			root : 'items',
			totalProperty : 'total'
		},
		simpleSortMode : true
	}
})
