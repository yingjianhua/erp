Ext.define('mvc.combo.sal.SalOCreditLevel',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 1,text : '低'}
	,{value : 2,text : '中'}
	,{value : 3,text : '高'}
	]
});