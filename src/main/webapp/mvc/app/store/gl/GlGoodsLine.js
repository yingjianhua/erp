Ext.define('mvc.store.gl.GlGoodsLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gl.GlGoodsLine',
model : 'mvc.model.gl.GlGoodsLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlGoodsLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});