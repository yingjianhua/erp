Ext.define('mvc.combo.gs.GsOType',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 1,text : '标准产品'}
	,{value : 11,text : '自有产品'}
	,{value : 12,text : '服务'}
	,{value : 99,text : '人工'}
	]
});