Ext.define('mvc.store.pur.PurOrderDirect',{
extend : 'Ext.data.Store',
requires : 'mvc.model.pur.PurOrderDirect',
model : 'mvc.model.pur.PurOrderDirect',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/pur_PurOrderDirect_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});