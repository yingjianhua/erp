Ext.define('mvc.combo.gs.GsOEnrouteType',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 11,text : '已请购'}
	,{value : 12,text : '调拔在途'}
	,{value : 13,text : '采购在途'}
	,{value : 14,text : '生产订单'}
	,{value : 15,text : '到货/在检'}
	,{value : 16,text : '委外订单'}
	,{value : 49,text : '其他在途'}
	,{value : 51,text : '已订购'}
	,{value : 52,text : '调拔待发'}
	,{value : 53,text : '待发货'}
	,{value : 54,text : '生产未领'}
	,{value : 55,text : '备料计划'}
	,{value : 56,text : '委外未领'}
	,{value : 99,text : '其他锁定'}
	]
});