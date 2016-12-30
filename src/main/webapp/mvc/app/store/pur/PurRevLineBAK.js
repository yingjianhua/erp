Ext.define('mvc.store.pur.PurRevLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.pur.PurRevLine',
model : 'mvc.model.pur.PurRevLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/pur_PurRevLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});