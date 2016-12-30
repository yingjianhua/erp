Ext.define('mvc.combo.gl.GlOWriteoffFlag',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 1,text : '不销账'}
	,{value : 2,text : '新建销账计划'}
	,{value : 3,text : '核销'}
	]
});