Ext.define('mvc.view.sal.SalSale.TriggerList',{
extend : 'mvc.tools.RowexpanderGrid',
disableSelection : false,
loadMask : true,
selModel : {selType : 'checkboxmodel'},
oneTdCount : 4,
searchField : null,
initComponent : function(){
this.columns = [{text : '单据号',width : 120,dataIndex : 'bean.code',sortable : true}
	,{text : '状态',width : 100,dataIndex : 'bean.status',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OBillStatus')}
	,{text : '核算单元',width : 100,dataIndex : 'bean.cell',sortable : true,renderer : mvc.Tools.beanRenderer(),expandCol : true,hidden : true}
	,{text : '部门',width : 100,dataIndex : 'bean.dept',sortable : true,renderer : mvc.Tools.beanRenderer(),expandCol : true,hidden : true}
	,{text : '建档员',width : 100,dataIndex : 'bean.createdBy',sortable : true,renderer : mvc.Tools.beanRenderer(),expandCol : true,hidden : true}
	,{text : '建档时间',width : 140,dataIndex : 'bean.createdTime',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s'),expandCol : true,hidden : true}
	,{text : '审核员',width : 100,dataIndex : 'bean.apprBy',sortable : true,renderer : mvc.Tools.beanRenderer(),expandCol : true,hidden : true}
	,{text : '审核时间',width : 140,dataIndex : 'bean.apprTime',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s'),expandCol : true,hidden : true}
	,{text : '记账员',width : 100,dataIndex : 'bean.tallyBy',sortable : true,renderer : mvc.Tools.beanRenderer(),expandCol : true,hidden : true}
	,{text : '记账时间',width : 140,dataIndex : 'bean.tallyTime',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s'),expandCol : true,hidden : true}
	,{text : '备注',width : 100,dataIndex : 'bean.rem',sortable : true,expandCol : true,hidden : true}
	,{text : '客户',width : 100,dataIndex : 'bean.cust',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '客户名称',width : 100,dataIndex : 'bean.custName',sortable : true}
	,{text : '销售订单',width : 100,dataIndex : 'bean.ord',sortable : true,renderer : mvc.Tools.beanRenderer(),expandCol : true,hidden : true}
	,{text : '仓库',width : 100,dataIndex : 'bean.warehouse',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '金额',width : 100,dataIndex : 'bean.amt',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '现付金额',width : 100,dataIndex : 'bean.amtPay',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '冲减订金金额',width : 100,dataIndex : 'bean.amtOrd',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right',expandCol : true,hidden : true}
	,{text : '挂账金额',width : 100,dataIndex : 'bean.amtRec',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '挂账回款金额',width : 100,dataIndex : 'bean.amtRecBack',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '费用合计',width : 100,dataIndex : 'bean.amtCost',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right',expandCol : true,hidden : true}
	,{text : '业务员',width : 100,dataIndex : 'bean.operator',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '发货人',width : 100,dataIndex : 'bean.shipBy',sortable : true,renderer : mvc.Tools.beanRenderer(),expandCol : true,hidden : true}
	,{text : '出库状态',width : 100,dataIndex : 'bean.inoutStatus',sortable : true,renderer : mvc.Tools.optRenderer('sal','Sal','OInoutStatus'),expandCol : true,hidden : true}
	,{text : '开票标准',width : 100,dataIndex : 'bean.billFlag',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OBillFlag')}
	,{text : '运输方式',width : 100,dataIndex : 'bean.shipingMode',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OShipingMode')}
	,{text : '计划发货时间',width : 140,dataIndex : 'ship.timeShipPlan',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s'),expandCol : true,hidden : true}
	,{text : '预计到货时间',width : 140,dataIndex : 'ship.timeArrPlan',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s'),expandCol : true,hidden : true}
	,{text : '收货人名称',width : 100,dataIndex : 'ship.name',sortable : true}
	,{text : '收货地址',width : 100,dataIndex : 'ship.addr',sortable : true,expandCol : true,hidden : true}
	,{text : '收货人手机',width : 100,dataIndex : 'ship.mobile',sortable : true,expandCol : true,hidden : true}
	,{text : '收货人电话',width : 100,dataIndex : 'ship.tel',sortable : true,expandCol : true,hidden : true}
	,{text : '机构',width : 100,dataIndex : 'bean.org',sortable : true,renderer : mvc.Tools.beanRenderer()}
	];
		this.store=Ext.create('mvc.store.sal.SalSale');this.dockedItems = [{
		dock : 'top',
		xtype : 'toolbar',
		items : ["搜索：",{
				xtype : 'combo',
				mode : 'local',
				valueField : 'value',
				triggerAction : 'all',
				forceSelection : true,
				typeAhead : true,
				editable : false,
				width : 100,
				value : 'code',
				store:	Ext.create('Ext.data.Store',{
							fields :  ['value', 'text'],
							data : [{value : 'code',text : '单据号'}
								]
						}),
				listeners : {
					scope : this,
					change : function(field,newv,oldv,opts) {	this.searchField.flds = newv; }
				}
			},'=',{
				width : 250,
				xtype : 'irilleSearchfield',
				flds : 'code',
				store : this.store
			},'->',{
				xtype : 'button',
				text : '确定',
				scope : this,
				iconCls : 'win-ok-icon',
				handler : this.onTrigger
			}]
	},{
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
		this.callParent(arguments);
		this.searchField = this.down('irilleSearchfield');
},
listeners : {
	itemdblclick : function(){
			this.onTrigger();	
}
},
onTrigger : function(){
			var selection = this.getView().getSelectionModel().getSelection()[0];
		if (selection){
			this.fireEvent('trigger', selection.get('bean.pkey') + bean_split + selection.get('bean.code'), null);
		}
}
});