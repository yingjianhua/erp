Ext.define('mvc.store.pya.PyaPayWriteoffBill',{
extend : 'Ext.data.Store',
requires : 'mvc.model.pya.PyaPayWriteoffBill',
model : 'mvc.model.pya.PyaPayWriteoffBill',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/pya_PyaPayWriteoffBill_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});