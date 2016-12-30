Ext.define('mvc.model.gl.GlCarryOver',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlCarryOver_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.templat',mapping : 'templat',type : 'string',outkey : true}
	,{name : 'bean.subjectSource',mapping : 'subjectSource',type : 'string',outkey : true}
	,{name : 'bean.subjectTarget',mapping : 'subjectTarget',type : 'string',outkey : true}
	,{name : 'bean.rowVersion',mapping : 'rowVersion',type : 'int',useNull : true}
	]
});