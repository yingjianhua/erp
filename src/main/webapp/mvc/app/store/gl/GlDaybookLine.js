Ext.define('mvc.store.gl.GlDaybookLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gl.GlDaybookLine',
model : 'mvc.model.gl.GlDaybookLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlDaybookLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});