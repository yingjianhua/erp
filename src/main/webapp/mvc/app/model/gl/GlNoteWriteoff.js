Ext.define('mvc.model.gl.GlNoteWriteoff',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlNoteWriteoff_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.state',mapping : 'state',type : 'int',useNull : true}
	,{name : 'bean.balance',mapping : 'balance',type : 'float',useNull : true}
	,{name : 'bean.dateStart',mapping : 'dateStart',type : 'date'}
	,{name : 'bean.dateDue',mapping : 'dateDue',type : 'date'}
	,{name : 'bean.tallyDate',mapping : 'tallyDate',type : 'date'}
	,{name : 'bean.rem',mapping : 'rem',type : 'string'}
	]
});