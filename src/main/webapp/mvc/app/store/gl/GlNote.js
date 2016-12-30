Ext.define('mvc.store.gl.GlNote',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gl.GlNote',
model : 'mvc.model.gl.GlNote',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlNote_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});