Ext.define('mvc.model.gl.GlRate',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/gl_GlRate_load'
},
fields : [{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
	,{name : 'bean.rateType',mapping : 'rateType',type : 'string',outkey : true}
	,{name : 'bean.bdate',mapping : 'bdate',type : 'date'}
	,{name : 'bean.baseRate',mapping : 'baseRate',type : 'float',useNull : true}
	,{name : 'bean.floatUp',mapping : 'floatUp',type : 'float',useNull : true}
	,{name : 'bean.floatDown',mapping : 'floatDown',type : 'float',useNull : true}
	,{name : 'bean.enabled',mapping : 'enabled',type : 'int',useNull : true}
	,{name : 'bean.interestRate',mapping : 'interestRate',type : 'float',useNull : true}
	,{name : 'bean.irFloatUp',mapping : 'irFloatUp',type : 'float',useNull : true}
	,{name : 'bean.irFloatDown',mapping : 'irFloatDown',type : 'float',useNull : true}
	,{name : 'bean.rem',mapping : 'rem',type : 'string'}
	,{name : 'bean.createdBy',mapping : 'createdBy',type : 'string',outkey : true}
	,{name : 'bean.createdTime',mapping : 'createdTime',type : 'date',dateFormat : 'Y-m-d H:i:s'}
	]
});