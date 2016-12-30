Ext.define('mvc.combo.gl.GlOAccType',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 1,text : '单账户科目'}
	,{value : 2,text : '多账户科目'}
	,{value : 61,text : '机构'}
	,{value : 62,text : '核算单元'}
	,{value : 63,text : '部门'}
	,{value : 65,text : '项目'}
	,{value : 66,text : '职员'}
	,{value : 67,text : '用户'}
	,{value : 68,text : '客户'}
	,{value : 69,text : '供应商'}
	]
});