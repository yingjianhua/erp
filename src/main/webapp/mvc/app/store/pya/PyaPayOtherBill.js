Ext.define('mvc.store.pya.PyaPayOtherBill',{
extend : 'Ext.data.Store',
requires : 'mvc.model.pya.PyaPayOtherBill',
model : 'mvc.model.pya.PyaPayOtherBill',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/pya_PyaPayOtherBill_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});