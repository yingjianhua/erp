Ext.define('mvc.store.rp.RpNoteRptBill',{
extend : 'Ext.data.Store',
requires : 'mvc.model.rp.RpNoteRptBill',
model : 'mvc.model.rp.RpNoteRptBill',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/rp_RpNoteRptBill_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});