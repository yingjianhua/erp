Ext.define('mvc.combo.gl.GlOTransformType',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 1,text : '普通'}
	,{value : 2,text : '损益结转'}
	,{value : 3,text : '汇总入账'}
	]
});