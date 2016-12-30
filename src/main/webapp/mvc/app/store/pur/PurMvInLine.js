Ext.define('mvc.store.pur.PurMvInLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.pur.PurMvInLine',
model : 'mvc.model.pur.PurMvInLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/pur_PurMvInLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});