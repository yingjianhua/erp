Ext.define('mvc.view.rp.RpWorkBox.ListLineRpWorkBoxGoods',{
extend : 'Ext.grid.Panel',
disableSelection : false,
loadMask : true,
multiSelect : true,
viewConfig : {enableTextSelection : true},
initComponent : function(){
		this.columns = [{text : '物品',width : 80,dataIndex : 'bean.boxGoods',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '物品名称',width : 100,dataIndex : 'bean.name',sortable : true}
	,{text : '当前保管人',width : 75,dataIndex : 'bean.userSys',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'sys',mn : 'view.sys.SysUser.List'}
	,{text : '入箱日期',width : 100,dataIndex : 'bean.date',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d')}
	,{text : '备注',width : 100,dataIndex : 'bean.rem',sortable : true}
	];
		this.store=Ext.create('mvc.store.rp.RpWorkBoxGoods');
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