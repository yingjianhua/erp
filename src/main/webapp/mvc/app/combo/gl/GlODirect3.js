Ext.define('mvc.combo.gl.GlODirect3',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 1,text : '借方'}
	,{value : 2,text : '贷方'}
	,{value : 3,text : '取参数的借贷标志'}
	]
});