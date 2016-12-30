Ext.define('mvc.store.cst.CstPurInvoiceLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.cst.CstPurInvoiceLine',
model : 'mvc.model.cst.CstPurInvoiceLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/cst_CstPurInvoiceLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});