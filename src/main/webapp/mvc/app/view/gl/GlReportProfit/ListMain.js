Ext.define('mvc.view.gl.GlReportProfit.ListMain',{
extend : 'Ext.grid.Panel',
disableSelection : false,
loadMask : true,
multiSelect : true,
roles : '',
selModel : {selType : 'checkboxmodel'},
initComponent : function(){
this.columns =[{text : '机构',width : 100.0,dataIndex : 'bean.org',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '起始日期',width : 85.0,dataIndex : 'bean.beginDate',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d')}
	,{text : '结束日期',width : 85.0,dataIndex : 'bean.endDate',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d')}
	];
		this.store=Ext.create('mvc.store.gl.GlReportProfit');
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
		this.callParent(arguments);}
});