Ext.define('mvc.view.pur.PurRtn.ListForm',{
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
				grid : this
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
,{text : '数量',width : 100,dataIndex : 'bean.qty',sortable : true,align : 'right',editor : {xtype : 'numberfield',decimalPrecision : 4}
		}
	,{text : '计量单位',width : 80,dataIndex : 'bean.uom',sortable : true,renderer : mvc.Tools.beanRenderer(),editor : {xtype : 'beantriggercell',bean : 'GsUom',beanType : 'gs',beanName : 'bean.uom',grid : this,emptyText : form_empty_text}
		}
	,{text : '单价',width : 100,dataIndex : 'bean.price',sortable : true,align : 'right',editor : {xtype : 'numberfield',decimalPrecision : 4}
		}
	,				
		{text : '金额',width : 120,dataIndex : 'bean.amt',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	];
		mvc.Tools.doGoodsLine(this.columns, 1);						this.store=Ext.create('mvc.store.pur.PurRtnLine');
		this.store.pageSize = 0;
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
		this.plugins = [this.cellEditing];
		var me = this;
		this.on('edit', function(editor, e) {
			if (e.field == 'bean.goods'){
				if (me.oldGoods != e.value){ //值变更后触发--根据货物读取INFO
					console.log("e.value:"+e.value);
					mvc.Tools.onLoadInfo(e.value, null, me);
				}
			}else if (e.field == 'bean.qty' || e.field == 'bean.price'){ //计算金额
				var qty = e.record.get('bean.qty');
				var price = e.record.get('bean.price');
				if (qty && price)
					e.record.set('bean.amt', (qty * price).toFixed(2));
				else
					e.record.set('bean.amt', null);
				//设置主表中的总金额字段
				me.up('window').down('form').down('[name=bean.amt]').setValue(mvc.Tools.sumStoreFld(me.store, 'bean.amt'));
			}
    	});
		this.getStore().on('remove', function(store,record){
			me.up('window').down('form').down('[name=bean.amt]').setValue(mvc.Tools.sumStoreFld(store, 'bean.amt'));
		});
		this.on('beforeedit', function(editor, e) {
			me.diySql = null;
			if (e.field == 'bean.goods')
				me.oldGoods = e.value;
			else if (e.field == 'bean.uom' && e.value){//CELL-EDITOR对象找不到，暂只能把参数存储到GRID中
				var s = e.record.get('bean.uom').split(bean_split);
				me.diySql = 'uom_type = (select uom_type from gs_uom where pkey='+s[0]+')';
			}
		});
		this.callParent(arguments);		
},
onIns : function(){
		var model = Ext.create('mvc.store.pur.PurRtnLine');
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