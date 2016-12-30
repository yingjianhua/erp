Ext.define('mvc.store.rva.RvaRecWriteoffBill',{
extend : 'Ext.data.Store',
requires : 'mvc.model.rva.RvaRecWriteoffBill',
model : 'mvc.model.rva.RvaRecWriteoffBill',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/rva_RvaRecWriteoffBill_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});