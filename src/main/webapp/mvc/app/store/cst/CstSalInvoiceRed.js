Ext.define('mvc.store.cst.CstSalInvoiceRed',{
extend : 'Ext.data.Store',
requires : 'mvc.model.cst.CstSalInvoiceRed',
model : 'mvc.model.cst.CstSalInvoiceRed',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/cst_CstSalInvoiceRed_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});