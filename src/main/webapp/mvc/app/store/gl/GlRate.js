Ext.define('mvc.store.gl.GlRate',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gl.GlRate',
model : 'mvc.model.gl.GlRate',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlRate_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});