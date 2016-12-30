Ext.define('mvc.store.rp.RpNotePayBill',{
extend : 'Ext.data.Store',
requires : 'mvc.model.rp.RpNotePayBill',
model : 'mvc.model.rp.RpNotePayBill',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/rp_RpNotePayBill_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});