Ext.define('mvc.store.lgt.LgtShipMode', {
	extend : 'Ext.data.Store',
	requires : 'mvc.model.lgt.LgtShipMode',
	model : 'mvc.model.lgt.LgtShipMode',
	pageSize : 20,
	remoteSort : false,
	autoLoad : false,
	proxy : {
		type : 'ajax',
		url : base_path+'/lgt_LgtShipMode_list',
		reader : {
			type : 'json',
			root : 'items',
			totalProperty : 'total'
		},
		simpleSortMode : true
	}
})
