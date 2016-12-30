Ext.define('mvc.combo.gs.GsOCombType',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 1,text : '普通货物'}
	,{value : 2,text : '成套组合件'}
	,{value : 3,text : '主虚拟货物'}
	,{value : 4,text : '规格货物'}
	]
});