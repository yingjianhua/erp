Ext.define('mvc.store.frm.FrmLink',{
extend : 'Ext.data.Store',
requires : 'mvc.model.frm.FrmLink',
model : 'mvc.model.frm.FrmLink',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/frm_FrmLink_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});