Ext.define('mvc.store.gl.GlNoteAmtCancel',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gl.GlNoteAmtCancel',
model : 'mvc.model.gl.GlNoteAmtCancel',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlNoteAmtCancel_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});