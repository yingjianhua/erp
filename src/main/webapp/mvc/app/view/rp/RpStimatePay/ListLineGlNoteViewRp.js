Ext.define('mvc.view.rp.RpStimatePay.ListLineGlNoteViewRp',{
extend : 'Ext.grid.Panel',
disableSelection : false,
loadMask : true,
multiSelect : true,
viewConfig : {enableTextSelection : true},
initComponent : function(){
		this.columns = [{text : '出纳日记账',width : 100,dataIndex : 'bean.journal',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'rp',mn : 'view.rp.RpJournal.List'}
	,{text : '借贷标志',width : 70,dataIndex : 'bean.direct',sortable : true,renderer : mvc.Tools.optRenderer('gl','Gl','ODirect')}
	,{text : '状态',width : 70,dataIndex : 'bean.status',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OBillStatus')}
	,{text : '金额',width : 100,dataIndex : 'bean.amt',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '票据号',width : 100,dataIndex : 'bean.docNum',sortable : true}
	,{text : '摘要',width : 100,dataIndex : 'bean.summary',sortable : true}
	,{text : '付款方式',width : 100,dataIndex : 'bean.type',sortable : true,renderer : mvc.Tools.optRenderer('rp','Rp','OPayType')}
	,{text : '付款时间',width : 140,dataIndex : 'bean.typeTime',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s')}
	,{text : '付款说明',width : 150,dataIndex : 'bean.typeDes',sortable : true}
	,{text : '出纳',width : 75,dataIndex : 'bean.cashier',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'sys',mn : 'view.sys.SysUser.List'}
	,{text : '建档员',width : 75,dataIndex : 'bean.createdBy',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'sys',mn : 'view.sys.SysUser.List'}
	,{text : '建档时间',width : 140,dataIndex : 'bean.createdTime',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s')}
	,{text : '审核员',width : 75,dataIndex : 'bean.apprBy',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'sys',mn : 'view.sys.SysUser.List'}
	,{text : '审核时间',width : 140,dataIndex : 'bean.apprTime',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s')}
	,{text : '备注',width : 100,dataIndex : 'bean.rem',sortable : true}
	];
		this.store=Ext.create('mvc.store.gl.GlNoteViewRp');
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