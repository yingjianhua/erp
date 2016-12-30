Ext.define('mvc.store.gl.GlSubjectMap',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gl.GlSubjectMap',
model : 'mvc.model.gl.GlSubjectMap',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlSubjectMap_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});