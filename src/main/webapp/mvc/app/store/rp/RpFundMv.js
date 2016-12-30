Ext.define('mvc.store.rp.RpFundMv',{
extend : 'Ext.data.Store',
requires : 'mvc.model.rp.RpFundMv',
model : 'mvc.model.rp.RpFundMv',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/rp_RpFundMv_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});