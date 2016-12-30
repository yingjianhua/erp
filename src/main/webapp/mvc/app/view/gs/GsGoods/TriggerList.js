Ext.define('mvc.view.gs.GsGoods.TriggerList',{
extend : 'mvc.tools.RowexpanderGrid',
disableSelection : false,
loadMask : true,
selModel : {selType : 'checkboxmodel'},
oneTdCount : 4,
searchField : null,
initComponent : function(){
this.columns = [{text : '代码',width : 80,dataIndex : 'bean.code',sortable : true,expandCol : true}
	,{text : '货物类别',width : 80,dataIndex : 'bean.kind',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '原代码',width : 80,dataIndex : 'bean.codeOld',sortable : true}
	,{text : '名称',width : 80,dataIndex : 'bean.name',sortable : true,expandCol : true}
	,{text : '快捷键',width : 100,dataIndex : 'bean.shortkey',sortable : true,expandCol : true,hidden : true}
	,{text : '单位',width : 50,dataIndex : 'bean.uom',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '属性名称1',width : 80,dataIndex : 'bean.cust1',sortable : true}
	,{text : '属性名称2',width : 80,dataIndex : 'bean.cust2',sortable : true}
	,{text : '属性名称3',width : 80,dataIndex : 'bean.cust3',sortable : true}
	,{text : '属性名称4',width : 80,dataIndex : 'bean.cust4',sortable : true}
	,{text : '属性名称5',width : 80,dataIndex : 'bean.cust5',sortable : true}
	,{text : '规格',width : 160,dataIndex : 'bean.spec',sortable : true}
	,{text : '单位重量',width : 100,dataIndex : 'bean.weightRate',sortable : true,align : 'right',expandCol : true,hidden : true}
	,{text : '单位体积',width : 100,dataIndex : 'bean.valumeRate',sortable : true,align : 'right',expandCol : true,hidden : true}
	,{text : '描述',width : 100,dataIndex : 'bean.descrip',sortable : true,expandCol : true,hidden : true}
	,{text : '条型码',width : 100,dataIndex : 'bean.barCode',sortable : true,expandCol : true,hidden : true}
	,{text : '可否零库存出库',width : 100,dataIndex : 'bean.zeroOutFlag',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OYn'),expandCol : true,hidden : true}
	,{text : '批次管理类型',width : 100,dataIndex : 'bean.batchType',sortable : true,renderer : mvc.Tools.optRenderer('gs','Gs','OBatchType'),expandCol : true,hidden : true}
	,{text : '经济批量',width : 100,dataIndex : 'bean.economicQty',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right',expandCol : true,hidden : true}
	,{text : '采购提前天数',width : 100,dataIndex : 'bean.purLeadDays',sortable : true,expandCol : true,hidden : true}
	,{text : '启用标志',width : 75,dataIndex : 'bean.enabled',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OEnabled')}
	,{text : '机构',width : 100,dataIndex : 'bean.org',sortable : true,renderer : mvc.Tools.beanRenderer()}
	];
		this.store=Ext.create('mvc.store.gs.GsGoods');this.dockedItems = [{
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
								,{value : 'spec',text : '规格'}
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
		this.getPlugin("rowexpanderplugin").expandOnDblClick=false;
},
listeners : {
	itemdblclick : function(){
			this.onTriggerList();	
}
},
onTriggerList : function(){
			var selection = this.getView().getSelectionModel().getSelection()[0];
		if (selection){
			this.fireEvent('trigger', selection.get('bean.pkey') + bean_split + selection.get('bean.code'), null);
		}
}
});