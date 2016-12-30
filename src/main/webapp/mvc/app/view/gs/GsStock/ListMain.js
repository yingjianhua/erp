Ext.define('mvc.view.gs.GsStock.ListMain',{
extend : 'Ext.grid.Panel',
disableSelection : false,
loadMask : true,
multiSelect : true,
roles : '',
selModel : {selType : 'checkboxmodel'},
viewConfig : {enableTextSelection : true},
initComponent : function(){
this.columns =[{text : '仓库',width : 100,dataIndex : 'bean.warehouse',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'gs',mn : 'view.gs.GsWarehouse.List'}
	,{text : '货物',width : 100,dataIndex : 'bean.goods',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'goods',mn : 'view.gs.GsGoods.List'}
	,{text : '计量单位',width : 75,dataIndex : 'bean.uom',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '库存数量',width : 100,dataIndex : 'bean.qty',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'}
	,{text : '货位',width : 100,dataIndex : 'bean.location',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'gs',mn : 'view.gs.GsLocation.List'}
	,{text : '在途数量',width : 100,dataIndex : 'bean.enrouteQty',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'}
	,{text : '存货锁定数量',width : 100,dataIndex : 'bean.lockedQty',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'}
	,{text : '最低库存',width : 100,dataIndex : 'bean.lowestQty',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'}
	,{text : '安全库存',width : 100,dataIndex : 'bean.safetyQty',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'}
	,{text : '上限库存',width : 100,dataIndex : 'bean.limitQty',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'}
	,{text : '采购提前天数',width : 100,dataIndex : 'bean.purLeadDays',sortable : true}
	,{text : '启用标志',width : 75,dataIndex : 'bean.enabled',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OEnabled')}
	,{text : '核算单元',width : 100,dataIndex : 'bean.cell',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'sys',mn : 'view.sys.SysCell.List'}
	];
		mvc.Tools.doGoodsLine(this.columns, 2);		this.store=Ext.create('mvc.store.gs.GsStock');
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
		var bean = Ext.create('mvc.model.gs.GsStock', data);
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
			var win = Ext.create('mvc.view.gs.GsStock.Win',{
				title : this.title+'>修改',
				insFlag : false
			});
			win.on('create',this.onUpdateRecord,this);
			win.show();
			win.setActiveRecord(selection);
		}
}
});