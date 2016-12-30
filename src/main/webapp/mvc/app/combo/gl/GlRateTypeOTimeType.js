Ext.define('mvc.combo.gl.GlRateTypeOTimeType',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 1,text : '短期(1年及以内)'}
	,{value : 2,text : '中期(1年以上3年及以内)'}
	,{value : 3,text : '长期(3年以上)'}
	]
});