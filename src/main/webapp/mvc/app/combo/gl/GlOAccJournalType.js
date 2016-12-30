Ext.define('mvc.combo.gl.GlOAccJournalType',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 1,text : '金额'}
	,{value : 2,text : '数量金额'}
	,{value : 3,text : '分批次数量金额'}
	]
});