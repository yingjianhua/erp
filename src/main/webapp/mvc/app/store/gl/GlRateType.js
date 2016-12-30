Ext.define('mvc.store.gl.GlRateType',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gl.GlRateType',
model : 'mvc.model.gl.GlRateType',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlRateType_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});