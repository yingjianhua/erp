Ext.define('mvc.view.gl.GlNoteWriteoff.ListLineGlNoteWriteoffLine',{
extend : 'Ext.grid.Panel',
disableSelection : false,
loadMask : true,
multiSelect : true,
selModel : {selType : 'checkboxmodel'},
initComponent : function(){
		this.columns = [{text : '编号',width : 100,dataIndex : 'bean.pkey',sortable : true}
	,{text : '记账日期',width : 100,dataIndex : 'bean.tallyDate',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d')}
	];
		this.store=Ext.create('mvc.store.gl.GlNoteWriteoffLine');
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