Ext.define('mvc.combo.gs.GsOBatchType',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 0,text : '不用分批次管理'}
	,{value : 1,text : '分批次管理'}
	,{value : 2,text : '有效(保质)期管理'}
	,{value : 3,text : '一物一序列号管理'}
	]
});