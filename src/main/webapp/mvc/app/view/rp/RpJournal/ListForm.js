Ext.define('mvc.view.rp.RpJournal.ListForm',{
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
		this.tbar = mainActs;		this.columns =[{text : '机构',width : 100,dataIndex : 'bean.org',sortable : true,renderer : mvc.Tools.beanRenderer(),editor : {xtype : 'combotriggercell',mode : 'local',valueField : 'value',triggerAction : 'all',typeAhead : true,editable : false,store : Ext.create('mvc.store.ComboTrigger',{actUrl:'sys_SysOrg',actWhere:''}),emptyText : form_empty_text}
		}
	,{text : '核算单元',width : 100,dataIndex : 'bean.cell',sortable : true,renderer : mvc.Tools.beanRenderer(),editor : {xtype : 'combotriggercell',mode : 'local',valueField : 'value',triggerAction : 'all',typeAhead : true,editable : false,store : Ext.create('mvc.store.ComboTrigger',{actUrl:'sys_SysCell',actWhere:''}),emptyText : form_empty_text}
		}
	,{text : '出纳日记账',width : 100,dataIndex : 'bean.journal',sortable : true,renderer : mvc.Tools.beanRenderer(),editor : {xtype : 'beantriggercell',bean : 'RpJournal',beanType : 'rp',beanName : 'bean.journal',grid : this,emptyText : form_empty_text}
		}
	,{text : '凭证',width : 80,dataIndex : 'bean.bill',sortable : true,renderer : mvc.Tools.beanRenderer(),editor : {xtype : 'beantrigger'}
		}
	,{text : '交易类型',width : 100,dataIndex : 'bean.type',sortable : true,editor : {}
		}
	,{text : '金额',width : 100,dataIndex : 'bean.amt',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right',editor : {xtype : 'numberfield',decimalPrecision : 2}
		}
	,{text : '收付标志',width : 100,dataIndex : 'bean.dC',sortable : true,renderer : mvc.Tools.optRenderer('rp','RpJournalLine','ODC'),editor : mvc.Tools.crtComboForm(true,{
						name : 'bean.dC',
						store : Ext.create('mvc.combo.rp.RpJournalLineODC')
					})
		}
	,{text : '余额',width : 100,dataIndex : 'bean.balance',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right',editor : {xtype : 'numberfield',decimalPrecision : 2}
		}
	,{text : '票据号',width : 100,dataIndex : 'bean.doc',sortable : true,editor : {}
		}
	,{text : '摘要',width : 100,dataIndex : 'bean.summary',sortable : true,editor : {}
		}
	,{text : '出纳',width : 75,dataIndex : 'bean.cashier',sortable : true,renderer : mvc.Tools.beanRenderer(),editor : {xtype : 'beantriggercell',bean : 'SysUser',beanType : 'sys',beanName : 'bean.cashier',grid : this,emptyText : form_empty_text}
		}
	,{text : '建档时间',width : 140,dataIndex : 'bean.createdTime',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s'),editor : {xtype : 'datefield',format : 'Y-m-d H:i:s'}
		}
	,{text : '凭条',width : 100,dataIndex : 'bean.note',sortable : true,renderer : mvc.Tools.beanRenderer(),editor : {xtype : 'beantriggercell',bean : 'GlNote',beanType : 'gl',beanName : 'bean.note',grid : this,emptyText : form_empty_text}
		}
	];
		this.store=Ext.create('mvc.store.rp.RpJournalLine');
		this.store.pageSize = 0;
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
		this.plugins = [this.cellEditing];
		this.callParent(arguments);	
},
onIns : function(){
		var model = Ext.create('mvc.store.rp.RpJournalLine');
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