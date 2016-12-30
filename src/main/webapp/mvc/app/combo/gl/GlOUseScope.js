Ext.define('mvc.combo.gl.GlOUseScope',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 1,text : '机构'}
	,{value : 2,text : '核算单元'}
	,{value : 3,text : '机构与核算单元都可用'}
	,{value : 11,text : '清算中心'}
	]
});