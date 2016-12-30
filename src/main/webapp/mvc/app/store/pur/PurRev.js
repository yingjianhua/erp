Ext.define('mvc.store.pur.PurRev',{
extend : 'Ext.data.Store',
requires : 'mvc.model.pur.PurRev',
model : 'mvc.model.pur.PurRev',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/pur_PurRev_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});