Ext.define('mvc.store.cst.CstMvInvoiceIn',{
extend : 'Ext.data.Store',
requires : 'mvc.model.cst.CstMvInvoiceIn',
model : 'mvc.model.cst.CstMvInvoiceIn',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/cst_CstMvInvoiceIn_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});