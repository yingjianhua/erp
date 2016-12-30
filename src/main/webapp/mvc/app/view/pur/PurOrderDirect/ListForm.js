Ext.define('mvc.view.pur.PurOrderDirect.ListForm',{
extend : 'Ext.grid.Panel',
disableSelection : false,
loadMask : true,
cellEditing : Ext.create('Ext.grid.plugin.CellEditing', { clicksToEdit: 1 }),
mainPkey : null,
checkPrice : false,
initComponent : function(){
		this.columns =[		
		{text : '货物', width : 120, dataIndex : 'bean.goods', sortable : true, renderer : mvc.Tools.beanRenderer()}
		,{text : '数量',width : 100,dataIndex : 'bean.qty',sortable : true,align : 'right',renderer : mvc.Tools.numberRenderer(4)}
		,{text : '计量单位',width : 80,dataIndex : 'bean.uom',sortable : true,renderer : mvc.Tools.beanRenderer()}
		,{text : '单价',width : 100,dataIndex : 'bean.price',sortable : true,align : 'right',renderer : mvc.Tools.numberRenderer(4),editor : {xtype : 'numberfield',decimalPrecision : 4}}
		,{text : '金额',width : 120,dataIndex : 'bean.amt',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
		];
	mvc.Tools.doGoodsLine(this.columns, 1);				
	this.store=Ext.create('mvc.store.pur.PurOrderDirectLine');
				this.store.pageSize = 0;
				this.store.remoteFilter = true;
				this.store.proxy.filterParam = 'filter';
				if(this.checkPrice){
					this.plugins = [this.cellEditing];
					this.on('edit', function(editor, e) {
						if (e.field == 'bean.price'){
							var pr = Number(e.value);
							var num = Number(e.record.get('bean.qty'));
							var amt = pr * num;
							e.record.set('bean.amt',amt);
							var amtAll=0;
							this.store.each(function(recode){
								amtAll = amtAll + Number(recode.get('bean.amt'));
							});
							this.up('panel').down('[name=bean.amt]').setValue(amtAll);
						}
					});
				}
				this.callParent(arguments);	
},
onIns : function(){
		var win = Ext.create('mvc.view.pur.PurOrderDirect.WinDirect',{
			title : '采购直销>新增',
			parent : this
		});
		win.show();
},
onDel : function(){
		var selection = this.getView().getSelectionModel().getSelection();
		if (selection){
			this.getStore().remove(selection);
		}
}
});