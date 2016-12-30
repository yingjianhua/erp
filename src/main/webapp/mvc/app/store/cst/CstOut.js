Ext.define('mvc.store.cst.CstOut',{
extend : 'Ext.data.Store',
requires : 'mvc.model.cst.CstOut',
model : 'mvc.model.cst.CstOut',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/cst_CstOut_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});