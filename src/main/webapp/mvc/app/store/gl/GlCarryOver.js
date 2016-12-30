Ext.define('mvc.store.gl.GlCarryOver',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gl.GlCarryOver',
model : 'mvc.model.gl.GlCarryOver',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlCarryOver_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});