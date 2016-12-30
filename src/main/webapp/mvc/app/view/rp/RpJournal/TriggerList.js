Ext.define('mvc.view.rp.RpJournal.TriggerList',{
extend : 'Ext.grid.Panel',
disableSelection : false,
loadMask : true,
selModel : {selType : 'checkboxmodel'},
viewConfig : {enableTextSelection : true},
searchField : null,
initComponent : function(){
this.columns = [{text : '代码',width : 120,dataIndex : 'bean.code',sortable : true}
	,{text : '名称',width : 150,dataIndex : 'bean.name',sortable : true}
	,{text : '今日余额',width : 100,dataIndex : 'bean.balance',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '昨天余额',width : 100,dataIndex : 'bean.yestodayBalance',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '今日收入笔数',width : 100,dataIndex : 'bean.drQty',sortable : true}
	,{text : '今日收入金额',width : 100,dataIndex : 'bean.drAmt',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '今日支出笔数',width : 100,dataIndex : 'bean.crQty',sortable : true}
	,{text : '今日支出金额',width : 100,dataIndex : 'bean.crAmt',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '银行名称',width : 100,dataIndex : 'bean.bankName',sortable : true}
	,{text : '银行账号',width : 100,dataIndex : 'bean.bankAccCode',sortable : true}
	,{text : '账户名称',width : 100,dataIndex : 'bean.bankAccName',sortable : true}
	,{text : '所属工作箱',width : 100,dataIndex : 'bean.workBox',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '出纳',width : 75,dataIndex : 'bean.cashier',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '机构',width : 100,dataIndex : 'bean.org',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '核算单元',width : 100,dataIndex : 'bean.cell',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '备注',width : 100,dataIndex : 'bean.rem',sortable : true}
	,{text : '账户类型',width : 100,dataIndex : 'bean.rpJournalType',sortable : true,renderer : mvc.Tools.optRenderer('rp','Rp','ORpJournalType')}
	,{text : '启用标志',width : 75,dataIndex : 'bean.enabled',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OEnabled')}
	];
		this.store=Ext.create('mvc.store.rp.RpJournal');this.dockedItems = [{
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