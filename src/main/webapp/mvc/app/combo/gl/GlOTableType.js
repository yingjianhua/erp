Ext.define('mvc.combo.gl.GlOTableType',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 1,text : '资产'}
	,{value : 2,text : '负债'}
	,{value : 3,text : '所有者权益'}
	,{value : 4,text : '利润表'}
	]
});