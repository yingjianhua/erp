Ext.define('mvc.store.cst.CstPurInvoiceRed',{
extend : 'Ext.data.Store',
requires : 'mvc.model.cst.CstPurInvoiceRed',
model : 'mvc.model.cst.CstPurInvoiceRed',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/cst_CstPurInvoiceRed_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});