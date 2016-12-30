Ext.define('mvc.store.gl.GlGoods',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gl.GlGoods',
model : 'mvc.model.gl.GlGoods',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlGoods_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});