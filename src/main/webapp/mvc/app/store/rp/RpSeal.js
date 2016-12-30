Ext.define('mvc.store.rp.RpSeal',{
extend : 'Ext.data.Store',
requires : 'mvc.model.rp.RpSeal',
model : 'mvc.model.rp.RpSeal',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/rp_RpSeal_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});