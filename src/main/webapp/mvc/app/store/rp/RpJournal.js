Ext.define('mvc.store.rp.RpJournal',{
extend : 'Ext.data.Store',
requires : 'mvc.model.rp.RpJournal',
model : 'mvc.model.rp.RpJournal',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/rp_RpJournal_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});