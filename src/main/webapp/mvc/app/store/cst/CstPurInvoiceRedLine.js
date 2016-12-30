Ext.define('mvc.store.cst.CstPurInvoiceRedLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.cst.CstPurInvoiceRedLine',
model : 'mvc.model.cst.CstPurInvoiceRedLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/cst_CstPurInvoiceRedLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});