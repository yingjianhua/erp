Ext.define('mvc.view.gl.GlDailyLedger.List',{
extend : 'Ext.grid.Panel',
oldId : 'btn_GlDailyLedger',
lock : true,
disableSelection : false,
loadMask : true,
multiSelect : true,
roles : '',
selModel : {selType : 'checkboxmodel'},
viewConfig : {enableTextSelection : true},
initComponent : function(){
var mainActs = [];this.columns = [{text : '核算单元',width : 100,dataIndex : 'bean.cell',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'sys',mn : 'view.sys.SysCell.List'}
	,{text : '科目字典',width : 170,dataIndex : 'bean.subject',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'gl',mn : 'view.gl.GlSubject.List'}
	,{text : '工作日期',width : 90,dataIndex : 'bean.workDate',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d')}
	,{text : '借方发生笔数',width : 100,dataIndex : 'bean.drQty',sortable : true}
	,{text : '借方发生额',width : 100,dataIndex : 'bean.drAmt',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '贷方发生笔数',width : 100,dataIndex : 'bean.crQty',sortable : true}
	,{text : '贷方发生额',width : 100,dataIndex : 'bean.crAmt',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '借方余额',width : 100,dataIndex : 'bean.drBalance',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '贷方余额',width : 100,dataIndex : 'bean.crBalance',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '有效账户数',width : 100,dataIndex : 'bean.num',sortable : true}
	,{text : '机构',width : 100,dataIndex : 'bean.org',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'sys',mn : 'view.sys.SysOrg.List'}
	,{text : '币种',width : 60,dataIndex : 'bean.currency',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OCurrency')}
	];
		if (mainActs.length > 0)
			this.tbar=mainActs;
		this.store=Ext.create('mvc.store.gl.GlDailyLedger'); 
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
		this.on({cellclick:mvc.Tools.onCellclick});
this.dockedItems=[{
		dock : 'top',
		xtype : 'toolbar',
		items : [{
				xtype : 'label',
				text : '核算单元：'
			},
				mvc.Tools.crtComboTrigger(true,'sys_SysCell','',{
							name : 'cell'
						})
			,'',{
				xtype : 'label',
				text : '科目字典：'
			},{
				xtype : 'beantrigger',
				name : 'subject',
				bean : 'GlSubject',
				beanType : 'gl',
				emptyText : form_empty_text
			},'',{
				xtype : 'label',
				text : '工作日期：'
			},{
				xtype : 'datefield',
				name : 'workDate',
				format : 'Y-m-d'
			},'',{
				xtype : 'button',
				text : '撤销',
				scope : this,
				iconCls : 'win-close-icon',
				handler : this.onSearchCancel
			},{
				xtype : 'splitbutton',
				text : '搜索',
				scope : this,
				iconCls : 'win-ok-icon',
				handler : this.onSearch,
				menu : [{text:'高级搜索',iconCls : 'win-ok-icon', scope : this,handler: this.onSearchAdv}]
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
		this.callParent(arguments);		mvc.Tools.onENTER2SearchBar(this.down('[dock=top]'),this);},
listeners : {
	selectionchange : function(selModel, selected){
}
},
onSearchCancel : function(){
		this.getSelectionModel().deselectAll();
		mvc.Tools.searchClear(this.down('toolbar'));
		this.store.clearFilter();
},
onSearch : function(){
		var array = mvc.Tools.searchValues(this.down('toolbar'));
		this.onSearchDo(array);
},
onSearchAdv : function(){
		var win = Ext.create('mvc.view.gl.GlDailyLedger.WinSearch',{
			title : this.title+'>高级搜索',
			listCmp : this
		});
		win.show();
},
onSearchDo : function(array){
		this.getSelectionModel().deselectAll();
		if (array.length == 0){
			this.store.clearFilter();
			return;
		}
		this.store.clearFilter(true);
		this.store.filter(array);
}
});