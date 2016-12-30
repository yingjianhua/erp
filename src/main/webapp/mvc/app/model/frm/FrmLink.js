Ext.define('mvc.model.frm.FrmLink',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/frm_FrmLink_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.type',mapping : 'type',type : 'int',useNull : true}
	,{name : 'bean.mainForm',mapping : 'mainForm',type : 'string',outkey : true}
	,{name : 'bean.mainFormNum',mapping : 'mainFormNum',type : 'string'}
	,{name : 'bean.linkForm',mapping : 'linkForm',type : 'string',outkey : true}
	,{name : 'bean.linkFormNum',mapping : 'linkFormNum',type : 'string'}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	]
});