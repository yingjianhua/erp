Ext.define('mvc.combo.gl.GlOValueType',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 1,text : '余额'}
	,{value : 2,text : '小计'}
	,{value : 3,text : '总计'}
	,{value : 4,text : '无'}
	]
});