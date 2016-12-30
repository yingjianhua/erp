Ext.define('mvc.store.cst.CstOutRed',{
extend : 'Ext.data.Store',
requires : 'mvc.model.cst.CstOutRed',
model : 'mvc.model.cst.CstOutRed',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/cst_CstOutRed_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});