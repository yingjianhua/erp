Ext.define('mvc.store.sal.SalPriceProt',{
extend : 'Ext.data.Store',
requires : 'mvc.model.sal.SalPriceProt',
model : 'mvc.model.sal.SalPriceProt',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/sal_SalPriceProt_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});