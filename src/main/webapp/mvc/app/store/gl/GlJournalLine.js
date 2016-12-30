Ext.define('mvc.store.gl.GlJournalLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gl.GlJournalLine',
model : 'mvc.model.gl.GlJournalLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlJournalLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});