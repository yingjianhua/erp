Ext.define('mvc.store.pya.PyaPayDepWriteoffBill',{
extend : 'Ext.data.Store',
requires : 'mvc.model.pya.PyaPayDepWriteoffBill',
model : 'mvc.model.pya.PyaPayDepWriteoffBill',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/pya_PyaPayDepWriteoffBill_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});