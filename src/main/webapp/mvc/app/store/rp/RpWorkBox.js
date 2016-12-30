Ext.define('mvc.store.rp.RpWorkBox',{
extend : 'Ext.data.Store',
requires : 'mvc.model.rp.RpWorkBox',
model : 'mvc.model.rp.RpWorkBox',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/rp_RpWorkBox_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});