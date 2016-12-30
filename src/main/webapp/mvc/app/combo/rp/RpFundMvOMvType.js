Ext.define('mvc.combo.rp.RpFundMvOMvType',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 1,text : '核算单元内部'}
	,{value : 2,text : '机构内部核算单元之间'}
	,{value : 3,text : '跨机构'}
	]
});