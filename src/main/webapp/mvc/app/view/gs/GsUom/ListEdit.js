Ext.define('mvc.view.gs.GsUom.ListEdit',{
extend : 'Ext.grid.Panel',
disableSelection : false,
loadMask : true,
cellEditing : Ext.create('Ext.grid.plugin.CellEditing', { clicksToEdit: 1 }),
mainPkey : null,
initComponent : function(){
var mainActs =[{
		text : '新增',
		iconCls : 'ins-icon',
		scope : this,
		handler : this.onIns
	},{
		text : '删除',
		iconCls : 'del-icon',
		scope : this,
		handler : this.onDel
	},'->',{
		text : '保存',
		iconCls : 'win-save-icon',
		scope : this,
		handler : this.onSave
	},{
		text : '重置',
		iconCls : 'win-refresh-icon',
		scope : this,
		handler : this.onReset
	}];
			if (this.isEdit)
				this.tbar=mainActs;
this.columns = [{text : '名称',width : 100,dataIndex : 'bean.name',sortable : true,editor : {}
		}
	,{text : '快捷键',width : 100,dataIndex : 'bean.shortkey',sortable : true,editor : {}
		}
	,{text : '转换率',width : 100,dataIndex : 'bean.rate',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right',editor : {xtype : 'numberfield',decimalPrecision : 4}
		}
	,{text : '启用标志',width : 75,dataIndex : 'bean.enabled',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OEnabled'),editor : mvc.Tools.crtComboForm(true,{
						name : 'bean.enabled',
						store : Ext.create('mvc.combo.sys.SysOEnabled')
					})
		}
	,{text : '备注',width : 100,dataIndex : 'bean.rem',sortable : true,editor : {}
		}
	];
		this.store=Ext.create('mvc.store.gs.GsUom');
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
		this.dockedItems=[{
		dock : 'top',
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
		if (this.isEdit)
			this.plugins = [this.cellEditing];
		this.callParent(arguments);
},
onIns : function(){
		var model = Ext.create('mvc.store.gs.GsUom');
        this.store.insert(0, model);
        this.cellEditing.startEditByPosition({row: 0, column: 0});
},
onDel : function(){
		var selection = this.getView().getSelectionModel().getSelection();
		if (selection)
			this.getStore().remove(selection);
},
onSave : function(){
		this.cellEditing.cancelEdit();
		var me = this,
			rtn,flds,
			syncValues = {};
		flds = this.store.model.getFields();
		rtn  = mvc.Tools.syncValues(this.store.getNewRecords(),flds,'insLines');
		Ext.apply(syncValues, rtn);
		rtn  = mvc.Tools.syncValues(this.store.getUpdatedRecords(),flds,'updLines');
		Ext.apply(syncValues, rtn);
		rtn  = mvc.Tools.syncValues(this.store.getRemovedRecords(),flds,'delLines');
		Ext.apply(syncValues, rtn);
		var change = false;
		for(var tmp in syncValues){
			change = true;
			break;
		}
		if (change){
			Ext.Ajax.request({
				url : base_path+'/gs_GsUom_sync?mainPkey='+me.mainPkey,
				params : syncValues,
				success : function (response, options) {
					var result = Ext.decode(response.responseText);
					if (result.success){
						me.onReset();
						Ext.example.msg(msg_title, msg_text);
					}else{
						Ext.MessageBox.show({ 
							title : msg_title,
							msg : result.msg,
							buttons : Ext.MessageBox.OK,
							icon : Ext.MessageBox.ERROR
						});
					}
				}
			});
		}
},
onReset : function(){
		this.store.filter([{'id':'main','property':'uomType','value':this.mainPkey}]);
},
onLoadFirst : function(){
		if (this.isLoadFirst)
			return;
		this.isLoadFirst = true;
		this.onReset();
}
});