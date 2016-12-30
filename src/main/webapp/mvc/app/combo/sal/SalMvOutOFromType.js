Ext.define('mvc.combo.sal.SalMvOutOFromType',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 1,text : '需求'}
	,{value : 2,text : '调入'}
	,{value : 3,text : '手动'}
	]
});