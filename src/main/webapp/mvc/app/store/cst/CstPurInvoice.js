Ext.define('mvc.store.cst.CstPurInvoice',{
extend : 'Ext.data.Store',
requires : 'mvc.model.cst.CstPurInvoice',
model : 'mvc.model.cst.CstPurInvoice',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/cst_CstPurInvoice_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});