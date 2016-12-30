Ext.define('mvc.view.gl.GlReport.ListLineGlReportLine',{
extend : 'Ext.grid.Panel',
disableSelection : false,
loadMask : true,
multiSelect : true,
selModel : {selType : 'checkboxmodel'},
initComponent : function(){
		this.columns = [{text : '报表',width : 100.0,dataIndex : 'bean.report',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '科目',width : 100.0,dataIndex : 'bean.account',sortable : true}
	,{text : '借贷标志',width : 100.0,dataIndex : 'bean.direct',sortable : true,renderer : mvc.Tools.optRenderer('gl','Gl','ODirect')}
	,{text : '加减类型',width : 100.0,dataIndex : 'bean.symbolType',sortable : true,renderer : mvc.Tools.optRenderer('gl','Gl','OSymbolType')}
	];
		this.store=Ext.create('mvc.store.gl.GlReportLine');
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
		this.dockedItems=[{
		dock : 'top',
		xtype : 'toolbar',
		xtype : 'pagingtoolbar',
		store : this.store,
		dock : 'bottom',
		displayInfo : true,
		displayMsg : '显示 {0} - {1} 条，共计 {2} 条',
		emptyMsg : '没有数据',
		items : [{
				xtype : Ext.create('mvc.tools.ComboxPaging',{myList : this})
			}]
	}];
		this.callParent(arguments);}
});