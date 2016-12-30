Ext.define('mvc.view.frm.FrmPending.HandTriggerList',{
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
this.columns = [{text : '源单据',width : 100,dataIndex : 'bean.origForm',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '源单据号',width : 120,dataIndex : 'bean.origFormNum',sortable : true}
	,{text : '机构',width : 100,dataIndex : 'bean.org',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '创建用户',width : 100,dataIndex : 'bean.userCrt',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '建档时间',width : 140,dataIndex : 'bean.createdTime',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s')}
	];
		this.store=Ext.create('mvc.store.frm.FrmPending');
		this.store.proxy.url = base_path + '/frm_FrmPending_listHand';
		this.store.pageSize = 0;
		this.store.load();
		this.dockedItems = [{
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
				value : 'origFormNum',
				store:	Ext.create('Ext.data.Store',{
							fields :  ['value', 'text'],
							data : [{value : 'origFormNum',text : '源单据号'}
							]
						}),
				listeners : {
					scope : this,
					change : function(field,newv,oldv,opts) {	this.searchField.flds = newv; }
				}
			},'=',{
				width : 250,
				xtype : 'irilleSearchfield',
				flds : 'origFormNum',
				store : this.store
			},'->',{
				xtype : 'button',
				text : '确定',
				scope : this,
				iconCls : 'win-ok-icon',
				handler : this.onTrigger
			}]
	}];
		this.callParent(arguments);
		this.searchField = this.down('irilleSearchfield');
},
listeners : {
	itemdblclick : function(){
			this.onTrigger();	
}
},
onTrigger : function(){
	var selection = this.getView().getSelectionModel().getSelection();
	var result = [];
	if (selection){
		for(i = 0; i < selection.length; i++) {
			result.push({'bean.form':selection[i].get('bean.origForm'),'bean.formNum':selection[i].get('bean.origFormNum')});
		}
		this.fireEvent('trigger', result, null);
	}
}
});