Ext.define('mvc.store.pur.PurOrder',{
extend : 'Ext.data.Store',
requires : 'mvc.model.pur.PurOrder',
model : 'mvc.model.pur.PurOrder',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/pur_PurOrder_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});