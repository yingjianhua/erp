Ext.define('mvc.store.cst.CstMvInvoiceOut',{
extend : 'Ext.data.Store',
requires : 'mvc.model.cst.CstMvInvoiceOut',
model : 'mvc.model.cst.CstMvInvoiceOut',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/cst_CstMvInvoiceOut_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});