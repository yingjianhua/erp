Ext.define('mvc.store.sal.SalOrder',{
extend : 'Ext.data.Store',
requires : 'mvc.model.sal.SalOrder',
model : 'mvc.model.sal.SalOrder',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/sal_SalOrder_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});