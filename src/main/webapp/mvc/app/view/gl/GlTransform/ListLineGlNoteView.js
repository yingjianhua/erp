Ext.define('mvc.view.gl.GlTransform.ListLineGlNoteView',{
extend : 'mvc.tools.RowexpanderGridForNote',
disableSelection : false,
loadMask : true,
multiSelect : true,
selModel : {selType : 'checkboxmodel'},
initComponent : function(){
		this.columns = [{
			text : '分户账',
			width : '14%',
			dataIndex : 'bean.journal',
			sortable : true,
			renderer : mvc.Tools.beanRenderer()
		}, {
			text : '借贷标志',
			width : '10%',
			dataIndex : 'bean.direct',
			sortable : true,
			renderer : mvc.Tools.optRenderer('gl', 'Gl', 'ODirect')
		}, {
			text : '金额',
			width : '14%',
			dataIndex : 'bean.amt',
			sortable : true,
			renderer : mvc.Tools.numberRenderer(),
			align : 'right'
		}, {
			text : '票据号',
			width : '14%',
			dataIndex : 'bean.docNum',
			sortable : true
		}, {
			text : '摘要',
			width : '14%',
			dataIndex : 'bean.summary',
			sortable : true
		}, {
			text : '扩展属性表',
			width : '14%',
			dataIndex : 'bean.extTable',
			sortable : true,
			renderer : mvc.Tools.beanRenderer()
		}, {
			text : '备注',
			width : '14%',
			dataIndex : 'bean.rem',
			sortable : true
		}, {
			text : '扩展属性',
			dataIndex : 'extContent',
			expandCol : true,
			hidden : true
		}];
		this.store=Ext.create('mvc.store.gl.GlNote');
		this.store.remoteFilter = true;
		this.store.proxy.url = base_path + '/gl_GlNote_listByTb';
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