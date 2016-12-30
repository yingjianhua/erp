Ext.define('mvc.view.gs.GsPriceGoods.TriggerList',{
extend : 'Ext.grid.Panel',
disableSelection : false,
loadMask : true,
selModel : {selType : 'checkboxmodel'},
viewConfig : {enableTextSelection : true},
searchField : null,
initComponent : function(){
this.columns = [{text : '货物',width : 100,dataIndex : 'bean.goods',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '计量单位',width : 75,dataIndex : 'bean.uom',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '基础价格分类',width : 100,dataIndex : 'bean.priceKind',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '定价基数',width : 100,dataIndex : 'bean.priceCost',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'}
	,{text : '价格1',width : 100,dataIndex : 'bean.price1',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'}
	,{text : '价格2',width : 100,dataIndex : 'bean.price2',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'}
	,{text : '价格3',width : 100,dataIndex : 'bean.price3',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'}
	,{text : '价格4',width : 100,dataIndex : 'bean.price4',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'}
	,{text : '价格5',width : 100,dataIndex : 'bean.price5',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'}
	,{text : '价格6',width : 100,dataIndex : 'bean.price6',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'}
	,{text : '价格7',width : 100,dataIndex : 'bean.price7',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'}
	,{text : '价格8',width : 100,dataIndex : 'bean.price8',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'}
	,{text : '价格9',width : 100,dataIndex : 'bean.price9',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'}
	,{text : '价格10',width : 100,dataIndex : 'bean.price10',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'}
	,{text : '价格11',width : 100,dataIndex : 'bean.price11',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'}
	,{text : '价格12',width : 100,dataIndex : 'bean.price12',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'}
	,{text : '启用标志',width : 75,dataIndex : 'bean.enabled',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OEnabled')}
	];
		mvc.Tools.doGoodsLine(this.columns, 1);		this.store=Ext.create('mvc.store.gs.GsPriceGoods');this.dockedItems = [{
		dock : 'top',
		xtype : 'toolbar',
		items : ["搜索：",{
				xtype : 'combo',
				mode : 'local',
				valueField : 'value',
				triggerAction : 'all',
				forceSelection : true,
				typeAhead : true,
				editable : false,
				width : 100,
				value : 'goods',
				store:	Ext.create('Ext.data.Store',{
							fields :  ['value', 'text'],
							data : [{value : 'goods',text : '货物'}
								]
						}),
				listeners : {
					scope : this,
					change : function(field,newv,oldv,opts) {	this.searchField.flds = newv; }
				}
			},'=',{
				width : 250,
				xtype : 'irilleSearchfield',
				flds : 'goods',
				store : this.store
			},'->',{
				xtype : 'button',
				text : '确定',
				scope : this,
				iconCls : 'win-ok-icon',
				handler : this.onTriggerList
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
		this.callParent(arguments);
		this.searchField = this.down('irilleSearchfield');
},
listeners : {
	itemdblclick : function(){
			this.onTriggerList();	
}
},
onTriggerList : function(){
			var selection = this.getView().getSelectionModel().getSelection()[0];
		if (selection){
			this.fireEvent('trigger', selection.get('bean.pkey') + bean_split + selection.get('bean.priceKind').split(bean_split)[1], null);
		}
}
});