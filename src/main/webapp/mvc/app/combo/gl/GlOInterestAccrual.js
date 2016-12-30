Ext.define('mvc.combo.gl.GlOInterestAccrual',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 0,text : '不计息'}
	,{value : 1,text : '按月计息'}
	]
});