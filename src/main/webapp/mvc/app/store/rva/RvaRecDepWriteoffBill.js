Ext.define('mvc.store.rva.RvaRecDepWriteoffBill',{
extend : 'Ext.data.Store',
requires : 'mvc.model.rva.RvaRecDepWriteoffBill',
model : 'mvc.model.rva.RvaRecDepWriteoffBill',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/rva_RvaRecDepWriteoffBill_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});