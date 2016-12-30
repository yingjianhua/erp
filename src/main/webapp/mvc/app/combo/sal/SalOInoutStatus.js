Ext.define('mvc.combo.sal.SalOInoutStatus',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 1,text : '未完成'}
	,{value : 2,text : '已产生出入库单'}
	,{value : 3,text : '已完成'}
	]
});