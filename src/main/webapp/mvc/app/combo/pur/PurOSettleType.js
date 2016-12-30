Ext.define('mvc.combo.pur.PurOSettleType', {
	extend : 'Ext.data.Store',
	fields : ['value', 'text'],
	data : [
		{value : 1, text : '现结'},
		{value : 2, text : '挂账'}
	]
})
