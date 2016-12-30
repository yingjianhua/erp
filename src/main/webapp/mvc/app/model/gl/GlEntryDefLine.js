Ext.define('mvc.model.gl.GlEntryDefLine',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlEntryDefLine_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.lineId',mapping : 'lineId',type : 'int',useNull : true}
	,{name : 'bean.accSource',mapping : 'accSource',type : 'int',useNull : true}
	,{name : 'bean.sourceAliasOrSubject',mapping : 'sourceAliasOrSubject',type : 'string'}
	,{name : 'bean.targetAlias',mapping : 'targetAlias',type : 'string'}
	,{name : 'bean.direct3',mapping : 'direct3',type : 'int',useNull : true}
	,{name : 'bean.amtExpr',mapping : 'amtExpr',type : 'string'}
	,{name : 'bean.negativeAble',mapping : 'negativeAble',type : 'int',useNull : true}
	]
});