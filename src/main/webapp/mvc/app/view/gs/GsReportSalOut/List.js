Ext.define('mvc.view.gs.GsReportSalOut.List',{
extend : 'Ext.grid.Panel',
oldId : 'btn_GsReportSalOut',
lock : true,
disableSelection : false,
loadMask : true,
multiSelect : true,
roles : '',
selModel : {selType : 'checkboxmodel'},
viewConfig : {enableTextSelection : true},
initComponent : function(){
var mainActs = [];this.columns = [{text : '出库单号',width : 100,dataIndex : 'bean.code',sortable : true}
	,{text : '出库时间',width : 140,dataIndex : 'bean.outTime',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s')}
	,{text : '货物代码',width : 100,dataIndex : 'bean.goodsCode',sortable : true}
	,{text : '货物名称',width : 100,dataIndex : 'bean.name',sortable : true}
	,{text : '规格',width : 100,dataIndex : 'bean.spec',sortable : true}
	,{text : '计量单位',width : 75,dataIndex : 'bean.uom',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '数量',width : 100,dataIndex : 'bean.qty',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'}
	];
		if (mainActs.length > 0)
			this.tbar=mainActs;
		this.store=Ext.create('mvc.store.gs.GsReportSalOut'); 
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
		this.on({cellclick:mvc.Tools.onCellclick});
this.dockedItems=[{
		dock : 'top',
		xtype : 'toolbar',
		items : [{
				xtype : 'label',
				text : '仓库：'
			},
				mvc.Tools.crtComboTrigger(true,'gs_GsWarehouse','',{
							name : 'warehouse'
						})
			,'',{
				xtype : 'label',
				text : '日期：'
			},{
				xtype : 'datefield',
				name : 'date',
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
		var win = Ext.create('mvc.view.gs.GsReportSalOut.WinSearch',{
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