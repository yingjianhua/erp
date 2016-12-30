Ext.define('mvc.combo.sal.SalOShipType',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 1,text : '我方支付'}
	,{value : 2,text : '他方支付'}
	,{value : 3,text : '待定'}
	]
});