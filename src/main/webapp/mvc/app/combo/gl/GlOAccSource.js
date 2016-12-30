Ext.define('mvc.combo.gl.GlOAccSource',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 2,text : '指定目标科目取账户'}
	,{value : 3,text : '根据源科目取关联科目'}
	]
});