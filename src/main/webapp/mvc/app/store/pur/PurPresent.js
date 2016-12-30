Ext.define('mvc.store.pur.PurPresent',{
extend : 'Ext.data.Store',
requires : 'mvc.model.pur.PurPresent',
model : 'mvc.model.pur.PurPresent',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/pur_PurPresent_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});