Ext.define('mvc.combo.sal.SalODateType', {
	extend : 'Ext.data.Store',
	fields : ['value', 'text'],
	data : [
		{value : 1, text : '本年'},
		{value : 2, text : '本月'},
		{value : 3, text : '本日'},
		{value : 4, text : '上月'},
		{value : 5, text : '指定'}
	]
})
