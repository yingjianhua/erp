Ext.define('mvc.store.gl.GlAgeRvaView',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gl.GlAgeRvaView',
model : 'mvc.model.gl.GlAgeRvaView',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlAgeRvaView_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});