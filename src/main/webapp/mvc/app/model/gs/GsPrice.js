Ext.define('mvc.model.gs.GsPrice',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsPrice_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.name',mapping : 'name',type : 'string'}
	,{name : 'bean.namePrice1',mapping : 'namePrice1',type : 'string'}
	,{name : 'bean.namePrice2',mapping : 'namePrice2',type : 'string'}
	,{name : 'bean.namePrice3',mapping : 'namePrice3',type : 'string'}
	,{name : 'bean.namePrice4',mapping : 'namePrice4',type : 'string'}
	,{name : 'bean.namePrice5',mapping : 'namePrice5',type : 'string'}
	,{name : 'bean.namePrice6',mapping : 'namePrice6',type : 'string'}
	,{name : 'bean.namePrice7',mapping : 'namePrice7',type : 'string'}
	,{name : 'bean.namePrice8',mapping : 'namePrice8',type : 'string'}
	,{name : 'bean.namePrice9',mapping : 'namePrice9',type : 'string'}
	,{name : 'bean.namePrice10',mapping : 'namePrice10',type : 'string'}
	,{name : 'bean.namePrice11',mapping : 'namePrice11',type : 'string'}
	,{name : 'bean.namePrice12',mapping : 'namePrice12',type : 'string'}
	,{name : 'bean.rangeType',mapping : 'rangeType',type : 'int',useNull : true}
	,{name : 'bean.rangePkey',mapping : 'rangePkey',type : 'string',outkey : true}
	,{name : 'bean.cell',mapping : 'cell',type : 'string',outkey : true}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	]
});