Ext.define('mvc.store.gl.GlEntryDef',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gl.GlEntryDef',
model : 'mvc.model.gl.GlEntryDef',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlEntryDef_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});