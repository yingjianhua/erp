Ext.define('mvc.combo.gs.GsOOutOrder',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 1,text : '随意'}
	,{value : 2,text : '先入先出'}
	]
});