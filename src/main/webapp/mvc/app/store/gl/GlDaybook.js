Ext.define('mvc.store.gl.GlDaybook',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gl.GlDaybook',
model : 'mvc.model.gl.GlDaybook',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlDaybook_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});