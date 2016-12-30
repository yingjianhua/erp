Ext.define('mvc.view.sal.SalCollect.List',{
extend : 'Ext.grid.Panel',
oldId : 'btn_SalCollect',
lock : true,
disableSelection : false,
loadMask : true,
multiSelect : true,
roles : '',
selModel : {selType : 'checkboxmodel'},
viewConfig : {enableTextSelection : true},
initComponent : function(){
var mainActs = [];mainActs.push({
		text : '本日销售查询',
		iconCls : 'search-icon',
		itemId : this.oldId+'fdToday',
		scope : this,
		handler : this.onFdToday
	});
mainActs.push({
		text : '本月销售查询',
		iconCls : 'search-icon',
		itemId : this.oldId+'fdMonth',
		scope : this,
		handler : this.onFdMonth
	});
mainActs.push({
		text : '总账销售查询',
		iconCls : 'search-icon',
		itemId : this.oldId+'fdTotal',
		scope : this,
		handler : this.onFdTotal
	});
mainActs.push({
		text : '制定日期查询',
		iconCls : 'search-icon',
		itemId : this.oldId+'fdLimit',
		scope : this,
		handler : this.onFdLimit
	});
this.columns = [{text : '代码',width : 100,dataIndex : 'bean.code',sortable : true}
	,{text : '名称',width : 100,dataIndex : 'bean.name',sortable : true}
	,{text : '销售总金额',width : 100,dataIndex : 'bean.amtSal',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '退货总金额',width : 100,dataIndex : 'bean.amtRtn',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '全额现金',width : 100,dataIndex : 'bean.amtCash',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '全额赊账',width : 100,dataIndex : 'bean.amtRec',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '回款总额',width : 100,dataIndex : 'bean.amtRecback',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '冲减订金金额',width : 100,dataIndex : 'bean.amtOrder',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	];
		if (mainActs.length > 0)
			this.tbar=mainActs;
		this.store=Ext.create('mvc.store.sal.SalCollect'); 
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
		this.on({cellclick:mvc.Tools.onCellclick});
this.dockedItems=[{
	},{
	}];
		this.callParent(arguments);		mvc.Tools.onENTER2SearchBar(this.down('[dock=top]'),this);},
onLimitRecord : function(form,data){
			this.getStore().loadData(data.items);
},
onFdToday : function(){
		this.onSaveRecord("date=today");
},
onFdMonth : function(){
		this.onSaveRecord("date=month");
},
onFdTotal : function(){
		this.onSaveRecord("date=total");
},
onFdLimit : function(){
		var win = Ext.create('mvc.view.sal.SalCollect.Win',{
			title : this.title+'>查询	'
		});
		win.on('create',this.onLimitRecord,this);
		win.show();
},
onSaveRecord : function(param){
			var me = this;
				Ext.Ajax.request({
					url : base_path+'/sal_SalCollect_list?'+param,
					success : function (response, options) {
						var result = Ext.decode(response.responseText);
						if (result.success){
							me.getStore().loadData(result.items);
						}else{
							Ext.MessageBox.show({ 
								title : msg_title,
								msg : result.msg,
								buttons : Ext.MessageBox.OK,
								icon : Ext.MessageBox.ERROR
							});
						}
					}
				});
}
});