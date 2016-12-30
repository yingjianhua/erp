Ext.define('mvc.view.pur.PurProtGoodsApplyLine.List',{
	extend : 'Ext.grid.Panel',
	oldId : 'btn_PurProtGoodsApplyLine',
	lock : true,
	disableSelection : false,
	loadMask : true,
	multiSelect : true,
	parent : null,
	roles : '',
	selModel : {selType : 'checkboxmodel'},
	initComponent : function(){
		var mainActs = [];
			mainActs.push({
				text : '新增',
				iconCls : 'ins-icon',
				itemId : this.oldId+'ins',
				scope : this,
				handler : this.onIns
			});
			mainActs.push({
				text : '修改',
				iconCls : 'upd-icon',
				itemId : this.oldId+'upd',
				scope : this,
				handler : this.onUpd,
				disabled : this.lock
			});
			mainActs.push({
				text : '删除',
				disabled : this.lock,
				itemId : this.oldId+'del',
				iconCls : 'del-icon',
				scope : this,
				handler : this.onDel
			});
		this.columns = [ 
			{text : '货物', width : 100, dataIndex : 'bean.goods', sortable : true, renderer : mvc.Tools.beanRenderer()},
			{text : '计量单位', width : 100, dataIndex : 'bean.uom', sortable : true, renderer : mvc.Tools.beanRenderer()},
			{text : '他方品名', width : 100, dataIndex : 'bean.vendorGoodsName', sortable : true},
			{text : '他方代码', width : 100, dataIndex : 'bean.vendorNum', sortable : true},
			{text : '他方规格', width : 100, dataIndex : 'bean.vendorSpec', sortable : true},
			{text : '协议价', width : 100, dataIndex : 'bean.price', sortable : true},
			{text : '启用日期', width : 100, dataIndex : 'bean.dateStart', sortable : true, renderer : Ext.util.Format.dateRenderer('Y-m-d')},
			{text : '到期日期', width : 100, dataIndex : 'bean.dateEnd', sortable : true, renderer : Ext.util.Format.dateRenderer('Y-m-d')},
			{text : '变更后他方品名', width : 100, dataIndex : 'bean.aftVendorGoodsName', sortable : true},
			{text : '变更后他方代码', width : 100, dataIndex : 'bean.aftVendorNum', sortable : true},
			{text : '变更后他方规格', width : 100, dataIndex : 'bean.aftVendorSpec', sortable : true},
			{text : '变更后协议价', width : 100, dataIndex : 'bean.aftPrice', sortable : true},
			{text : '变更后启用日期', width : 100, dataIndex : 'bean.aftDateStart', sortable : true, renderer : Ext.util.Format.dateRenderer('Y-m-d')},
			{text : '变更后到期日期', width : 100, dataIndex : 'bean.aftDateEnd', sortable : true, renderer : Ext.util.Format.dateRenderer('Y-m-d')}
		];
		mvc.Tools.doGoodsLine(this.columns, 1);
		this.tbar=mainActs;
		this.store=Ext.create('mvc.store.pur.PurProtGoodsApplyLine');
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
		this.callParent(arguments);
	},
	listeners : {
		selectionchange : function(selModel, selected) {
				this.down('#'+this.oldId+'upd').setDisabled(selected.length === 0);
				this.down('#'+this.oldId+'del').setDisabled(selected.length === 0);
		}
	},
	
	onSaveRecord : function(form, data){
		this.store.insert(0,data);
		this.getView().select(0);
	},
	onIns : function(){
		var supAll = this.parent.down('#supplier').getValue();
		console.log("supALl:"+supAll);
		var tmp = this.parent.down('#templat').getValue();
		console.log("tmp:"+tmp);
		if(!supAll || !tmp){
			Ext.MessageBox.show({
				title : msg_title, 
				msg : '请先填写供应商与科目模板!',
				buttons : Ext.MessageBox.OK,
				icon : Ext.MessageBox.ERROR
			});
			return;
		}
		var win = Ext.create('mvc.view.pur.PurProtGoodsApplyLine.Win',{
			title : '供应商商品关联>新增',
			parent : this.parent
		});
		win.on('create',this.onSaveRecord,this);
		win.show();
	},
	onUpdateRecord : function(form, data){
		var selection = this.getView().getSelectionModel().getSelection()[0];
		var bean = Ext.create('mvc.model.pur.PurProtGoodsApplyLine', data);
		Ext.apply(selection.data,bean.data);
		selection.commit();
		this.getView().select(selection);
	},
	onUpd : function(){
		var selection = this.getView().getSelectionModel().getSelection()[0];
		this.onUpdWin(selection);
	},
	onUpdWin : function(selection){
		/*if (selection){
			mvc.model.pur.PurProtGoodsApplyLine.load(selection.get('bean.pkey'), {
				scope : this,
				failure : function(response, operation) {
					Ext.example.msg(msg_title,msg_ajax);
				},
				success : function(response, operation) {
					Ext.apply(selection.data,response.data);
					var win = Ext.create('mvc.view.pur.PurProtGoodsApplyLine.Win',{
						title : '供应商商品关联>修改',
						insFlag : false,
						parent : this.parent
					});
					win.on('create',this.onUpdateRecord,this);
					win.show();
					win.setActiveRecord(selection);
				}
			});
		}*/
		if (selection){
			var win = Ext.create('mvc.view.pur.PurProtGoodsApplyLine.Win',{
				title : '供应商商品关联>修改',
				insFlag : false
			});
			win.on('create',this.onUpdateRecord,this);
			win.show();
			win.setActiveRecord(selection);
		}		
	},
	onDel : function(){
		var selection = this.getView().getSelectionModel().getSelection();
		if (selection){
			var me = this;
			me.getStore().remove(selection);
		}
	},
	onSearchCancel : function(){
		this.getSelectionModel().deselectAll();
		mvc.Tools.searchClear(this.down('toolbar'));
		this.store.clearFilter();
	},
	onSearch : function(){
		this.getSelectionModel().deselectAll();
		var array = mvc.Tools.searchValues(this.down('toolbar'));
		if (array.length == 0){
			this.store.clearFilter();
			return;
		}
		this.store.clearFilter(true);
		this.store.filter(array);
	}
});
