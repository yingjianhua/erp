Ext.define('mvc.view.pur.PurMvIn.WinDirect',{
extend : 'Ext.window.Window',
width : 700,
resizable : false,
modal : true,
iconCls : 'app-icon',
pkeyFlag : true,
demandStore : null,
supplierStore : null,
insFlag : true,
warehouse : null,
tmp : null,
parent : null,
supplier : null,
initComponent : function(){
	
	this.demandStore=Ext.create('mvc.store.gs.GsDemandDirect');
	this.demandStore.proxy.url = base_path + '/gs_GsDemandDirect_listCrt';
	this.demandStore.remoteFilter = true;
	this.demandStore.proxy.filterParam = 'filter';
	this.demandStore.filter([{'id':'filter', 'property':'status','value':'11'}]);
	this.items =[Ext.create('Ext.grid.Panel', {
						height : 400,
						itemId : 'directGrid',
						store : this.demandStore,
						multiSelect : true,
						selModel : {selType : 'checkboxmodel'},
						columns : [
									{text : '源单据',width : 160,dataIndex : 'bean.origForm',sortable : true,renderer : mvc.Tools.beanRenderer()},
									{text : '源单据号',width : 120,dataIndex : 'bean.origFormNum',sortable : true},
						            {text : '机构',width : 100,dataIndex : 'bean.org',sortable : true,renderer : mvc.Tools.beanRenderer()},
						            {text : '核算单元',width : 100,dataIndex : 'bean.cell',sortable : true,renderer : mvc.Tools.beanRenderer()},
						            {text : '建档员',width : 100,dataIndex : 'bean.createdBy',sortable : true,renderer : mvc.Tools.beanRenderer()},
						            {text : '建档时间',width : 140,dataIndex : 'bean.createdTime',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s')}

								]
					})
			         
				];
	
	this.buttonAlign = 'right',
	this.buttons =[{
			text : '关闭',
			iconCls : 'win-close-icon',
			scope : this,
			handler : this.onClose
		},{
			text : '确定',
			iconCls : 'win-save-icon',
			scope : this,
			handler : this.onSave
		}];
	
	this.callParent(arguments);
},
onClose : function(){
	this.close();
},
onSearch : function(){
	var array = mvc.Tools.searchValues(this.down('toolbar'));
	if (array.length == 0){
		this.demandStore.removeAll();
		return;
	}
	this.warehouse = array[0].value;
	array.push({id:'status',property:'status',value:'11'});
	this.demandStore.clearFilter(true);
	this.demandStore.filter(array);
},
onSave : function(){
	//var ws = 
	var win = Ext.create('mvc.view.pur.PurMvIn.Win',{
		title : '调入直销>新增',
		insFd : true
	});
	win.on('create',this.parent.onSaveRecord,this.parent);
	var selections = this.down('#directGrid').getView().getSelectionModel().getSelection();
	if(selections.length > 0){
		win.show();
		win.setActiveRecordInsDr(this.warehouse,selections[0].get('bean.pkey'));
		this.close();
	}
}
});