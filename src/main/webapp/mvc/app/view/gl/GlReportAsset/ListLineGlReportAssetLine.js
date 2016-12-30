Ext.define('mvc.view.gl.GlReportAsset.ListLineGlReportAssetLine',{
extend : 'Ext.grid.Panel',
disableSelection : false,
loadMask : true,
multiSelect : true,
initComponent : function(){
		this.columns = [{text : '项目',width : 135.0,dataIndex : 'bean.keyName',sortable : false}
	,{text : '行次',width : 50.0,dataIndex : 'bean.keyValue',sortable : false}
	,{text : '期初数',width : 100.0,dataIndex : 'bean.amtBegin',sortable : false,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '期末数',width : 100.0,dataIndex : 'bean.amtEnd',sortable : false,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	];
		this.store=Ext.create('mvc.store.gl.GlReportAssetLine');
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
		this.callParent(arguments);}
});