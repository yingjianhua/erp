Ext.define('mvc.view.gl.GlSubject.TriggerList',{
extend : 'Ext.grid.Panel',
disableSelection : false,
loadMask : true,
selModel : {selType : 'checkboxmodel'},
viewConfig : {enableTextSelection : true},
searchField : null,
initComponent : function(){
this.columns = [{text : '财务模板',width : 100,dataIndex : 'bean.templat',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '上级科目',width : 100,dataIndex : 'bean.subjectUp',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '科目号',width : 100,dataIndex : 'bean.code',sortable : true}
	,{text : '名称',width : 100,dataIndex : 'bean.name',sortable : true}
	,{text : '分类',width : 100,dataIndex : 'bean.subjectKind',sortable : true,renderer : mvc.Tools.optRenderer('gl','Gl','OSubjectKind')}
	,{text : '币种',width : 100,dataIndex : 'bean.currency',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OCurrency')}
	,{text : '借贷标志',width : 75,dataIndex : 'bean.direct',sortable : true,renderer : mvc.Tools.optRenderer('gl','Gl','ODirect')}
	,{text : '是否汇总科目',width : 100,dataIndex : 'bean.totalFlag',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OYn')}
	,{text : '启用标志',width : 75,dataIndex : 'bean.enabled',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OEnabled')}
	,{text : '明细账金额类型',width : 100,dataIndex : 'bean.accJournalType',sortable : true,renderer : mvc.Tools.optRenderer('gl','Gl','OAccJournalType')}
	,{text : '记明细汇总标志',width : 100,dataIndex : 'bean.tallyFlag',sortable : true,renderer : mvc.Tools.optRenderer('gl','Gl','OTallyFlag')}
	,{text : '应用范围',width : 100,dataIndex : 'bean.useScope',sortable : true,renderer : mvc.Tools.optRenderer('gl','Gl','OUseScope')}
	,{text : '账户类型',width : 100,dataIndex : 'bean.accType',sortable : true,renderer : mvc.Tools.optRenderer('gl','Gl','OAccType')}
	,{text : '可否自动建账户',width : 100,dataIndex : 'bean.autoCrt',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OYn')}
	,{text : '是否设销账',width : 100,dataIndex : 'bean.writeoffFlag',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OYn')}
	,{text : '表内标志',width : 100,dataIndex : 'bean.inFlag',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OYn')}
	,{text : '备注',width : 100,dataIndex : 'bean.rem',sortable : true}
	];
		this.store=Ext.create('mvc.store.gl.GlSubject');this.dockedItems = [{
		dock : 'top',
		xtype : 'toolbar',
		items : ["搜索：",{
				xtype : 'combo',
				mode : 'local',
				valueField : 'value',
				triggerAction : 'all',
				forceSelection : true,
				typeAhead : true,
				editable : false,
				width : 100,
				value : 'code',
				store:	Ext.create('Ext.data.Store',{
							fields :  ['value', 'text'],
							data : [{value : 'code',text : '科目号'}
								,{value : 'name',text : '名称'}
								]
						}),
				listeners : {
					scope : this,
					change : function(field,newv,oldv,opts) {	this.searchField.flds = newv; }
				}
			},'=',{
				width : 250,
				xtype : 'irilleSearchfield',
				flds : 'code',
				store : this.store
			},'->',{
				xtype : 'button',
				text : '确定',
				scope : this,
				iconCls : 'win-ok-icon',
				handler : this.onTriggerList
			}]
	},{
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
		this.callParent(arguments);
		this.searchField = this.down('irilleSearchfield');
},
listeners : {
	itemdblclick : function(){
			this.onTriggerList();	
}
},
onTriggerList : function(){
			var selection = this.getView().getSelectionModel().getSelection()[0];
		if (selection){
			this.fireEvent('trigger', selection.get('bean.pkey') + bean_split + selection.get('bean.name'), null);
		}
}
});