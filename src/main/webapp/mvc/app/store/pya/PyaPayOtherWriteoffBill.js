Ext.define('mvc.store.pya.PyaPayOtherWriteoffBill',{
extend : 'Ext.data.Store',
requires : 'mvc.model.pya.PyaPayOtherWriteoffBill',
model : 'mvc.model.pya.PyaPayOtherWriteoffBill',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/pya_PyaPayOtherWriteoffBill_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});