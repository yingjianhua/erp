Ext.define('mvc.combo.gl.GlOSubjectKind',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 11,text : '现金'}
	,{value : 12,text : '银行存款'}
	,{value : 13,text : '流动资产'}
	,{value : 14,text : '存货'}
	,{value : 15,text : '非流动资产'}
	,{value : 16,text : '固定资产'}
	,{value : 17,text : '累计折旧'}
	,{value : 21,text : '流动负债'}
	,{value : 31,text : '资本'}
	,{value : 32,text : '累计盈余--本年利润'}
	,{value : 33,text : '累计盈余'}
	,{value : 41,text : '生产成本'}
	,{value : 51,text : '收入'}
	,{value : 52,text : '其他收入'}
	,{value : 53,text : '销售成本'}
	,{value : 54,text : '其他费用'}
	,{value : 55,text : '费用'}
	,{value : 91,text : '表外'}
	]
});