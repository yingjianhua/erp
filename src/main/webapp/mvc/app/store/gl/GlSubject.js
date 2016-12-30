Ext.define('mvc.store.gl.GlSubject',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gl.GlSubject',
model : 'mvc.model.gl.GlSubject',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlSubject_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});