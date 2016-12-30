Ext.define('mvc.store.pur.PurRtn',{
extend : 'Ext.data.Store',
requires : 'mvc.model.pur.PurRtn',
model : 'mvc.model.pur.PurRtn',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/pur_PurRtn_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});