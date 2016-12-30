Ext.define('mvc.store.frm.FrmHandoverLine',{
extend : 'Ext.data.Store',
requires : 'mvc.model.frm.FrmHandoverLine',
model : 'mvc.model.frm.FrmHandoverLine',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/frm_FrmHandoverLine_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});