Ext.define('mvc.view.gs.GsGoodsKind.TriggerList',{
extend : 'Ext.grid.Panel',
disableSelection : false,
loadMask : true,
selModel : {selType : 'checkboxmodel'},
viewConfig : {enableTextSelection : true},
searchField : null,
initComponent : function(){
this.columns = [{text : '代码',width : 100,dataIndex : 'bean.code',sortable : true}
	,{text : '上级类别',width : 100,dataIndex : 'bean.parent',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '类型',width : 100,dataIndex : 'bean.type',sortable : true,renderer : mvc.Tools.optRenderer('gs','Gs','OType')}
	,{text : '名称',width : 100,dataIndex : 'bean.name',sortable : true}
	,{text : '快捷键',width : 100,dataIndex : 'bean.shortkey',sortable : true}
	,{text : '属性名称1',width : 100,dataIndex : 'bean.cust1',sortable : true}
	,{text : '属性名称2',width : 100,dataIndex : 'bean.cust2',sortable : true}
	,{text : '属性名称3',width : 100,dataIndex : 'bean.cust3',sortable : true}
	,{text : '属性名称4',width : 100,dataIndex : 'bean.cust4',sortable : true}
	,{text : '属性名称5',width : 100,dataIndex : 'bean.cust5',sortable : true}
	,{text : '存货科目别名',width : 100,dataIndex : 'bean.subjectAlias',sortable : true}
	,{text : '更新员',width : 75,dataIndex : 'bean.updateby',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '更新时间',width : 140,dataIndex : 'bean.updatedTime',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s')}
	];
		this.store=Ext.create('mvc.store.gs.GsGoodsKind');this.dockedItems = [{
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