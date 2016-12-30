Ext.define('mvc.store.rva.RvaRecDepBill',{
extend : 'Ext.data.Store',
requires : 'mvc.model.rva.RvaRecDepBill',
model : 'mvc.model.rva.RvaRecDepBill',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/rva_RvaRecDepBill_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});