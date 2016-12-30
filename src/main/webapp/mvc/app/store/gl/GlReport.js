Ext.define('mvc.store.gl.GlReport',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gl.GlReport',
model : 'mvc.model.gl.GlReport',
pageSize : 100,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlReport_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
},
sortInfo : {
		field : 'bean.keyValue',
		direction : "ASC"
	}
});