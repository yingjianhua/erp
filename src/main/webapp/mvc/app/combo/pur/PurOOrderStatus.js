Ext.define('mvc.combo.pur.PurOOrderStatus',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 1,text : '未完成'}
	,{value : 2,text : '已关闭'}
	]
});