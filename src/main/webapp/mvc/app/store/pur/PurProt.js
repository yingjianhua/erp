Ext.define('mvc.store.pur.PurProt',{
extend : 'Ext.data.Store',
requires : 'mvc.model.pur.PurProt',
model : 'mvc.model.pur.PurProt',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/pur_PurProt_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});