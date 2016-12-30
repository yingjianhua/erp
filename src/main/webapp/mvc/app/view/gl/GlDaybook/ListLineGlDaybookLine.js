Ext.define('mvc.view.gl.GlDaybook.ListLineGlDaybookLine',{
extend : 'Ext.grid.Panel',
disableSelection : false,
loadMask : true,
multiSelect : true,
viewConfig : {enableTextSelection : true},
initComponent : function(){
		this.columns = [{text : '分户账',width : 250,dataIndex : 'bean.journal',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'gl',mn : 'view.gl.GlJournal.List'}
	,{text : '入账标志',width : 100,dataIndex : 'bean.tallyState',sortable : true,renderer : mvc.Tools.optRenderer('gl','Gl','OTallyState')}
	,{text : '借贷标志',width : 75,dataIndex : 'bean.direct',sortable : true,renderer : mvc.Tools.optRenderer('gl','Gl','ODirect')}
	,{text : '金额',width : 100,dataIndex : 'bean.amt',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '币种',width : 75,dataIndex : 'bean.currency',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OCurrency')}
	,{text : '摘要',width : 210,dataIndex : 'bean.summary',sortable : true}
	,{text : '表内标志',width : 75,dataIndex : 'bean.inFlag',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OYn')}
	,{text : '票据号',width : 150,dataIndex : 'bean.docNum',sortable : true}
	,{text : '核算单元',width : 100,dataIndex : 'bean.cell',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'sys',mn : 'view.sys.SysCell.List'}
	];
		this.store=Ext.create('mvc.store.gl.GlDaybookLine');
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
		this.on({cellclick:mvc.Tools.onCellclick});
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