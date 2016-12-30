Ext.define('mvc.view.rp.RpHandover.ListForm',{
extend : 'Ext.grid.Panel',
disableSelection : false,
loadMask : true,
cellEditing : Ext.create('Ext.grid.plugin.CellEditing', { clicksToEdit: 1 }),
mainPkey : null,
initComponent : function(){
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
		this.tbar = mainActs;		
		this.columns =[{text : '物品',width : 120,dataIndex : 'bean.boxGoods',sortable : true,
		renderer : mvc.Tools.beanRenderer(),
		editor : {
		xtype : 'beantriggercell',
		bean : 'RpWorkBoxGoods',
		beanType : 'rp',
		grid : this,
		onTrigger2Click : function() {
			var source = this.grid.up('panel').down('[name=bean.source]').value;
			if(!source){
				alert('请先选择交出人！');
				return;
			}
			var win = Ext.create("mvc.view.rp.RpWorkBoxGoods.Trigger");
			win.on('trigger', this.onTrigger, this);
			win.show();
			var store = win.down('grid').getStore();
			var array = [];
        	array.push({
            	id:'diy',
                property: 'diy',
                value: 'user='+source
            });
			store.filter(array);
		},
		onTrigger : function(data1,data2) {
			var record = this.grid.getView().getSelectionModel().getSelection()[0];
			var boxGoods = data1.toString();
			var Goods = boxGoods.substring(0,boxGoods.indexOf('-'));
			record.set('bean.boxGoods',Goods);
			alert(Goods);
			record.set('bean.name',data2);
		}
		}
		}
	,{text : '物品名称',width : 100,dataIndex : 'bean.name',sortable : true}
	];
		this.store=Ext.create('mvc.store.rp.RpHandoverLine');
		this.store.pageSize = 0;
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
		this.plugins = [this.cellEditing];
		this.callParent(arguments);	
},
onIns : function(){
		var model = Ext.create('mvc.store.rp.RpHandoverLine');
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