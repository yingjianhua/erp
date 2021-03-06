Ext.define('mvc.store.sys.SysEm',{
extend : 'Ext.data.Store',
requires : 'mvc.model.sys.SysEm',
model : 'mvc.model.sys.SysEm',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/sys_SysEm_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});