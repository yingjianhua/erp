Ext.define('mvc.store.gl.GlNoteWriteoffLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gl.GlNoteWriteoffLine',
model : 'mvc.model.gl.GlNoteWriteoffLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlNoteWriteoffLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});