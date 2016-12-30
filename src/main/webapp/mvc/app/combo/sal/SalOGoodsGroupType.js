Ext.define('mvc.combo.sal.SalOGoodsGroupType', {
	extend : 'Ext.data.Store',
	fields : ['value', 'text'],
	data : [
		{value : 1, text : '按商品'},
		{value : 2, text : '按商品类别'}
	]
})
