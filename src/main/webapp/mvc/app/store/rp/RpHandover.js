Ext.define('mvc.store.rp.RpHandover',{
extend : 'Ext.data.Store',
requires : 'mvc.model.rp.RpHandover',
model : 'mvc.model.rp.RpHandover',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/rp_RpHandover_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});