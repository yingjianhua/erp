Ext.define('mvc.store.pur.PurMvIn',{
extend : 'Ext.data.Store',
requires : 'mvc.model.pur.PurMvIn',
model : 'mvc.model.pur.PurMvIn',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/pur_PurMvIn_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});