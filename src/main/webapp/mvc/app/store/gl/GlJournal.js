Ext.define('mvc.store.gl.GlJournal',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gl.GlJournal',
model : 'mvc.model.gl.GlJournal',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlJournal_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});