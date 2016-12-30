Ext.define('mvc.model.frm.FrmHandoverLine',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/frm_FrmHandoverLine_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.form',mapping : 'form',type : 'string',outkey : true}
	,{name : 'bean.formNum',mapping : 'formNum',type : 'string'}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	]
});