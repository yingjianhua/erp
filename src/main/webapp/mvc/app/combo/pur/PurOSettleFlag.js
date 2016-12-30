Ext.define('mvc.combo.pur.PurOSettleFlag',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 1,text : '按到货数量'}
	,{value : 2,text : '按发货数量'}
	]
});