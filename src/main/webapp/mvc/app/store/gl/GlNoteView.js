Ext.define('mvc.store.gl.GlNoteView',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gl.GlNoteView',
model : 'mvc.model.gl.GlNoteView',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlNoteView_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});