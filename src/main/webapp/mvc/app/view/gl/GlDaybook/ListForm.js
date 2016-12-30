Ext.define('mvc.view.gl.GlDaybook.ListForm',{
extend : 'Ext.grid.Panel',
oldId : 'btn_FrmPending',
lock : true,
disableSelection : false,
loadMask : true,
multiSelect : true,
roles : '',
selModel : {selType : 'checkboxmodel'},
descType : 6201, //目标单据类型
descUrl : 'cst_CstSalInvoice_ins',
initComponent : function(){
	var mData = [
		{text : '销售模块', value :"70" },
		{text : '采购模块', value : "68"},
		{text : '成本模块', value : "62"},
		{text : '出纳模块', value : "26"},
		{text : '应付模块', value : "44"},
		{text : '应收模块', value : "46"},
		{text : '财务模块', value : "22"}
	]
	var bData = [
		{text : '销售订单',  value: 7001},
		{text : '销售单',  value: 7002},
        {text : '直销单',  value: 7004},
        {text : '退货单',  value: 7003},
        {text : '赠送单',  value: 7005},
        {text : '调出单',  value: 7014},
        
        {text : '采购订单',  value: 6801},
		{text : '收货单',  value: 6802},
		{text : '采购退货单', value : 6803},
		{text : '受赠单',  value: 6804},
		{text : '调入单',  value: 6809},
		{text : '采购直销单',  value: 6810},
		
		{text : "销售发票汇总单", value : 6201},
		{text : "销售红字发票汇总单", value : 6202},
		{text : "采购发票汇总单", value : 6203},
		{text : "采购红字发票汇总单", value : 6204},
		{text : "调入发票汇总单", value : 6205},
		{text : "调出发票汇总单", value : 6206},
		{text : "出库核算单", value : 6207},
		{text : "红字出库核算单", value : 6208},
		{text : "入库核算单", value : 6209},
		{text : "红字入库核算单", value : 6210},

		{text : "资金调拨单", value : 2605},
		{text : "付款单", value : 2613},
		{text : "收款单", value : 2614},
		
		{text : "应付单", value : 4411},
		{text : "应付核销单", value : 4412},
		{text : "其他应付单", value : 4415},
		{text : "其他应付核销单", value : 4416},
		{text : "预付单", value : 4418},
		{text : "预付核销单", value : 4419},
		{text : "应收单", value : 4611},
		{text : "应收核销单", value : 4612},
		{text : "其他应收单", value : 4615},
		{text : "其他应收核销单", value : 4616},
		{text : "预收单", value : 4618},
		{text : "预收核销单", value : 4619},

		{text : "内转单", value : 2204}
	]
var mainActs = [];this.columns = [{text : '源单据',width : 80,dataIndex : 'bean.origForm',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '源单据号',width : 120,dataIndex : 'bean.origFormNum',sortable : true}
	,{text : '金额',width : 120,dataIndex : 'one.amt',sortable : true,renderer : mvc.Tools.numberRenderer(), align:'right'}
	,{text : '机构',width : 100,dataIndex : 'bean.org',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '核算单元',width : 100,dataIndex : 'bean.cell',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '创建用户',width : 100,dataIndex : 'bean.userCrt',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '建档时间',width : 140,dataIndex : 'bean.createdTime',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s')}
	];
		this.tbar=mainActs;
		this.store=Ext.create('mvc.store.frm.FrmPending'); 
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
		this.store.proxy.url = base_path + '/gl_GlDaybook_listPending';
this.dockedItems=[{
		dock : 'top',
		xtype : 'toolbar',
		items : [{
			xtype : 'hiddenfield',
			name : 'descType',
			value : this.descType
		},{
			xtype : 'label',
			text : '模块：'
		},{
			xtype : 'combo',
			name : 'module',
			mode : 'local',
			valueField : 'value',
			triggerAction : 'all',
			forceSelection : true,
			typeAhead : true,
			editable : false,
			emptyText : form_empty_text,
			store : Ext.create('Ext.data.Store', {
				fields : ['text', 'value'],
				data : mData
			}),
			listeners : {
				change : {
					scope :this,
					fn : function(eOpts){
						this.down('combo[name=bill]').reset();
					}
				}
			}
		},'',{
			xtype : 'label',
			text : '单据类型：'
		},{
			xtype : 'combo',
			name : 'bill',
			mode : 'local',
			valueField : 'value',
			triggerAction : 'all',
			forceSelection : true,
			typeAhead : true,
			editable : false,
			emptyText : form_empty_text,
			store : Ext.create('Ext.data.Store', {
				fields : ['text', 'value'],
				data : bData
			}),
			listeners : {
				expand : {
					scope :this,
					fn : function(eOpts){
						this.createFilter(eOpts);
					}
				},
				collapse : {
					scope : this,
					fn : function(eOpts) {
						this.clearFilter(eOpts);
					}
				}
			}
		},'',{
			xtype : 'button',
			text : '搜索',
			scope : this,
			iconCls : 'win-ok-icon',
			handler : this.onSearch
		},'->',{
			xtype : 'button',
			text : '保存',
			scope : this,
			iconCls : 'win-save-icon',
			handler : this.onSave
		}]
	}];
		this.callParent(arguments);
		var bill = this.down('combo[name=bill]');
	},
clearFilter : function(eOpts){//清除filter函数
	var basekeyStore = eOpts.getStore();
    basekeyStore.snapshot = basekeyStore.realSnapshot;   
    delete basekeyStore.realSnapshot;   
    basekeyStore.clearFilter();
},
createFilter : function(eOpts){//创建filter函数   
	var module = this.down('combo[name=module]');
	if(!module.value) return;
	var basekeyStore = eOpts.getStore();
    basekeyStore.filter('value', new RegExp("^"+module.value));   
    basekeyStore.realSnapshot = basekeyStore.snapshot;   
    basekeyStore.snapshot = basekeyStore.data;   
},
conditionChange : function (search) {
	if(search == "module") {
		var module = this.down('combo[name=module]');
		if(!module.value) return;
		var bill = this.down('combo[name=bill]');
		
		bill.getStore().clearFilter(true);
		this.doLayout();
		console.log(bill.getStore());
		bill.getStore().filter("value",new RegExp("^"+module.value));
		console.log(bill.getStore());
	}else if(search == "bill") {
		Ext.example.msg("","bill");
	}
},
onSearch : function(){
    var module = this.down("combo[name=module]");
    var bill = this.down("combo[name=bill]");
    if(bill.value) {
    	this.store.clearFilter(true);
    	this.store.filter({id : bill.getName(), property : bill.getName(), value : bill.getValue()});
    } else if(module.value) {
    	this.store.clearFilter(true);
    	this.store.filter({id : module.getName(), property : module.getName(), value : module.getValue()});
    } else {
	    this.store.clearFilter();
    }
},
onSave : function(){
	var selections = this.getView().getSelectionModel().getSelection();
	if (selections.length == 0){
		Ext.MessageBox.show({
			title : msg_title,
			msg : '请至少选择一条单据!',
			buttons : Ext.MessageBox.OK,
			icon : Ext.MessageBox.ERROR
		});
		return;
	}
	var arr = new Array(),formv;
	for (var i=0; i<selections.length; i++){
		formv = selections[i].get('bean.origForm');
		arr.push(formv.split(bean_split)[0]);
	}
	var me = this;
	Ext.Ajax.request({
		async : false,
		url : base_path + '/' + this.descUrl,
		params : { formIds : arr.toString() },
		success : function(response) {
			rtn = Ext.JSON.decode(response.responseText, true);
			if (rtn.success){
				var win = me.up('window');
				win.fireEvent('create', win, rtn);
				win.close();
			}else{
				Ext.MessageBox.show({
					title : msg_title, 
					msg : rtn.msg,
					buttons : Ext.MessageBox.OK,
					icon : Ext.MessageBox.ERROR
				});
			}
		}
	});
}
});