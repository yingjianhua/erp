Ext.define('mvc.view.pur.PurOrder.RevTriggerList',{
	extend : 'Ext.grid.Panel',
	disableSelection : false,
	loadMask : true,
	selModel : {selType : 'checkboxmodel'},
	viewConfig : {
		trackOver : false,
		stripeRows : true
	},
	searchField : null,
	initComponent : function(){
		this.columns = [{text : '单据号',width : 140,dataIndex : 'bean.code',sortable : true}
		,{text : '状态',width : 60,dataIndex : 'bean.status',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OBillStatus')}
		,{text : '供应商',width : 100,dataIndex : 'bean.supplier',sortable : true,renderer : mvc.Tools.beanRenderer(),md : 'sys',mn : 'SysSupplier'}
		,{text : '供应商名称',width : 100,dataIndex : 'bean.supname',sortable : true}
		,{text : '仓库',width : 100,dataIndex : 'bean.warehouse',sortable : true,renderer : mvc.Tools.beanRenderer(),md : 'gs',mn : 'GsWarehouse'}
		,{text : '金额',width : 100,dataIndex : 'bean.amt',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
		,{text : '订金',width : 100,dataIndex : 'bean.earnest',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
		,{text : '采购员',width : 75,dataIndex : 'bean.buyer',sortable : true,renderer : mvc.Tools.beanRenderer(),md : 'sys',mn : 'SysUser'}
		,{text : '开票标准',width : 100,dataIndex : 'bean.billFlag',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OBillFlag')}
		,{text : '运输方式',width : 100,dataIndex : 'bean.shipingMode',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OShipingMode')}
		,{text : '发货人名称',width : 100,dataIndex : 'ship.name',sortable : true}
		,{text : '机构',width : 100,dataIndex : 'bean.org',sortable : true,renderer : mvc.Tools.beanRenderer(),md : 'sys',mn : 'SysOrg'}
		];
		this.store=Ext.create('mvc.store.pur.PurOrder');
		this.store.proxy.url = base_path + '/pur_PurOrder_listPur';
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
		this.store.load();
		this.dockedItems=[{
			dock : 'top',
			xtype : 'toolbar',
			items : ['->',{
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
			items : [{xtype : Ext.create('mvc.tools.ComboxPaging',{myList : this})}]
		}];
		this.callParent(arguments);
		this.searchField = this.down('irilleSearchfield');
	},
	listeners : {
		itemdblclick : function() {
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
