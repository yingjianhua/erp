Ext.define('mvc.view.gs.GsUom.TriggerList',{
	extend : 'Ext.grid.Panel',
	disableSelection : false,
	loadMask : true,
	selModel : {selType : 'checkboxmodel'},
	viewConfig : {
		trackOver : false,
		stripeRows : true
	},
	searchField : null,
	initComponent : function(){
		this.columns = [{text : '计量单位类型', width : 100, dataIndex : 'bean.uomType', sortable : true, renderer : mvc.Tools.beanRenderer()},
			{text : '名称', width : 100, dataIndex : 'bean.name', sortable : true},
			{text : '快捷键', width : 100, dataIndex : 'bean.shortkey', sortable : true},
			{text : '转换率', width : 100, dataIndex : 'bean.rate', sortable : true},
			{text : '启用标志', width : 100, dataIndex : 'bean.enabled', sortable : true, renderer : mvc.Tools.optRenderer('sys','Sys','OEnabled')},
			{text : '备注', width : 100, dataIndex : 'bean.rem', sortable : true}];
		this.store=Ext.create('mvc.store.gs.GsUom');
		this.dockedItems=[{
			dock : 'top',
			xtype : 'toolbar',
			items : ["搜索：",{
				xtype:          'combo',
                mode:           'local',
                valueField:     'value',
                triggerAction:  'all',
                forceSelection: true,
                typeAhead: true,
                editable:       false,
                width : 100,
                value : 'name',
                store:	Ext.create('Ext.data.Store',{
					fields : ['value', 'text'],
					data : [
						{value : 'name', text : '名称'},
						{value : 'shortkey', text : '快捷键'}
					]
				}),
				listeners : {
					scope : this,
					change : function(field,newv,oldv,opts) {
						this.searchField.flds = newv;
					}
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
				handler : this.onTrigger
			}]
		},{
			xtype : 'pagingtoolbar',
			store : this.store,
			dock : 'bottom',
			displayInfo : true,
			displayMsg : '显示 {0} - {1} 条，共计 {2} 条',
			emptyMsg : '没有数据',
			items : [{xtype : Ext.create('mvc.tools.ComboxPaging',{myList : this})}]
		}];
		this.callParent(arguments);
		this.searchField = this.down('irilleSearchfield');
	},
	listeners : {
		itemdblclick : function() {
			this.onTrigger();
		}
	},
	onTrigger : function(){
		var selection = this.getView().getSelectionModel().getSelection()[0];
		if (selection){
			this.fireEvent('trigger', selection.get('bean.pkey') + bean_split + selection.get('bean.name'), null);
		}
	}
});
