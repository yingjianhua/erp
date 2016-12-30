Ext.define('mvc.view.pur.PurProt.List',{
extend : 'Ext.grid.Panel',
oldId : 'btn_PurProt',
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
	,{text : '供应商名称',width : 180,dataIndex : 'bean.name',sortable : true}
	,{text : '结算方式',width : 100,dataIndex : 'bean.settle',sortable : true}
	,{text : '是否月结',width : 100,dataIndex : 'bean.settleMonth',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OYn')}
	,{text : '次月天数',width : 100,dataIndex : 'bean.settleNextDay',sortable : true}
	,{text : '信用等级',width : 100,dataIndex : 'bean.creditLevel',sortable : true,renderer : mvc.Tools.optRenderer('sal','Sal','OCreditLevel')}
	,{text : '信用额度',width : 100,dataIndex : 'bean.creditLimit',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '押抵金额',width : 100,dataIndex : 'bean.creditOther',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '税点(%)',width : 100,dataIndex : 'bean.taxRate',sortable : true,align : 'right'}
	,{text : '产品质量',width : 100,dataIndex : 'bean.descKind',sortable : true}
	,{text : '年承诺销售数量',width : 100,dataIndex : 'bean.descSal',sortable : true}
	,{text : '包装要求',width : 100,dataIndex : 'bean.packDemand',sortable : true}
	,{text : '费用承担方式',width : 100,dataIndex : 'bean.shipType',sortable : true,renderer : mvc.Tools.optRenderer('sal','Sal','OShipType')}
	,{text : '协议签订日期',width : 100,dataIndex : 'bean.dateProt',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d')}
	,{text : '启用日期',width : 100,dataIndex : 'bean.dateStart',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d')}
	,{text : '到期日期',width : 100,dataIndex : 'bean.dateEnd',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d')}
	,{text : '更新员',width : 75,dataIndex : 'bean.updatedBy',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'sys',mn : 'view.sys.SysUser.List'}
	,{text : '更新时间',width : 140,dataIndex : 'bean.updatedTime',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s')}
	,{text : '备注',width : 100,dataIndex : 'bean.rem',sortable : true}
	];
		if (mainActs.length > 0)
			this.tbar=mainActs;
		this.store=Ext.create('mvc.store.pur.PurProt'); 
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
		var win = Ext.create('mvc.view.pur.PurProt.WinSearch',{
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