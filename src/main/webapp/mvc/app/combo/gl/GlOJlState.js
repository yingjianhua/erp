Ext.define('mvc.combo.gl.GlOJlState',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 1,text : '正常'}
	,{value : 2,text : '余额控制'}
	,{value : 9,text : '已销户'}
	]
});