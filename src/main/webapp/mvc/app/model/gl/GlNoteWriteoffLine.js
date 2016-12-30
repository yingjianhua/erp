Ext.define('mvc.model.gl.GlNoteWriteoffLine',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlNoteWriteoffLine_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.writeoff',mapping : 'writeoff',type : 'string',outkey : true}
	,{name : 'bean.tallyDate',mapping : 'tallyDate',type : 'date'}
	]
});