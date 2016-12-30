Ext.define('mvc.store.gl.GlNoteViewRp',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gl.GlNoteViewRp',
model : 'mvc.model.gl.GlNoteViewRp',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlNoteViewRp_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});