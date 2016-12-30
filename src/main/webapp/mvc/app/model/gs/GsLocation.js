Ext.define('mvc.model.gs.GsLocation',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsLocation_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.warehouse',mapping : 'warehouse',type : 'string',outkey : true}
	,{name : 'bean.name',mapping : 'name',type : 'string'}
	,{name : 'bean.enabled',mapping : 'enabled',type : 'int',useNull : true}
	,{name : 'bean.weight',mapping : 'weight',type : 'float',useNull : true}
	,{name : 'bean.weightUsed',mapping : 'weightUsed',type : 'float',useNull : true}
	,{name : 'bean.weightAvail',mapping : 'weightAvail',type : 'float',useNull : true}
	,{name : 'bean.valume',mapping : 'valume',type : 'float',useNull : true}
	,{name : 'bean.valumeUsed',mapping : 'valumeUsed',type : 'float',useNull : true}
	,{name : 'bean.valumeAvail',mapping : 'valumeAvail',type : 'float',useNull : true}
	,{name : 'bean.rem',mapping : 'rem',type : 'string'}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	]
});