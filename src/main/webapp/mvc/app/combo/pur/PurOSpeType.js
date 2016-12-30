Ext.define('mvc.combo.pur.PurOSpeType',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 1,text : '普通订单'}
	,{value : 2,text : '特价订单'}
	]
});