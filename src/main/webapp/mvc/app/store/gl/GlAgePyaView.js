Ext.define('mvc.store.gl.GlAgePyaView',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gl.GlAgePyaView',
model : 'mvc.model.gl.GlAgePyaView',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlAgePyaView_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});