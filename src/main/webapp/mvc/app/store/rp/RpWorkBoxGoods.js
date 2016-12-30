Ext.define('mvc.store.rp.RpWorkBoxGoods',{
extend : 'Ext.data.Store',
requires : 'mvc.model.rp.RpWorkBoxGoods',
model : 'mvc.model.rp.RpWorkBoxGoods',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/rp_RpWorkBoxGoods_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});