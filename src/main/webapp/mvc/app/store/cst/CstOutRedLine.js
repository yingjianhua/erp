Ext.define('mvc.store.cst.CstOutRedLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.cst.CstOutRedLine',
model : 'mvc.model.cst.CstOutRedLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/cst_CstOutRedLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});