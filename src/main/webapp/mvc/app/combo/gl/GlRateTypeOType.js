Ext.define('mvc.combo.gl.GlRateTypeOType',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 1,text : '0利率'}
	,{value : 2,text : '通用'}
	,{value : 11,text : '内部上存款'}
	,{value : 12,text : '外部存款'}
	,{value : 21,text : '内部借款'}
	,{value : 22,text : '外部借入款'}
	,{value : 23,text : '银行贷款'}
	,{value : 24,text : '票据业务'}
	,{value : 91,text : '其它'}
	]
});