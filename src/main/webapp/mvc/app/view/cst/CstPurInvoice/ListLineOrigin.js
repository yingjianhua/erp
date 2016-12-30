Ext.define('mvc.view.cst.CstPurInvoice.ListLineOrigin',{
extend : 'Ext.grid.Panel',
disableSelection : false,
loadMask : true,
multiSelect : true,
initComponent : function(){
		this.columns = [{text : '来源单据',width : 120,dataIndex : 'bean.linkForm',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '单据号',width : 150,dataIndex : 'bean.linkFormNum',sortable : true}
	];
		this.store=Ext.create('mvc.store.frm.FrmLink');
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
		items : [{
				xtype : Ext.create('mvc.tools.ComboxPaging',{myList : this})
			}]
	}];
		this.callParent(arguments);}
});