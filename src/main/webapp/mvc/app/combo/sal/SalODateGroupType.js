Ext.define('mvc.combo.sal.SalODateGroupType', {
	extend : 'Ext.data.Store',
	fields : ['value', 'text'],
	data : [
		{value : 1, text : '按年'},
		{value : 2, text : '按月'}
	]
})
