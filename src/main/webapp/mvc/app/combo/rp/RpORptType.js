Ext.define('mvc.combo.rp.RpORptType',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 0,text : '现金'}
	,{value : 1,text : '网银'}
	,{value : 2,text : '转账'}
	,{value : 21,text : '电汇'}
	,{value : 22,text : '现金存入'}
	,{value : 31,text : '委托收款'}
	,{value : 99,text : '其他'}
	]
});