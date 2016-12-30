Ext.define('mvc.combo.sal.SalOProtocoType',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 1,text : '固定折扣'}
	,{value : 2,text : '按协议价'}
	,{value : 3,text : '按普通另售价'}
	]
});