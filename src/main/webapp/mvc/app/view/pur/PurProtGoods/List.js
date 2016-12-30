Ext.define('mvc.view.pur.PurProtGoods.List',{
extend : 'Ext.grid.Panel',
oldId : 'btn_PurProtGoods',
lock : true,
disableSelection : false,
loadMask : true,
multiSelect : true,
roles : '',
selModel : {selType : 'checkboxmodel'},
viewConfig : {enableTextSelection : true},
initComponent : function(){
var mainActs = [];this.columns = [{text : '科目模板',width : 100,dataIndex : 'bean.templat',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'sys',mn : 'view.sys.SysTemplat.List'}
	,{text : '供应商',width : 100,dataIndex : 'bean.supplier',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'sys',mn : 'view.sys.SysSupplier.List'}
	,{text : '供应商名称',width : 100,dataIndex : 'bean.name',sortable : true}
	,{text : '货物',width : 100,dataIndex : 'bean.goods',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'goods',mn : 'view.gs.GsGoods.List'}
	,{text : '计量单位',width : 75,dataIndex : 'bean.uom',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '他方品名',width : 100,dataIndex : 'bean.vendorGoodsName',sortable : true}
	,{text : '他方代码',width : 100,dataIndex : 'bean.vendorNum',sortable : true}
	,{text : '他方规格',width : 100,dataIndex : 'bean.vendorSpec',sortable : true}
	,{text : '协议价',width : 100,dataIndex : 'bean.price',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'}
	,{text : '启用日期',width : 100,dataIndex : 'bean.dateStart',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d')}
	,{text : '到期日期',width : 100,dataIndex : 'bean.dateEnd',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d')}
	,{text : '上次成交价',width : 100,dataIndex : 'bean.priceLast',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'}
	,{text : '上次成交时间',width : 100,dataIndex : 'bean.dateLast',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d')}
	,{text : '更新员',width : 75,dataIndex : 'bean.updatedBy',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'sys',mn : 'view.sys.SysUser.List'}
	,{text : '更新时间',width : 140,dataIndex : 'bean.updatedTime',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s')}
	];
		mvc.Tools.doGoodsLine(this.columns, 4);		if (mainActs.length > 0)
			this.tbar=mainActs;
		this.store=Ext.create('mvc.store.pur.PurProtGoods'); 
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
		this.on({cellclick:mvc.Tools.onCellclick});
this.dockedItems=[{
		dock : 'top',
		xtype : 'toolbar',
		items : [{
				xtype : 'label',
				text : '供应商：'
			},
				mvc.Tools.crtComboTrigger(true,'sys_SysSupplier','',{
							name : 'supplier'
						})
			,'',{
				xtype : 'label',
				text : '供应商名称：'
			},{
				xtype : 'textfield',
				name : 'name'
			},'',{
				xtype : 'label',
				text : '货物：'
			},{
				xtype : 'comboauto',
				name : 'goods',
				listConfig : {minWidth:250},
				fields : ['pkey','code','name','spec'],
				valueField : ['pkey'],
				textField : 'code',
				queryParam : 'code',
				name : 'goods',
				url : base_path + '/gs_GsGoods_autoComplete',
				urlExt : 'gs.GsGoods',
				hasBlur : false
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
		var win = Ext.create('mvc.view.pur.PurProtGoods.WinSearch',{
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