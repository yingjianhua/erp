Ext.define('mvc.store.gl.GlEntryDefLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gl.GlEntryDefLine',
model : 'mvc.model.gl.GlEntryDefLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlEntryDefLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});