Ext.define('mvc.store.cst.CstOutLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.cst.CstOutLine',
model : 'mvc.model.cst.CstOutLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/cst_CstOutLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});