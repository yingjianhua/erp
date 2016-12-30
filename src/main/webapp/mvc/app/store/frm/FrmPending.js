Ext.define('mvc.store.frm.FrmPending',{
extend : 'Ext.data.Store',
requires : 'mvc.model.frm.FrmPending',
model : 'mvc.model.frm.FrmPending',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/frm_FrmPending_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});