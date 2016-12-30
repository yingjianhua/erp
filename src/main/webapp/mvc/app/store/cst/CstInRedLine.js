Ext.define('mvc.store.cst.CstInRedLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.cst.CstInRedLine',
model : 'mvc.model.cst.CstInRedLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/cst_CstInRedLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});