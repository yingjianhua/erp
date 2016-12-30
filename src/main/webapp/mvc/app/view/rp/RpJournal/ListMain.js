Ext.define('mvc.view.rp.RpJournal.ListMain',{
extend : 'Ext.grid.Panel',
disableSelection : false,
loadMask : true,
multiSelect : true,
roles : '',
selModel : {selType : 'checkboxmodel'},
viewConfig : {enableTextSelection : true},
initComponent : function(){
this.columns =[{text : '编号',width : 100,dataIndex : 'bean.pkey',sortable : true,hidden : true}
	,{text : '代码',width : 120,dataIndex : 'bean.code',sortable : true}
	,{text : '名称',width : 150,dataIndex : 'bean.name',sortable : true}
	,{text : '今日余额',width : 100,dataIndex : 'bean.balance',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '昨天余额',width : 100,dataIndex : 'bean.yestodayBalance',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '今日收入笔数',width : 100,dataIndex : 'bean.drQty',sortable : true}
	,{text : '今日收入金额',width : 100,dataIndex : 'bean.drAmt',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '今日支出笔数',width : 100,dataIndex : 'bean.crQty',sortable : true}
	,{text : '今日支出金额',width : 100,dataIndex : 'bean.crAmt',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '银行名称',width : 100,dataIndex : 'bean.bankName',sortable : true}
	,{text : '银行账号',width : 100,dataIndex : 'bean.bankAccCode',sortable : true}
	,{text : '账户名称',width : 100,dataIndex : 'bean.bankAccName',sortable : true}
	,{text : '所属工作箱',width : 100,dataIndex : 'bean.workBox',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'rp',mn : 'view.rp.RpWorkBox.List'}
	,{text : '出纳',width : 75,dataIndex : 'bean.cashier',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'sys',mn : 'view.sys.SysUser.List'}
	,{text : '机构',width : 100,dataIndex : 'bean.org',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'sys',mn : 'view.sys.SysOrg.List'}
	,{text : '核算单元',width : 100,dataIndex : 'bean.cell',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'sys',mn : 'view.sys.SysCell.List'}
	,{text : '备注',width : 100,dataIndex : 'bean.rem',sortable : true}
	,{text : '账户类型',width : 100,dataIndex : 'bean.rpJournalType',sortable : true,renderer : mvc.Tools.optRenderer('rp','Rp','ORpJournalType')}
	,{text : '启用标志',width : 75,dataIndex : 'bean.enabled',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OEnabled')}
	];
		this.store=Ext.create('mvc.store.rp.RpJournal');
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
		var bean = Ext.create('mvc.model.rp.RpJournal', data);
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
			var win = Ext.create('mvc.view.rp.RpJournal.Win',{
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
					url : '/rp_RpJournal_del?pkey='+row.get('bean.pkey')+'&rowVersion='+row.get(BEAN_VERSION),
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