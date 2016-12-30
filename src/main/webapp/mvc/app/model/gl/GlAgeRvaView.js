Ext.define('mvc.model.gl.GlAgeRvaView',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlAgeRvaView_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.dept',mapping : 'dept',type : 'string',outkey : true}
	,{name : 'bean.businessMember',mapping : 'businessMember',type : 'string',outkey : true}
	,{name : 'bean.code',mapping : 'code',type : 'string'}
	,{name : 'bean.name',mapping : 'name',type : 'string'}
	,{name : 'bean.balance',mapping : 'balance',type : 'float',useNull : true}
	,{name : 'bean.balanceA',mapping : 'balanceA',type : 'float',useNull : true}
	,{name : 'bean.balanceB',mapping : 'balanceB',type : 'float',useNull : true}
	,{name : 'bean.balanceC',mapping : 'balanceC',type : 'float',useNull : true}
	,{name : 'bean.balanceD',mapping : 'balanceD',type : 'float',useNull : true}
	]
});