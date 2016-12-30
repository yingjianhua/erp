Ext.define('mvc.store.gl.GlNoteWriteoff',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gl.GlNoteWriteoff',
model : 'mvc.model.gl.GlNoteWriteoff',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlNoteWriteoff_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});