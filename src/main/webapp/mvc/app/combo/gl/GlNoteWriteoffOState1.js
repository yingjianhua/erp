Ext.define('mvc.combo.gl.GlNoteWriteoffOState',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 1,text : '未销账'}
	,{value : 2,text : '部分销账'}
	,{value : 9,text : '已销账'}
	]
});