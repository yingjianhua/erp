Ext.define('mvc.combo.sal.SalOOrderStatus',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 1,text : '未完成'}
	,{value : 2,text : '已关闭'}
	]
});