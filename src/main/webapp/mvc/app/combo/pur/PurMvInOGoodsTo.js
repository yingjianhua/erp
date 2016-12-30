Ext.define('mvc.combo.pur.PurMvInOGoodsTo',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 1,text : '调入到仓库'}
	,{value : 2,text : '调入用于直销'}
	]
});