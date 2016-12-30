Ext.define('mvc.store.sal.SalSaleDirect',{
extend : 'Ext.data.Store',
requires : 'mvc.model.sal.SalSaleDirect',
model : 'mvc.model.sal.SalSaleDirect',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/sal_SalSaleDirect_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});