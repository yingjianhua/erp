Ext.define('mvc.store.gl.GlAccountAlias', {
	extend : 'Ext.data.Store',
	requires : 'mvc.model.gl.GlAccountAlias',
	model : 'mvc.model.gl.GlAccountAlias',
	pageSize : 20,
	remoteSort : false,
	autoLoad : false,
	proxy : {
		type : 'ajax',
		url : base_path+'/gl_GlAccountAlias_list',
		reader : {
			type : 'json',
			root : 'items',
			totalProperty : 'total'
		},
		simpleSortMode : true
	}
})
