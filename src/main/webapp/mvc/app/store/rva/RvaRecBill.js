Ext.define('mvc.store.rva.RvaRecBill',{
extend : 'Ext.data.Store',
requires : 'mvc.model.rva.RvaRecBill',
model : 'mvc.model.rva.RvaRecBill',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/rva_RvaRecBill_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});