Ext.define('mvc.combo.sal.SalOGroupType', {
	extend : 'Ext.data.Store',
	fields : ['value', 'text'],
	data : [
		{value : 1, text : '客户'},
		{value : 2, text : '日期'},
		{value : 3, text : '机构'},
		{value : 4, text : '部门'},
		{value : 5, text : '商品'}
	]
})
