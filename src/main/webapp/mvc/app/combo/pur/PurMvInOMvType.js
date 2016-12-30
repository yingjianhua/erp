Ext.define('mvc.combo.pur.PurMvInOMvType',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 1,text : '机构内核算单元之间'}
	,{value : 2,text : '集团内机构之间'}
	,{value : 11,text : '协议调入'}
	]
});