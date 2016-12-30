Ext.define('mvc.store.cst.CstSalInvoiceRedLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.cst.CstSalInvoiceRedLine',
model : 'mvc.model.cst.CstSalInvoiceRedLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/cst_CstSalInvoiceRedLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});