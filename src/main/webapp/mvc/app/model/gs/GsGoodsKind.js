Ext.define('mvc.model.gs.GsGoodsKind',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsGoodsKind_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.code',mapping : 'code',type : 'string'}
	,{name : 'bean.parent',mapping : 'parent',type : 'string',outkey : true}
	,{name : 'bean.type',mapping : 'type',type : 'int',useNull : true}
	,{name : 'bean.name',mapping : 'name',type : 'string'}
	,{name : 'bean.shortkey',mapping : 'shortkey',type : 'string'}
	,{name : 'bean.cust1',mapping : 'cust1',type : 'string'}
	,{name : 'bean.cust2',mapping : 'cust2',type : 'string'}
	,{name : 'bean.cust3',mapping : 'cust3',type : 'string'}
	,{name : 'bean.cust4',mapping : 'cust4',type : 'string'}
	,{name : 'bean.cust5',mapping : 'cust5',type : 'string'}
	,{name : 'bean.subjectAlias',mapping : 'subjectAlias',type : 'string'}
	,{name : 'bean.updateby',mapping : 'updateby',type : 'string',outkey : true}
	,{name : 'bean.updatedTime',mapping : 'updatedTime',type : 'date',dateFormat : 'Y-m-d H:i:s'}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	]
});