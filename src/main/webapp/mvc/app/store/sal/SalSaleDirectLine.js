Ext.define('mvc.store.sal.SalSaleDirectLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.sal.SalSaleDirectLine',
model : 'mvc.model.sal.SalSaleDirectLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/sal_SalSaleDirectLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});