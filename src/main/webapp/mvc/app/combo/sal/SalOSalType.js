Ext.define('mvc.combo.sal.SalOSalType',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 1,text : '上门'}
	,{value : 2,text : '电话'}
	,{value : 3,text : '网上'}
	,{value : 4,text : '其他'}
	]
});