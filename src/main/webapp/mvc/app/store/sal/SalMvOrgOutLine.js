Ext.define('mvc.store.sal.SalMvOrgOutLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.sal.SalMvOrgOutLine',
model : 'mvc.model.sal.SalMvOrgOutLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/sal_SalMvOrgOutLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});