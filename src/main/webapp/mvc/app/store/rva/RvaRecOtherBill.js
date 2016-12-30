Ext.define('mvc.store.rva.RvaRecOtherBill',{
extend : 'Ext.data.Store',
requires : 'mvc.model.rva.RvaRecOtherBill',
model : 'mvc.model.rva.RvaRecOtherBill',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/rva_RvaRecOtherBill_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});