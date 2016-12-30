Ext.define('mvc.store.rp.RpJournalLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.rp.RpJournalLine',
model : 'mvc.model.rp.RpJournalLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/rp_RpJournalLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});