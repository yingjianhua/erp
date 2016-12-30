Ext.define('mvc.store.frm.FrmHandover',{
extend : 'Ext.data.Store',
requires : 'mvc.model.frm.FrmHandover',
model : 'mvc.model.frm.FrmHandover',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/frm_FrmHandover_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});