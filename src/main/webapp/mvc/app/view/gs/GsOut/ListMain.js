Ext.define('mvc.view.gs.GsOut.ListMain',{
extend : 'mvc.tools.RowexpanderGrid',
disableSelection : false,
loadMask : true,
multiSelect : true,
roles : '',
selModel : {selType : 'checkboxmodel'},
initComponent : function(){
this.columns =[{text : '单据号',width : 135,dataIndex : 'bean.code',sortable : true}
	,{text : '仓库',width : 100,dataIndex : 'bean.warehouse',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'gs',mn : 'view.gs.GsWarehouse.List'}
	,{text : '名称',width : 100,dataIndex : 'bean.gsName',sortable : true}
	,{text : '源单据',width : 80,dataIndex : 'bean.origForm',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '源单据号',width : 135,dataIndex : 'bean.origFormNum',sortable : true}
	,{text : '理货员',width : 75,dataIndex : 'bean.operator',sortable : true,renderer : mvc.Tools.beanRendererHref(),expandCol : true,hidden : true,md : 'sys',mn : 'view.sys.SysUser.List'}
	,{text : '检验员',width : 75,dataIndex : 'bean.checker',sortable : true,renderer : mvc.Tools.beanRendererHref(),expandCol : true,hidden : true,md : 'sys',mn : 'view.sys.SysUser.List'}
	,{text : '实际出库时间',width : 140,dataIndex : 'bean.outTime',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s')}
	,{text : '运输方式',width : 100,dataIndex : 'bean.shipingMode',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OShipingMode')}
	,{text : '计划发货时间',width : 140,dataIndex : 'ship.timeShipPlan',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s'),expandCol : true,hidden : true}
	,{text : '预计到货时间',width : 140,dataIndex : 'ship.timeArrPlan',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s'),expandCol : true,hidden : true}
	,{text : '收货人名称',width : 100,dataIndex : 'ship.name',sortable : true}
	,{text : '收货地址',width : 100,dataIndex : 'ship.addr',sortable : true,expandCol : true,hidden : true}
	,{text : '收货人手机',width : 100,dataIndex : 'ship.mobile',sortable : true,expandCol : true,hidden : true}
	,{text : '收货人电话',width : 100,dataIndex : 'ship.tel',sortable : true,expandCol : true,hidden : true}
	,{text : '状态',width : 60,dataIndex : 'bean.status',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OBillStatus')}
	,{text : '机构',width : 100,dataIndex : 'bean.org',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'sys',mn : 'view.sys.SysOrg.List'}
	,{text : '部门',width : 100,dataIndex : 'bean.dept',sortable : true,renderer : mvc.Tools.beanRendererHref(),expandCol : true,hidden : true,md : 'sys',mn : 'view.sys.SysDept.List'}
	,{text : '建档员',width : 75,dataIndex : 'bean.createdBy',sortable : true,renderer : mvc.Tools.beanRendererHref(),expandCol : true,hidden : true,md : 'sys',mn : 'view.sys.SysUser.List'}
	,{text : '建档时间',width : 140,dataIndex : 'bean.createdTime',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s'),expandCol : true,hidden : true}
	,{text : '审核员',width : 75,dataIndex : 'bean.apprBy',sortable : true,renderer : mvc.Tools.beanRendererHref(),expandCol : true,hidden : true,md : 'sys',mn : 'view.sys.SysUser.List'}
	,{text : '审核时间',width : 140,dataIndex : 'bean.apprTime',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s'),expandCol : true,hidden : true}
	,{text : '备注',width : 100,dataIndex : 'bean.rem',sortable : true,expandCol : true,hidden : true}
	];
		this.store=Ext.create('mvc.store.gs.GsOut');
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
		this.on({cellclick:mvc.Tools.onCellclick});
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