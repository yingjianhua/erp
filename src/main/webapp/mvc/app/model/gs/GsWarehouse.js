Ext.define('mvc.model.gs.GsWarehouse',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsWarehouse_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'string',outkey : true}
	,{name : 'bean.org',mapping : 'org',type : 'string',outkey : true}
	,{name : 'bean.cell',mapping : 'cell',type : 'string',outkey : true}
	,{name : 'bean.enabled',mapping : 'enabled',type : 'int',useNull : true}
	,{name : 'bean.locationFlag',mapping : 'locationFlag',type : 'int',useNull : true}
	,{name : 'bean.outOrder',mapping : 'outOrder',type : 'int',useNull : true}
	,{name : 'bean.consignees',mapping : 'consignees',type : 'string',outkey : true}
	,{name : 'bean.invented',mapping : 'invented',type : 'int',useNull : true}
	,{name : 'bean.rem',mapping : 'rem',type : 'string'}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	]
});