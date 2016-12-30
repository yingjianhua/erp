Ext.define('mvc.view.rp.RpWorkBoxGoods.TriggerList',{
extend : 'Ext.grid.Panel',
disableSelection : false,
loadMask : true,
selModel : {selType : 'checkboxmodel'},
viewConfig : {enableTextSelection : true},
searchField : null,
initComponent : function(){
this.columns = [{text : '物品',width : 80,dataIndex : 'bean.boxGoods',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '物品名称',width : 100,dataIndex : 'bean.name',sortable : true}
	,{text : '当前保管人',width : 75,dataIndex : 'bean.userSys',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '入箱日期',width : 100,dataIndex : 'bean.date',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d')}
	,{text : '备注',width : 100,dataIndex : 'bean.rem',sortable : true}
	];
		this.store=Ext.create('mvc.store.rp.RpWorkBoxGoods');this.dockedItems = [{
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
							data : [{value : 'name',text : '物品名称'}
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
			this.fireEvent('trigger', selection.get('bean.pkey') + bean_split + selection.get('bean.boxGoods'), null);
		}
}
});