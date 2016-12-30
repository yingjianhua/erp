Ext.define('mvc.store.sal.SalMvOut',{
extend : 'Ext.data.Store',
requires : 'mvc.model.sal.SalMvOut',
model : 'mvc.model.sal.SalMvOut',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/sal_SalMvOut_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});