Ext.define('mvc.store.rva.RvaRecOtherWriteoffBill',{
extend : 'Ext.data.Store',
requires : 'mvc.model.rva.RvaRecOtherWriteoffBill',
model : 'mvc.model.rva.RvaRecOtherWriteoffBill',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/rva_RvaRecOtherWriteoffBill_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});