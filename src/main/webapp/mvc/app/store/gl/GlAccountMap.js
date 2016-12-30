Ext.define('mvc.store.gl.GlAccountMap', {
	extend : 'Ext.data.Store',
	requires : 'mvc.model.gl.GlAccountMap',
	model : 'mvc.model.gl.GlAccountMap',
	pageSize : 20,
	remoteSort : false,
	autoLoad : false,
	proxy : {
		type : 'ajax',
		url : base_path+'/gl_GlAccountMap_list',
		reader : {
			type : 'json',
			root : 'items',
			totalProperty : 'total'
		},
		simpleSortMode : true
	}
})
