Ext.define('mvc.store.pur.PurOrderLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.pur.PurOrderLine',
model : 'mvc.model.pur.PurOrderLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/pur_PurOrderLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});