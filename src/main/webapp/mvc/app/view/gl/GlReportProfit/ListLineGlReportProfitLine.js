Ext.define('mvc.view.gl.GlReportProfit.ListLineGlReportProfitLine',{
extend : 'Ext.grid.Panel',
disableSelection : false,
loadMask : true,
multiSelect : true,
initComponent : function(){
		this.columns = [{text : '项目',width : '42%',dataIndex : 'bean.keyName',sortable : false}
	,{text : '行次',width : 50.0,dataIndex : 'bean.keyValue',sortable : false}
	,{text : '本月数',width : '23%',dataIndex : 'bean.amtBegin',sortable : false,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '本年累计数',width : '23%',dataIndex : 'bean.amtEnd',sortable : false,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	];
		this.store=Ext.create('mvc.store.gl.GlReportProfitLine');
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
		this.callParent(arguments);}
});