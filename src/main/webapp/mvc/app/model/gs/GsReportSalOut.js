Ext.define('mvc.model.gs.GsReportSalOut',{
extend : 'Ext.data.Model',
idProperty : 'bean.pkey',
proxy : {
	type : 'ajax',
	url : base_path+'/gs_GsReportSalOut_load'
},
fields : [{name : 'bean.code',mapping : 'code',type : 'string'}
	,{name : 'bean.outTime',mapping : 'outTime',type : 'date',dateFormat : 'Y-m-d H:i:s'}
	,{name : 'bean.goodsCode',mapping : 'goodsCode',type : 'string'}
	,{name : 'bean.name',mapping : 'name',type : 'string'}
	,{name : 'bean.spec',mapping : 'spec',type : 'string'}
	,{name : 'bean.uom',mapping : 'uom',type : 'string',outkey : true}
	,{name : 'bean.qty',mapping : 'qty',type : 'float',useNull : true}
	]
});