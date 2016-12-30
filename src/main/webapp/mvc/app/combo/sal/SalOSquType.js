Ext.define('mvc.combo.sal.SalOSquType', {
	extend : 'Ext.data.Store',
	fields : ['value', 'text'],
	data : [
		{value : 1, text : '正序'},
		{value : 2, text : '逆序'}
	]
})
