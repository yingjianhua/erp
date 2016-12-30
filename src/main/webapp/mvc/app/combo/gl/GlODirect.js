Ext.define('mvc.combo.gl.GlODirect',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 1,text : '借方'}
	,{value : 2,text : '贷方'}
	]
});