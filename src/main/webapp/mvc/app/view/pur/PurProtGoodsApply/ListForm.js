Ext.define('mvc.view.pur.PurProtGoodsApply.ListForm',{
	extend : 'Ext.grid.Panel',
	disableSelection : false,
	loadMask : true,
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
		this.columns = [ 
			{text : '货物', width : 150, dataIndex : 'bean.goods', sortable : true, renderer : mvc.Tools.beanRenderer() 
			},
			{text : '计量单位', width : 100, dataIndex : 'bean.uom', sortable : true, renderer : mvc.Tools.beanRenderer()
			},
			{text : '他方品名', width : 100, dataIndex : 'bean.vendorGoodsName', sortable : true},
			{text : '他方代码', width : 100, dataIndex : 'bean.vendorNum', sortable : true},
			{text : '他方规格', width : 100, dataIndex : 'bean.vendorSpec', sortable : true},
			{text : '协议价', width : 100, dataIndex : 'bean.price', sortable : true
			},
			{text : '启用日期', width : 100, dataIndex : 'bean.dateStart', sortable : true, renderer : Ext.util.Format.dateRenderer('Y-m-d')
			},
			{text : '到期日期', width : 100, dataIndex : 'bean.dateEnd', sortable : true, renderer : Ext.util.Format.dateRenderer('Y-m-d')
			},
			{text : '变更后他方品名', width : 100, dataIndex : 'bean.aftVendorGoodsName', sortable : true},
			{text : '变更后他方代码', width : 100, dataIndex : 'bean.aftVendorNum', sortable : true},
			{text : '变更后他方规格', width : 100, dataIndex : 'bean.aftVendorSpec', sortable : true},
			{text : '变更后协议价', width : 100, dataIndex : 'bean.aftPrice', sortable : true
			},
			{text : '变更后启用日期', width : 100, dataIndex : 'bean.aftDateStart', sortable : true, renderer : Ext.util.Format.dateRenderer('Y-m-d')
			},
			{text : '变更后到期日期', width : 100, dataIndex : 'bean.aftDateEnd', sortable : true, renderer : Ext.util.Format.dateRenderer('Y-m-d')
			}
		];
		mvc.Tools.doGoodsLine(this.columns, 1);
		this.store=Ext.create('mvc.store.pur.PurProtGoodsApplyLine');
		this.store.pageSize = 0;
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
		this.callParent(arguments);
	},
	onDel : function(){
		var selection = this.getView().getSelectionModel().getSelection();
		if (selection){
			this.getStore().remove(selection);
		}
	},
	onSaveRecord : function(form, data){
		this.store.insert(0,data);
		this.getView().select(0);
		Ext.example.msg(msg_title, msg_text);
	},
	onIns : function(){
		var win = Ext.create('mvc.view.pur.PurProtGoodsApplyLine.Win',{
			title : '供应商商品关联>新增',
			parent : this.up('panel')
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
		Ext.example.msg(msg_title, msg_text);
	},
	onUpd : function(){
		var selection = this.getView().getSelectionModel().getSelection()[0];
		this.onUpdWin(selection);
	},
	onUpdRow : function(grid, rowIndex){
		var selection = this.getStore().getAt(rowIndex);
		this.getView().deselect(this.getView().getSelectionModel().getSelection());
		this.getView().select(selection);
		this.onUpdWin(selection);
	},
	onUpdWin : function(selection){
		if (selection){
			mvc.model.pur.PurProtGoodsApplyLine.load(selection.get('bean.pkey'), {
				scope : this,
				failure : function(response, operation) {
					Ext.example.msg(msg_title,msg_ajax);
				},
				success : function(response, operation) {
					Ext.apply(selection.data,response.data);
					var win = Ext.create('mvc.view.pur.PurProtGoodsApplyLine.Win',{
						title : this.title+'>修改',
						insFlag : false
					});
					win.on('create',this.onUpdateRecord,this);
					win.show();
					win.setActiveRecord(selection);
				}
			});
		}
	}
	
});
