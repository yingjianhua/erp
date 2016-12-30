Ext.define('mvc.combo.sal.SalOPoType', {
	extend : 'Ext.data.Store',
	fields : ['value', 'text'],
	data : [
		{value : 1, text : '采购'},
		{value : 2, text : '调拨'}
	]
})
