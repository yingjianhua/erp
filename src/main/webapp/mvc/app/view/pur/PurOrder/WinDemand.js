Ext.define('mvc.view.pur.PurOrder.WinDemand',{
extend : 'Ext.window.Window',
width : 750,
resizable : false,
modal : true,
iconCls : 'app-icon',
pkeyFlag : true,
demandStore : null,
supplierStore : null,
insFlag : true,
warehouse : null,
tmp : null,
parent : null,
supplier : null,
initComponent : function(){
	
	this.demandStore=Ext.create('mvc.store.gs.GsDemand');
	this.demandStore.remoteFilter = true;
	this.demandStore.proxy.filterParam = 'filter';
	
	this.supplierStore=Ext.create('mvc.store.pur.PurProtGoods',{
		proxy : {
		type : 'ajax',
		url : base_path+'/pur_PurProtGoods_listForGoods',
		autoLoad : true,
		//extraParams : {"pkey":this.pkey},
		reader : {
			type : 'json',
			root : 'items',
			totalProperty : 'total'
		},
		simpleSortMode : true
	}
	});
	
//	this.supplierStore.load();
	this.items =[{
				xtype : 'toolbar',
				items : [{
					xtype : 'label',
					text : '仓库：'
					},mvc.Tools.crtComboTrigger(true,'gs_GsWarehouse','',{
						name : 'warehouse'
					}),{
						xtype : 'button',
						text : '搜索',
						scope : this,
						iconCls : 'win-ok-icon',
						handler : this.onSearch
					}]
				},{
					xtype :'panel',
					height : 420,
					layout : 'border',
					items : [Ext.create('Ext.grid.Panel', {
								region : 'west',
								width : 480,
								margin : '1 1 1 0',
								itemId : 'goodsGrid',
								store : this.demandStore,
								multiSelect : true,
								selModel : {selType : 'checkboxmodel'},
								columns : [
								      {text : '序号', width : 100, dataIndex : 'bean.pkey', sortable : true,hidden:true},
											{text : '货物', width : 70, dataIndex : 'bean.goods', sortable : true, renderer : mvc.Tools.beanRenderer()},
											{text : '货物名称', width : 80, dataIndex : 'link.goodsName', sortable : true},
											{text : '货物规格', width : 170, dataIndex : 'link.goodsSpec', sortable : true},
											{text : '单位', width : 40, dataIndex : 'bean.uom', sortable : true, renderer : mvc.Tools.beanRenderer()},
											{text : '数量', width : 80, dataIndex : 'bean.qty', sortable : true,align : 'right',renderer : mvc.Tools.numberRenderer(4)},
											{text : '需求时间', width : 140, dataIndex : 'bean.requestTime', sortable : true, renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s')}
										],
								listeners : {
	 								scope : this,
	 								selectionchange: function(model, records) {
	 									this.supplier=null;
	 									var goods=[];
	 									Ext.each(records,function(record){
	 										goods.push(record.get('bean.goods').split('##')[0]);	
	 									});
	 									Ext.Ajax.request({
	 										async : false,
	 										scope : this,
	 										url : base_path + '/pur_PurProtGoods_listForGoods',
	 										params:{'goods':goods},
	 										method : 'GET',
	 										success : function(response) {
	 											rtn = Ext.JSON.decode(response.responseText, true);
	 											if (rtn.success){
		 											this.supplierStore.loadData(rtn.items);
		 											this.doLayout();
	 											}else{
	 												Ext.MessageBox.show({
	 													title : msg_title, 
	 													msg : rtn.msg,
	 													buttons : Ext.MessageBox.OK,
	 													icon : Ext.MessageBox.ERROR
	 												});
	 											}
	 										}
	 									});
	 								}
								}
							}),Ext.create('Ext.grid.Panel', {
								region : 'center',
								margin : '1 0 1 0',
								store : this.supplierStore,
								columns : [
											{text : '供应商', width : 80, dataIndex : 'bean.supplier', sortable : true, renderer : mvc.Tools.beanRenderer()},
											{text : '供应商名称', width : 170, dataIndex : 'bean.name', sortable : true},
											{text : '科目模板', width : 80, dataIndex : 'bean.templat', sortable : true, renderer : mvc.Tools.beanRenderer(),hidden : true }
										],
								listeners : {
	 								scope : this,
	 								selectionchange: function(model, records) {
	 									if(records.length < 1)
	 										return;
	 									var supplier=records[0].get('bean.supplier').split('##')[0];
	 									this.supplier = supplier;
	 									var tmp = records[0].get('bean.templat').split('##')[0];
	 									this.tmp = tmp;
	 								},
									itemdblclick : function(view,record,item,index){
	 								if(index <0)
 										return;
 									var supplier=record.get('bean.supplier').split('##')[0];
 									this.supplier = supplier;
 									var tmp = record.get('bean.templat').split('##')[0];
 									this.tmp = tmp;
 									Ext.Ajax.request({
 										async : false,
 										scope : this,
 										url : base_path + '/pur_PurProtGoods_listForSupplier',
 										params:{temId:tmp,supId:supplier},
 										method : 'GET',
 										success : function(response) {
 											var ff = true;
 											rtn = Ext.JSON.decode(response.responseText, true);
 											this.demandStore.each(function(record){
 												var gs = record.get('bean.goods').split('##')[0];
 												Ext.each(rtn.goods,function(gd){
 													if(gs == gd){
 														this.down('#goodsGrid').getView().select(record,!ff,true);
 														ff = false;
 														return;
 													}
 												},this);
 											},this);
 										},
 										failure : function(response) {
 											Ext.example.msg(msg_title, msg_ajax);
 										}
 									});
									}
								}
							})
					         ]
				}];
	this.buttonAlign = 'right',
	this.buttons =[{
			text : '关闭',
			iconCls : 'win-close-icon',
			scope : this,
			handler : this.onClose
		},{
			text : '确定',
			iconCls : 'win-save-icon',
			scope : this,
			handler : this.onSave
		}];
	
	this.callParent(arguments);
},
onClose : function(){
	this.close();
},
onSearch : function(){
	this.down('#goodsGrid').getSelectionModel().clearSelections(); 
	var array = mvc.Tools.searchValues(this.down('toolbar'));
	if (array.length == 0){
		this.demandStore.removeAll();
		return;
	}
	this.warehouse = array[0].value;
	array.push({id:'status',property:'status',value:'11'});
	this.demandStore.clearFilter(true);
	this.demandStore.filter(array);
},
onSave : function(){
	//var ws = 
	var win = Ext.create('mvc.view.pur.PurOrder.Win',{
		title : '采购订单>新增'
	});
	win.on('create',this.parent.onSaveRecord,this.parent);
	var selections = this.down('#goodsGrid').getView().getSelectionModel().getSelection();
	if (this.warehouse == null || selections == null || this.supplier == null)
		Ext.MessageBox.show({
			title : msg_title, 
			msg : '请选择货物与供应商！',
			buttons : Ext.MessageBox.OK,
			icon : Ext.MessageBox.ERROR
		});
	else {
		win.show();
		win.setActiveRecordIns(this.warehouse,this.tmp,this.supplier,selections);
		this.close();
	}
}
});