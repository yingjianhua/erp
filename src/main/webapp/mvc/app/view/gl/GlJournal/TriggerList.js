Ext.define('mvc.view.gl.GlJournal.TriggerList',{
extend : 'Ext.grid.Panel',
disableSelection : false,
loadMask : true,
selModel : {selType : 'checkboxmodel'},
viewConfig : {enableTextSelection : true},
searchField : null,
initComponent : function(){
this.columns = [{text : '代码',width : 130,dataIndex : 'bean.code',sortable : true}
	,{text : '名称',width : 250,dataIndex : 'bean.name',sortable : true}
	,{text : '余额',width : 100,dataIndex : 'bean.balance',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '核算单元',width : 150,dataIndex : 'bean.cell',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '科目字典',width : 100,dataIndex : 'bean.subject',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '币种',width : 100,dataIndex : 'bean.currency',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OCurrency')}
	,{text : '可用余额',width : 100,dataIndex : 'bean.balanceUse',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right',expandCol : true,hidden : true}
	,{text : '状态',width : 60,dataIndex : 'bean.state',sortable : true,renderer : mvc.Tools.optRenderer('gl','Gl','OJlState')}
	,{text : '机构',width : 100,dataIndex : 'bean.org',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '备注',width : 100,dataIndex : 'bean.rem',sortable : true,expandCol : true,hidden : true}
	,{text : '计息标志',width : 100,dataIndex : 'bean.interestAccrual',sortable : true,renderer : mvc.Tools.optRenderer('gl','Gl','OInterestAccrual'),expandCol : true,hidden : true}
	,{text : '冻结标志',width : 100,dataIndex : 'bean.frostFlag',sortable : true,renderer : mvc.Tools.optRenderer('gl','Gl','OFrostFlag'),expandCol : true,hidden : true}
	,{text : '账户类型',width : 100,dataIndex : 'bean.accType',sortable : true,renderer : mvc.Tools.optRenderer('gl','Gl','OAccType'),expandCol : true,hidden : true}
	,{text : '表内标志',width : 100,dataIndex : 'bean.inFlag',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OYn'),expandCol : true,hidden : true}
	,{text : '借贷标志',width : 100,dataIndex : 'bean.direct',sortable : true,renderer : mvc.Tools.optRenderer('gl','Gl','ODirect')}
	,{text : '明细账金额类型',width : 100,dataIndex : 'bean.accJournalType',sortable : true,renderer : mvc.Tools.optRenderer('gl','Gl','OAccJournalType'),expandCol : true,hidden : true}
	,{text : '记明细汇总标志',width : 100,dataIndex : 'bean.tallyFlag',sortable : true,renderer : mvc.Tools.optRenderer('gl','Gl','OTallyFlag'),expandCol : true,hidden : true}
	];
		this.store=Ext.create('mvc.store.gl.GlJournal');this.dockedItems = [{
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
							data : [{value : 'code',text : '代码'}
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