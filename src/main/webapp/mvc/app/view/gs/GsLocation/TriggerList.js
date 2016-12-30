Ext.define('mvc.view.gs.GsLocation.TriggerList',{
extend : 'Ext.grid.Panel',
disableSelection : false,
loadMask : true,
selModel : {selType : 'checkboxmodel'},
viewConfig : {enableTextSelection : true},
searchField : null,
initComponent : function(){
this.columns = [{text : '仓库',width : 100,dataIndex : 'bean.warehouse',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '名称',width : 100,dataIndex : 'bean.name',sortable : true}
	,{text : '总可用重量',width : 100,dataIndex : 'bean.weight',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'}
	,{text : '已用重量',width : 100,dataIndex : 'bean.weightUsed',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'}
	,{text : '可用重量',width : 100,dataIndex : 'bean.weightAvail',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'}
	,{text : '总可用体积',width : 100,dataIndex : 'bean.valume',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'}
	,{text : '已用体积',width : 100,dataIndex : 'bean.valumeUsed',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'}
	,{text : '可用体积',width : 100,dataIndex : 'bean.valumeAvail',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'}
	,{text : '备注',width : 100,dataIndex : 'bean.rem',sortable : true}
	,{text : '启用标志',width : 75,dataIndex : 'bean.enabled',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OEnabled')}
	];
		this.store=Ext.create('mvc.store.gs.GsLocation');this.dockedItems = [{
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
				value : 'name',
				store:	Ext.create('Ext.data.Store',{
							fields :  ['value', 'text'],
							data : [{value : 'name',text : '名称'}
								,{value : 'rem',text : '备注'}
								]
						}),
				listeners : {
					scope : this,
					change : function(field,newv,oldv,opts) {	this.searchField.flds = newv; }
				}
			},'=',{
				width : 250,
				xtype : 'irilleSearchfield',
				flds : 'name',
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