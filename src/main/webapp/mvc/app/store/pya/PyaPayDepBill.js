Ext.define('mvc.store.pya.PyaPayDepBill',{
extend : 'Ext.data.Store',
requires : 'mvc.model.pya.PyaPayDepBill',
model : 'mvc.model.pya.PyaPayDepBill',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/pya_PyaPayDepBill_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});