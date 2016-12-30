Ext.define('mvc.model.gl.GlJlAmtLine', {
	extend : 'Ext.data.Model',
	idProperty : 'bean.pkey',
	proxy : {
		type : 'ajax',
		url : base_path+'/gl_GlJlAmtLine_load'
	},
	fields : [
		{name : 'bean.pkey' , mapping : 'pkey' , type : 'int', useNull : true},
		{name : 'bean.mainPkey' , mapping : 'mainPkey' , type : 'string', outkey : true},
		{name : 'bean.balance' , mapping : 'balance' , type : 'float', useNull : true},
		{name : 'bean.tallyDate' , mapping : 'tallyDate' , type : 'date'}
	]
});
