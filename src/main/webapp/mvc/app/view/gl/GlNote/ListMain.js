Ext.define('mvc.view.gl.GlNote.ListMain',{
extend : 'Ext.grid.Panel',
width : '100%',
disableSelection : false,
loadMask : true,
multiSelect : true,
roles : '',
selModel : {selType : 'checkboxmodel'},
initComponent : function(){
this.columns =[{text : '凭证',width : 80,dataIndex : 'bean.bill',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '扩展属性表',width : 100,dataIndex : 'bean.extTable',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '分户账',width : 100,dataIndex : 'bean.journal',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '借贷标志',width : 100,dataIndex : 'bean.direct',sortable : true,renderer : mvc.Tools.optRenderer('gl','Gl','ODirect')}
	,{text : '状态',width : 100,dataIndex : 'bean.status',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OBillStatus')}
	,{text : '金额',width : 100,dataIndex : 'bean.amt',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '票据号',width : 100,dataIndex : 'bean.docNum',sortable : true}
	,{text : '摘要',width : 100,dataIndex : 'bean.summary',sortable : true}
	,{text : '核算单元',width : 100,dataIndex : 'bean.cell',sortable : true,renderer : mvc.Tools.beanRenderer(), expandCol : true,hidden : true}
	,{text : '部门',width : 100,dataIndex : 'bean.dept',sortable : true,renderer : mvc.Tools.beanRenderer(), expandCol : true,hidden : true}
	,{text : '机构',width : 100,dataIndex : 'bean.org',sortable : true,renderer : mvc.Tools.beanRenderer(), expandCol : true,hidden : true}
	,{text : '建档员',width : 100,dataIndex : 'bean.createdBy',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '建档时间',width : 140,dataIndex : 'bean.createdTime',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s')}
	,{text : '审核员',width : 100,dataIndex : 'bean.apprBy',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '审核时间',width : 140,dataIndex : 'bean.apprTime',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s')}
	,{text : '备注',width : 100,dataIndex : 'bean.rem',sortable : true}
	,{text : '是否自动产生',width : 100,dataIndex : 'bean.isAuto',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OYn')}
	];
		this.store=Ext.create('mvc.store.gl.GlNote');
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
		this.dockedItems=[{
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