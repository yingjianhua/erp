Ext.define('mvc.store.cst.CstInRed',{
extend : 'Ext.data.Store',
requires : 'mvc.model.cst.CstInRed',
model : 'mvc.model.cst.CstInRed',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/cst_CstInRed_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});