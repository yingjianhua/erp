Ext.define('mvc.store.rp.RpStimatePay',{
extend : 'Ext.data.Store',
requires : 'mvc.model.rp.RpStimatePay',
model : 'mvc.model.rp.RpStimatePay',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/rp_RpStimatePay_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});