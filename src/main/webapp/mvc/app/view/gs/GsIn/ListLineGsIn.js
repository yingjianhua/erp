Ext.define('mvc.view.gs.GsIn.ListLineGsIn',{
	extend : 'Ext.grid.Panel',
	disableSelection : false,
	loadMask : true,
	multiSelect : true,
	selModel : {selType : 'checkboxmodel'},
	initComponent : function(){
		this.columns = [ 
			{text : '单据号', width : 100, dataIndex : 'bean.code', sortable : true},
			{text : '状态', width : 100, dataIndex : 'bean.status', sortable : true, renderer : mvc.Tools.optRenderer('sys','Sys','OBillStatus')},
			{text : '机构', width : 100, dataIndex : 'bean.org', sortable : true, renderer : mvc.Tools.beanRenderer()},
			{text : '部门', width : 100, dataIndex : 'bean.dept', sortable : true, renderer : mvc.Tools.beanRenderer()},
			{text : '建档员', width : 100, dataIndex : 'bean.createdBy', sortable : true, renderer : mvc.Tools.beanRenderer()},
			{text : '建档时间', width : 140, dataIndex : 'bean.createdTime', sortable : true, renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s')},
			{text : '审核员', width : 100, dataIndex : 'bean.apprBy', sortable : true, renderer : mvc.Tools.beanRenderer()},
			{text : '审核时间', width : 140, dataIndex : 'bean.apprTime', sortable : true, renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s')},
			{text : '仓库', width : 100, dataIndex : 'bean.warehouse', sortable : true, renderer : mvc.Tools.beanRenderer()},
			{text : '名称', width : 100, dataIndex : 'bean.name', sortable : true},
			{text : '源单据', width : 100, dataIndex : 'bean.origForm', sortable : true, renderer : mvc.Tools.beanRenderer()},
			{text : '源单据号', width : 100, dataIndex : 'bean.origFormNum', sortable : true},
			{text : '理货员', width : 100, dataIndex : 'bean.operator', sortable : true, renderer : mvc.Tools.beanRenderer()},
			{text : '检验员', width : 100, dataIndex : 'bean.checker', sortable : true, renderer : mvc.Tools.beanRenderer()},
			{text : '实际入库时间', width : 140, dataIndex : 'bean.inTime', sortable : true, renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s')},
			{text : '备注', width : 100, dataIndex : 'bean.rem', sortable : true}
		];
		this.store=Ext.create('mvc.store.gs.GsIn');
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
			items : [{xtype : Ext.create('mvc.tools.ComboxPaging',{myList : this})}]
		}];
		this.callParent(arguments);
	}
});
