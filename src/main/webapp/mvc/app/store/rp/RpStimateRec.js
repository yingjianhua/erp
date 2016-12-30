Ext.define('mvc.store.rp.RpStimateRec',{
extend : 'Ext.data.Store',
requires : 'mvc.model.rp.RpStimateRec',
model : 'mvc.model.rp.RpStimateRec',
pageSize : 20,
remoteSort : false,
autoLoad : false,
proxy : {
	type : 'ajax',
	url : base_path+'/rp_RpStimateRec_list',
	reader : {
		type : 'json',
		root : 'items',
		totalProperty : 'total'
	},
	simpleSortMode : true
}
});