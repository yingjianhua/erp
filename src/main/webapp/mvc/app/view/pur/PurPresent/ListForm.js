Ext.define('mvc.view.pur.PurPresent.ListForm',{
goodsEditor : null,
extend : 'Ext.grid.Panel',
disableSelection : false,
loadMask : true,
cellEditing : Ext.create('Ext.grid.plugin.CellEditing', { clicksToEdit: 1 }),
mainPkey : null,
initComponent : function(){
		this.goodsEditor = Ext.create('widget.comboautocell',{
			listConfig : {minWidth:250},
			fields : ['pkey','code','name','spec'],//查询返回信息model
			valueField : ['pkey'],//提交值
			textField : 'code', //显示信息
			queryParam : 'code',//搜索使用
			name : 'goods', //提交使用
			url : base_path + '/gs_GsGoods_autoComplete',
			urlExt : 'gs.GsGoods',
			hasBlur : false,
			grid : this,
		});
		var mainActs = [{
		text : '新增',
		iconCls : 'ins-icon',
		scope : this,
		handler : this.onIns
	},{
		text : '删除',
		iconCls : 'del-icon',
		scope : this,
		handler : this.onDel
	}];
		this.tbar = mainActs;		this.columns =[			
			{text : '货物', width : 120, dataIndex : 'bean.goods', sortable : true, renderer : mvc.Tools.beanRenderer(), 
					editor: this.goodsEditor}
,{text : '数量',width : 120,dataIndex : 'bean.qty',sortable : true,align : 'right',renderer : mvc.Tools.numberRenderer(4),editor : {xtype : 'numberfield',decimalPrecision : 4}
		}
	,{text : '计量单位',width : 100,dataIndex : 'bean.uom',sortable : true,renderer : mvc.Tools.beanRenderer(),editor : {xtype : 'beantriggercell',bean : 'GsUom',beanType : 'gs',beanName : 'bean.uom',grid : this,emptyText : form_empty_text}
		}
	];
		mvc.Tools.doGoodsLine(this.columns, 1);		this.store=Ext.create('mvc.store.pur.PurPresentLine');
		this.store.pageSize = 0;
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
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
		var model = Ext.create('mvc.store.pur.PurPresentLine');
        this.store.insert(0, model);
        this.cellEditing.startEditByPosition({row: 0, column: 0});
},
onDel : function(){
		var selection = this.getView().getSelectionModel().getSelection();
		if (selection){
			this.getStore().remove(selection);
		}
}
});