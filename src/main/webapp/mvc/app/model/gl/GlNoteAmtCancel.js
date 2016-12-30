Ext.define('mvc.model.gl.GlNoteAmtCancel',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlNoteAmtCancel_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.cancelNote',mapping : 'cancelNote',type : 'string',outkey : true}
	]
});