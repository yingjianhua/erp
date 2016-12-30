Ext.define('mvc.store.pya.PyaPayBill',{
extend : 'Ext.data.Store',
requires : 'mvc.model.pya.PyaPayBill',
model : 'mvc.model.pya.PyaPayBill',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/pya_PyaPayBill_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});