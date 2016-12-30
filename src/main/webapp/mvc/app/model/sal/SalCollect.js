Ext.define('mvc.model.sal.SalCollect',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/sal_SalCollect_load'
},
fields : [{name : 'bean.code',mapping : 'code',type : 'string'}
	,{name : 'bean.name',mapping : 'name',type : 'string'}
	,{name : 'bean.amtSal',mapping : 'amtSal',type : 'float',useNull : true}
	,{name : 'bean.amtRtn',mapping : 'amtRtn',type : 'float',useNull : true}
	,{name : 'bean.amtCash',mapping : 'amtCash',type : 'float',useNull : true}
	,{name : 'bean.amtRec',mapping : 'amtRec',type : 'float',useNull : true}
	,{name : 'bean.amtRecback',mapping : 'amtRecback',type : 'float',useNull : true}
	,{name : 'bean.amtOrder',mapping : 'amtOrder',type : 'float',useNull : true}
	]
});