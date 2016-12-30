Ext.define('mvc.combo.gl.GlOSType', {
	extend : 'Ext.data.Store',
	fields : ['value', 'text'],
	data : [
		{value : 1, text : '资产'},
		{value : 2, text : '负债'},
		{value : 3, text : '权益'},
		{value : 4, text : '成本'},
		{value : 5, text : '损益'},
		{value : 9, text : '表外'}
	]
})
