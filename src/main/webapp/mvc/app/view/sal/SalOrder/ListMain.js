Ext.define('mvc.view.sal.SalOrder.ListMain',{
extend : 'mvc.tools.RowexpanderGrid',
disableSelection : false,
loadMask : true,
multiSelect : true,
roles : '',
selModel : {selType : 'checkboxmodel'},
initComponent : function(){
this.columns =[{text : '单据号',width : 135,dataIndex : 'bean.code',sortable : true}
	,{text : '状态',width : 60,dataIndex : 'bean.status',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OBillStatus')}
	,{text : '核算单元',width : 100,dataIndex : 'bean.cell',sortable : true,renderer : mvc.Tools.beanRendererHref(),expandCol : true,hidden : true,md : 'sys',mn : 'view.sys.SysCell.List'}
	,{text : '部门',width : 100,dataIndex : 'bean.dept',sortable : true,renderer : mvc.Tools.beanRendererHref(),expandCol : true,hidden : true,md : 'sys',mn : 'view.sys.SysDept.List'}
	,{text : '建档员',width : 75,dataIndex : 'bean.createdBy',sortable : true,renderer : mvc.Tools.beanRendererHref(),expandCol : true,hidden : true,md : 'sys',mn : 'view.sys.SysUser.List'}
	,{text : '建档时间',width : 140,dataIndex : 'bean.createdTime',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s'),expandCol : true,hidden : true}
	,{text : '审核员',width : 75,dataIndex : 'bean.apprBy',sortable : true,renderer : mvc.Tools.beanRendererHref(),expandCol : true,hidden : true,md : 'sys',mn : 'view.sys.SysUser.List'}
	,{text : '审核时间',width : 140,dataIndex : 'bean.apprTime',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s'),expandCol : true,hidden : true}
	,{text : '记账员',width : 75,dataIndex : 'bean.tallyBy',sortable : true,renderer : mvc.Tools.beanRendererHref(),expandCol : true,hidden : true,md : 'sys',mn : 'view.sys.SysUser.List'}
	,{text : '记账日期',width : 100,dataIndex : 'bean.tallyTime',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d'),expandCol : true,hidden : true}
	,{text : '备注',width : 100,dataIndex : 'bean.rem',sortable : true,expandCol : true,hidden : true}
	,{text : '客户',width : 100,dataIndex : 'bean.cust',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'sys',mn : 'view.sys.SysCustom.List'}
	,{text : '客户名称',width : 100,dataIndex : 'bean.custName',sortable : true}
	,{text : '销售类型',width : 100,dataIndex : 'bean.salType',sortable : true,renderer : mvc.Tools.optRenderer('sal','Sal','OSalType'),expandCol : true,hidden : true}
	,{text : '金额',width : 100,dataIndex : 'bean.amt',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '费用合计',width : 100,dataIndex : 'bean.amtCost',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right',expandCol : true,hidden : true}
	,{text : '订单类型',width : 100,dataIndex : 'bean.speType',sortable : true,renderer : mvc.Tools.optRenderer('pur','Pur','OSpeType'),expandCol : true,hidden : true}
	,{text : '订金',width : 100,dataIndex : 'bean.earnest',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '业务员',width : 75,dataIndex : 'bean.operator',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'sys',mn : 'view.sys.SysUser.List'}
	,{text : '开单状态',width : 100,dataIndex : 'bean.ordStatus',sortable : true,renderer : mvc.Tools.optRenderer('sal','Sal','OOrderStatus'),expandCol : true,hidden : true}
	,{text : '开票标准',width : 100,dataIndex : 'bean.billFlag',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OBillFlag')}
	,{text : '运输方式',width : 100,dataIndex : 'bean.shipingMode',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OShipingMode')}
	,{text : '计划发货时间',width : 140,dataIndex : 'ship.timeShipPlan',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s'),expandCol : true,hidden : true}
	,{text : '预计到货时间',width : 140,dataIndex : 'ship.timeArrPlan',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s'),expandCol : true,hidden : true}
	,{text : '收货人名称',width : 100,dataIndex : 'ship.name',sortable : true}
	,{text : '收货地址',width : 100,dataIndex : 'ship.addr',sortable : true,expandCol : true,hidden : true}
	,{text : '收货人手机',width : 100,dataIndex : 'ship.mobile',sortable : true,expandCol : true,hidden : true}
	,{text : '收货人电话',width : 100,dataIndex : 'ship.tel',sortable : true,expandCol : true,hidden : true}
	,{text : '机构',width : 100,dataIndex : 'bean.org',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'sys',mn : 'view.sys.SysOrg.List'}
	];
		this.store=Ext.create('mvc.store.sal.SalOrder');
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
		this.callParent(arguments);},
onUpdateRecord : function(form, data){
		var selection = this.getView().getSelectionModel().getSelection()[0];
		var bean = Ext.create('mvc.model.sal.SalOrder', data);
		Ext.apply(selection.data,bean.data);
		selection.commit();
		this.getSelectionModel().deselectAll();
		this.getView().select(selection);
		Ext.example.msg(msg_title, msg_text);
},
onUpdRow : function(grid, rowIndex){
		var selection = this.getStore().getAt(rowIndex);
		this.getView().deselect(this.getView().getSelectionModel().getSelection());
		this.getView().select(selection);
		this.onUpdWin(selection);
},
onUpdWin : function(selection){
		if (selection){
			var win = Ext.create('mvc.view.sal.SalOrder.Win',{
				title : this.title+'>修改',
				insFlag : false
			});
			win.on('create',this.onUpdateRecord,this);
			win.show();
			win.setActiveRecord(selection);
		}
},
onDelRow : function(grid, rowIndex){
		var me = this;
		Ext.MessageBox.confirm(msg_confirm_title, msg_confirm_msg,
			function(btn) {
				if (btn != 'yes')
					return;
				var row = me.getStore().getAt(rowIndex);
				Ext.Ajax.request({
					url : '/sal_SalOrder_del?pkey='+row.get('bean.pkey')+'&rowVersion='+row.get(BEAN_VERSION),
					success : function (response, options) {
						var result = Ext.decode(response.responseText);
						if (result.success){
							me.getStore().removeAt(rowIndex);
							Ext.example.msg(msg_title, msg_del);
						}else{
							Ext.MessageBox.show({ 
								title : msg_title,
								msg : result.msg,
								buttons : Ext.MessageBox.OK,
								icon : Ext.MessageBox.ERROR
							});
						}
					}
				});
			}
		);
}
});