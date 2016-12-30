Ext.define('mvc.combo.rp.RpORpJournalType',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 1,text : '现金'}
	,{value : 2,text : '对公账户'}
	,{value : 3,text : '对私卡账户'}
	,{value : 9,text : '第三方支付'}
	]
});