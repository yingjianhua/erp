Ext.define('mvc.store.gl.GlDailyLedger',{
extend : 'Ext.data.Store',
requires : 'mvc.model.gl.GlDailyLedger',
model : 'mvc.model.gl.GlDailyLedger',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlDailyLedger_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});