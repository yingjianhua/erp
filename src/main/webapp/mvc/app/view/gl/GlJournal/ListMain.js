Ext.define('mvc.view.gl.GlJournal.ListMain',{
extend : 'mvc.tools.RowexpanderGrid',
disableSelection : false,
loadMask : true,
multiSelect : true,
roles : '',
selModel : {selType : 'checkboxmodel'},
initComponent : function(){
this.columns =[{text : '代码',width : 130,dataIndex : 'bean.code',sortable : true}
	,{text : '名称',width : 250,dataIndex : 'bean.name',sortable : true}
	,{text : '余额',width : 100,dataIndex : 'bean.balance',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '核算单元',width : 150,dataIndex : 'bean.cell',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'sys',mn : 'view.sys.SysCell.List'}
	,{text : '科目字典',width : 100,dataIndex : 'bean.subject',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'gl',mn : 'view.gl.GlSubject.List'}
	,{text : '币种',width : 100,dataIndex : 'bean.currency',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OCurrency')}
	,{text : '可用余额',width : 100,dataIndex : 'bean.balanceUse',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right',expandCol : true,hidden : true}
	,{text : '状态',width : 60,dataIndex : 'bean.state',sortable : true,renderer : mvc.Tools.optRenderer('gl','Gl','OJlState')}
	,{text : '机构',width : 100,dataIndex : 'bean.org',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'sys',mn : 'view.sys.SysOrg.List'}
	,{text : '备注',width : 100,dataIndex : 'bean.rem',sortable : true,expandCol : true,hidden : true}
	,{text : '计息标志',width : 100,dataIndex : 'bean.interestAccrual',sortable : true,renderer : mvc.Tools.optRenderer('gl','Gl','OInterestAccrual'),expandCol : true,hidden : true}
	,{text : '冻结标志',width : 100,dataIndex : 'bean.frostFlag',sortable : true,renderer : mvc.Tools.optRenderer('gl','Gl','OFrostFlag'),expandCol : true,hidden : true}
	,{text : '账户类型',width : 100,dataIndex : 'bean.accType',sortable : true,renderer : mvc.Tools.optRenderer('gl','Gl','OAccType'),expandCol : true,hidden : true}
	,{text : '表内标志',width : 100,dataIndex : 'bean.inFlag',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OYn'),expandCol : true,hidden : true}
	,{text : '借贷标志',width : 100,dataIndex : 'bean.direct',sortable : true,renderer : mvc.Tools.optRenderer('gl','Gl','ODirect')}
	,{text : '明细账金额类型',width : 100,dataIndex : 'bean.accJournalType',sortable : true,renderer : mvc.Tools.optRenderer('gl','Gl','OAccJournalType'),expandCol : true,hidden : true}
	,{text : '记明细汇总标志',width : 100,dataIndex : 'bean.tallyFlag',sortable : true,renderer : mvc.Tools.optRenderer('gl','Gl','OTallyFlag'),expandCol : true,hidden : true}
	];
		this.store=Ext.create('mvc.store.gl.GlJournal');
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
		var bean = Ext.create('mvc.model.gl.GlJournal', data);
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
			var win = Ext.create('mvc.view.gl.GlJournal.Win',{
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
					url : '/gl_GlJournal_del?pkey='+row.get('bean.pkey')+'&rowVersion='+row.get(BEAN_VERSION),
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