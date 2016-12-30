Ext.define('mvc.combo.gl.GlOTallyFlag',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 1,text : '每日汇总成一笔'}
	,{value : 2,text : '按单据汇总'}
	,{value : 9,text : '逐笔'}
	]
});