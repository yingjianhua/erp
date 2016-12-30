Ext.define('mvc.combo.pur.PurMvInOFromType',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 1,text : '需求'}
	,{value : 2,text : '调出'}
	,{value : 3,text : '手动'}
	,{value : 4,text : '直销'}
	]
});