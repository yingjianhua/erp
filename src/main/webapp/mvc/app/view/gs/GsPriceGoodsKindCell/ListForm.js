Ext.define('mvc.view.gs.GsPriceGoodsKindCell.ListForm',{
	extend : 'Ext.grid.Panel',
	disableSelection : false,
	loadMask : true,
	multiSelect : true,
	selModel : {selType : 'checkboxmodel'},
	cellEditing : Ext.create('Ext.grid.plugin.CellEditing', {
        clicksToEdit: 1
    }),
    mainPkey : null,
	initComponent : function(){
		this.columns = [{text : '货物',width : 100,dataIndex : 'bean.goods',sortable : true,renderer : mvc.Tools.beanRenderer()}
		,{text : '基础价格分类',width : 100,dataIndex : 'bean.priceKind',sortable : true,renderer : mvc.Tools.beanRenderer()}
		,{text : '定价基数',width : 100,dataIndex : 'bean.priceCost',sortable : true,align : 'right'}
		,{text : '价格1',width : 100,dataIndex : 'bean.price1',sortable : true,align : 'right'}
		,{text : '价格2',width : 100,dataIndex : 'bean.price2',sortable : true,align : 'right'}
		,{text : '价格3',width : 100,dataIndex : 'bean.price3',sortable : true,align : 'right'}
		,{text : '价格4',width : 100,dataIndex : 'bean.price4',sortable : true,align : 'right'}
		,{text : '价格5',width : 100,dataIndex : 'bean.price5',sortable : true,align : 'right'}
		,{text : '价格6',width : 100,dataIndex : 'bean.price6',sortable : true,align : 'right'}
		,{text : '价格7',width : 100,dataIndex : 'bean.price7',sortable : true,align : 'right'}
		,{text : '价格8',width : 100,dataIndex : 'bean.price8',sortable : true,align : 'right'}
		,{text : '价格9',width : 100,dataIndex : 'bean.price9',sortable : true,align : 'right'}
		,{text : '价格10',width : 100,dataIndex : 'bean.price10',sortable : true,align : 'right'}
		,{text : '价格11',width : 100,dataIndex : 'bean.price11',sortable : true,align : 'right'}
		,{text : '价格12',width : 100,dataIndex : 'bean.price12',sortable : true,align : 'right'}
		,{text : '启用标志',width : 100,dataIndex : 'bean.enabled',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OEnabled')}];
		mvc.Tools.doGoodsLine(this.columns, 1);
		this.store=Ext.create('mvc.store.gs.GsPriceGoods');
		this.store.pageSize = 0;
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
//		this.store.load();
		this.plugins = [this.cellEditing];
		this.on('edit', function(editor, e) {
			if (e.field == 'bean.goods'){
				if (this.oldGoods != e.value){ //值变更后触发
					mvc.Tools.onLoadInfo(e.value, e.record, this);
				}
			}
		});
		this.on('beforeedit', function(editor, e) {
			this.diySql = null;
			if (e.field == 'bean.goods')
				this.oldGoods = e.value;
			else if (e.field == 'bean.uom' && e.value){//CELL-EDITOR对象找不到，暂只能把参数存储到GRID中
				var s = e.record.get('bean.uom').split(bean_split);
				this.diySql = 'uom_type = (select uom_type from gs_uom where pkey='+s[0]+')';
			}
		});
		this.callParent(arguments);
	},
	onIns : function(){
		var model = Ext.create('mvc.store.gs.GsPriceGoods');
        this.store.insert(0, model);
        this.cellEditing.startEditByPosition({row: 0, column: 0});
	},
	onDel : function(){
		var selection = this.getView().getSelectionModel().getSelection();
		if (selection){
			this.getStore().remove(selection);
		}
	},
});
