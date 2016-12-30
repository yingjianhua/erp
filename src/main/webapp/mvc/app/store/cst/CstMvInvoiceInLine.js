Ext.define('mvc.store.cst.CstMvInvoiceInLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.cst.CstMvInvoiceInLine',
model : 'mvc.model.cst.CstMvInvoiceInLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/cst_CstMvInvoiceInLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});