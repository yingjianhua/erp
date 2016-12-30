Ext.define('mvc.store.rp.RpHandoverLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.rp.RpHandoverLine',
model : 'mvc.model.rp.RpHandoverLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/rp_RpHandoverLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});