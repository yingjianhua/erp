Ext.define('mvc.store.cst.CstIn',{
extend : 'Ext.data.Store',
requires : 'mvc.model.cst.CstIn',
model : 'mvc.model.cst.CstIn',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/cst_CstIn_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});