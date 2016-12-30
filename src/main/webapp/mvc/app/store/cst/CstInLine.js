Ext.define('mvc.store.cst.CstInLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.cst.CstInLine',
model : 'mvc.model.cst.CstInLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/cst_CstInLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});