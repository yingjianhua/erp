Ext.define('mvc.model.rp.RpWorkBox',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/rp_RpWorkBox_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.name',mapping : 'name',type : 'string'}
	,{name : 'bean.enabled',mapping : 'enabled',type : 'int',useNull : true}
	,{name : 'bean.type',mapping : 'type',type : 'int',useNull : true}
	,{name : 'bean.userSys',mapping : 'userSys',type : 'string',outkey : true}
	,{name : 'bean.mngCell',mapping : 'mngCell',type : 'string',outkey : true}
	,{name : 'bean.rem',mapping : 'rem',type : 'string'}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	]
});