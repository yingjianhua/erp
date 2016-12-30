Ext.define('mvc.view.rp.RpJournal.ListLineRpJournalLine',{
extend : 'Ext.grid.Panel',
disableSelection : false,
loadMask : true,
multiSelect : true,
viewConfig : {enableTextSelection : true},
initComponent : function(){
		this.columns = [{text : '机构',width : 100,dataIndex : 'bean.org',sortable : true,renderer : mvc.Tools.beanRendererHref(),hidden : true,md : 'sys',mn : 'view.sys.SysOrg.List'}
	,{text : '核算单元',width : 100,dataIndex : 'bean.cell',sortable : true,renderer : mvc.Tools.beanRendererHref(),hidden : true,md : 'sys',mn : 'view.sys.SysCell.List'}
	,{text : '出纳日记账',width : 100,dataIndex : 'bean.journal',sortable : true,renderer : mvc.Tools.beanRendererHref(),hidden : true,md : 'rp',mn : 'view.rp.RpJournal.List'}
	,{text : '凭证',width : 80,dataIndex : 'bean.bill',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '交易类型',width : 100,dataIndex : 'bean.type',sortable : true}
	,{text : '金额',width : 100,dataIndex : 'bean.amt',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '收付标志',width : 100,dataIndex : 'bean.dC',sortable : true,renderer : mvc.Tools.optRenderer('rp','RpJournalLine','ODC')}
	,{text : '余额',width : 100,dataIndex : 'bean.balance',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '票据号',width : 100,dataIndex : 'bean.doc',sortable : true}
	,{text : '摘要',width : 190,dataIndex : 'bean.summary',sortable : true}
	,{text : '出纳',width : 75,dataIndex : 'bean.cashier',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'sys',mn : 'view.sys.SysUser.List'}
	,{text : '建档时间',width : 140,dataIndex : 'bean.createdTime',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s')}
	,{text : '凭条',width : 100,dataIndex : 'bean.note',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'gl',mn : 'view.gl.GlNote.List'}
	];
		this.store=Ext.create('mvc.store.rp.RpJournalLine');
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