Ext.define('mvc.store.gl.GlOrgStatus', {
	extend : 'Ext.data.Store',
	requires : 'mvc.model.gl.GlOrgStatus',
	model : 'mvc.model.gl.GlOrgStatus',
	pageSize : 20,
	remoteSort : false,
	autoLoad : false,
	proxy : {
		type : 'ajax',
		url : base_path+'/gl_GlOrgStatus_list',
		reader : {
			type : 'json',
			root : 'items',
			totalProperty : 'total'
		},
		simpleSortMode : true
	}
})
