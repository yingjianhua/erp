Ext.define('mvc.combo.sal.SalMvOutOGoodsFrom',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 1,text : '来源于仓库'}
	,{value : 2,text : '产生直销需求'}
	]
});