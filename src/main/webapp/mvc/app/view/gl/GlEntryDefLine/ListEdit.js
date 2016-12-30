Ext.define('mvc.view.gl.GlEntryDefLine.ListEdit',{
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
this.columns = [{text : '数据行下标',width : 100,dataIndex : 'bean.lineId',sortable : true,editor : {xtype : 'numberfield',allowDecimals : false}
		}
	,{text : '账号来源',width : 100,dataIndex : 'bean.accSource',sortable : true,renderer : mvc.Tools.optRenderer('gl','Gl','OAccSource'),editor : mvc.Tools.crtComboForm(true,{
						name : 'bean.accSource',
						store : Ext.create('mvc.combo.gl.GlOAccSource')
					})
		}
	,{text : '源别名或科目号',width : 100,dataIndex : 'bean.sourceAliasOrSubject',sortable : true,editor : {}
		}
	,{text : '目标别名',width : 100,dataIndex : 'bean.targetAlias',sortable : true,editor : {}
		}
	,{text : '借贷标志',width : 100,dataIndex : 'bean.direct3',sortable : true,renderer : mvc.Tools.optRenderer('gl','Gl','ODirect3'),editor : mvc.Tools.crtComboForm(true,{
						name : 'bean.direct3',
						store : Ext.create('mvc.combo.gl.GlODirect3')
					})
		}
	,{text : '金额表达式',width : 100,dataIndex : 'bean.amtExpr',sortable : true,editor : {}
		}
	,{text : '金额可否为负数',width : 100,dataIndex : 'bean.negativeAble',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OYn'),editor : mvc.Tools.crtComboForm(true,{
						name : 'bean.negativeAble',
						store : Ext.create('mvc.combo.sys.SysOYn')
					})
		}
	];
		this.store=Ext.create('mvc.store.gl.GlEntryDefLine');
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
		var model = Ext.create('mvc.store.gl.GlEntryDefLine');
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
		var me = this;
			Ext.Ajax.request({
				url : base_path+'/gl_GlEntryDefLine_sync?mainPkey='+me.mainPkey,
				params : mvc.Tools.storeValues(this.store),
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
},
onReset : function(){
		this.store.filter([{'id':'main','property':'pkey','value':this.mainPkey}]);
},
onLoadFirst : function(){
		if (this.isLoadFirst)
			return;
		this.isLoadFirst = true;
		this.onReset();
}
});