Ext.define('mvc.store.cst.CstSalInvoice',{
extend : 'Ext.data.Store',
requires : 'mvc.model.cst.CstSalInvoice',
model : 'mvc.model.cst.CstSalInvoice',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/cst_CstSalInvoice_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});