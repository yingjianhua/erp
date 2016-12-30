Ext.define('mvc.store.gl.GlTransform',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gl.GlTransform',
model : 'mvc.model.gl.GlTransform',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlTransform_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});