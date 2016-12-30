Ext.define('mvc.combo.gs.GsOPriceOrig',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 1,text : '成本价自动产生（不可维护）'}
	,{value : 2,text : '成本价自动产生（可维护）'}
	]
});