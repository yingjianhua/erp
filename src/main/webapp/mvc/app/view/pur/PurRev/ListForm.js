Ext.define('mvc.view.pur.PurRev.ListForm',{
extend : 'Ext.grid.Panel',
disableSelection : false,
loadMask : true,
cellEditing : Ext.create('Ext.grid.plugin.CellEditing', { clicksToEdit: 1 }),
mainPkey : null,
initComponent : function(){
		var mainActs = [{
		text : '删除',
		iconCls : 'del-icon',
		scope : this,
		handler : this.onDel
	}];
		this.tbar = mainActs;		this.columns =[		
		{text : '货物', width : 100, dataIndex : 'bean.goods', sortable : true, renderer : mvc.Tools.beanRenderer(), 
			}
	,{text : '数量',width : 100,dataIndex : 'bean.qty',sortable : true,align : 'right',renderer : mvc.Tools.numberRenderer(4),editor : {xtype : 'numberfield',decimalPrecision : 4}
			}
	,{text : '实收数量',width : 100,dataIndex : 'bean.receivedQty',sortable : true,align : 'right',renderer : mvc.Tools.numberRenderer(4),editor : {xtype : 'numberfield',decimalPrecision : 4}
	}
	,{text : '单位',width : 60,dataIndex : 'bean.uom',sortable : true,renderer : mvc.Tools.beanRenderer()
		}
	,{text : '单价',width : 80,dataIndex : 'bean.price',sortable : true,align : 'right',renderer : mvc.Tools.numberRenderer(4)
		}
	,{text : '金额',width : 80,dataIndex : 'bean.amt',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'
		,itemId : 'amt'}
	];
		mvc.Tools.doGoodsLine(this.columns, 1);		this.store=Ext.create('mvc.store.pur.PurRevLine');
		this.store.pageSize = 0;
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
		this.plugins = [this.cellEditing];
		this.on('edit', function(editor, e) {
			if (e.field == 'bean.qty'){
				var num = Number(e.value);
				var price = Number(e.record.get('bean.price'));
				var amt = price * num;
				e.record.set('bean.amt',amt);
				e.record.set('bean.receivedQty',num);
				var amtAll=0;
				this.store.each(function(recode){
					amtAll = amtAll + Number(recode.get('bean.amt'));
				});
				this.up('panel').down('[name=bean.amt]').setValue(amtAll);
			}else if(e.field == 'bean.receivedQty'){
				var num = Number(e.value);
				var price = Number(e.record.get('bean.price'));
				var amt = price * num;
				e.record.set('bean.amt',amt);
				var amtAll=0;
				this.store.each(function(recode){
					amtAll = amtAll + Number(recode.get('bean.amt'));
				});
				this.up('panel').down('[name=bean.amt]').setValue(amtAll);
			}
		});
		var me = this;
		this.store.on("remove",function(store,record) {
			me.up('panel').down('[name=bean.amt]').setValue(mvc.Tools.sumStoreFld(this, 'bean.amt'));
		})
		this.callParent(arguments);	
},
onDel : function(){
		var selection = this.getView().getSelectionModel().getSelection();
		if (selection){
			this.getStore().remove(selection);
		}
}
});