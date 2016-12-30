Ext.define('mvc.combo.gl.GlOTallyState',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 0,text : '初始'}
	,{value : 12,text : '待被汇总入账'}
	,{value : 21,text : '已入账-单笔'}
	,{value : 22,text : '已被汇总入账'}
	,{value : 23,text : '汇总入账'}
	]
});