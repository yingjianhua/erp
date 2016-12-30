Ext.define('mvc.combo.gl.GlOFrostFlag',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 1,text : '正常'}
	,{value : 2,text : '禁止借(付)方发生'}
	,{value : 3,text : '禁止贷(收)方发生'}
	,{value : 4,text : '禁止借贷双方发生'}
	]
});