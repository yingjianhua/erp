Ext.define('mvc.combo.rp.RpOPayType',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 0,text : '现金'}
	,{value : 1,text : '网银'}
	,{value : 2,text : '转账支票'}
	,{value : 21,text : '电汇'}
	,{value : 22,text : '现金支票'}
	,{value : 31,text : '委托付款'}
	,{value : 32,text : '自动划转'}
	,{value : 99,text : '其他'}
	]
});