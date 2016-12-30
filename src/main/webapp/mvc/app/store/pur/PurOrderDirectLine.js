Ext.define('mvc.store.pur.PurOrderDirectLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.pur.PurOrderDirectLine',
model : 'mvc.model.pur.PurOrderDirectLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/pur_PurOrderDirectLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});