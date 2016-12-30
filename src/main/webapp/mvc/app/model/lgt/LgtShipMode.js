Ext.define('mvc.model.lgt.LgtShipMode', {
	extend : 'Ext.data.Model',
	idProperty : 'bean.pkey',
	proxy : {
		type : 'ajax',
		url : base_path+'/lgt_LgtShipMode_load'
	},
	fields : [
		{name : 'bean.pkey' , mapping : 'pkey' , type : 'int', useNull : true},
		{name : 'bean.code' , mapping : 'code' , type : 'string'},
		{name : 'bean.name' , mapping : 'name' , type : 'string'},
		{name : 'bean.org' , mapping : 'org' , type : 'string', outkey : true}
	]
});
