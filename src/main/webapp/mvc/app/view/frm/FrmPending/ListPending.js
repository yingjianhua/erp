Ext.define('mvc.view.frm.FrmPending.ListPending',{
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
	var data;
	if(this.descType == 6201) {
		data = [
				{text : '销售单',   value: 7002},
	            {text : '直销单',  value: 7004}
			];
	} else if(this.descType == 6202) {
		data = [
				{text: '退货单', value : 7003}
			];
	} else if(this.descType == 6203) {
		data = [
				{text: '收货单', value : 6802},
				{text: '采购直销单', value : 6810}
			];
	} else if(this.descType == 6204) {
		data = [
				{text: '采购退货单', value : 6803}
			];
	} else if(this.descType == 6205) {
		data = [
				{text: '调入单', value : 6809}
			];
	} else if(this.descType == 6206) {
		data = [
				{text: '调出单', value : 7014}
			];
	} else if(this.descType == 6207) {
		data = [
				{text : '销售单',  value: 7002},
	            {text : '直销单',  value: 7004},
	            {text : '赠送单',  value: 7005},
	            {text : '调出单',  value: 7014},
	            {text : '盘亏单',  value: 2454},
				{text : '合并单',  value: 2459},
				{text : '拆分单',  value: 2460}
			];
	} else if(this.descType == 6208) {
		data = [
				{text : '退货单',  value: 7003}
			];
	} else if(this.descType == 6209) {
		data = [
				{text : '收货单',  value: 6802},
				{text : '受赠单',  value: 6804},
				{text : '调入单',  value: 6809},
				{text : '采购直销单',  value: 6810},
				{text : '盘盈单',  value: 2453},
				{text : '合并单',  value: 2459},
				{text : '拆分单',  value: 2460}
			];
	} else if(this.descType == 6210) {
		data = [
				{text : '采购退货单',  value: 6803}
			];
	} else if(this.descType == 2203) {
		data = [
				{text : '销售订单',  value: 7002},//
				{text : '销售单',  value: 7002},
	            {text : '直销单',  value: 7004},
	            {text : '退货单',  value: 7003},
	            {text : '赠送单',  value: 7005},
	            {text : '调出单',  value: 7014},
	            
	            {text : '采购订单',  value: 6802},//
				{text : '收货单',  value: 6802},
				{text : '采购退货单', value : 6803},
				{text : '受赠单',  value: 6804},
				{text : '调入单',  value: 6809},
				{text : '采购直销单',  value: 6810},
				
				{text : "成本模块所有"},
				{text : "资金调拨"},
				{text : "收款单"},
				{text : "付款单"},
				{text : "应收应付所有"},
				{text : "内转单"}
			]
	}
	var myStore = Ext.create('Ext.data.Store', {
		fields : ['text', 'value'],
		data : data
	});
var mainActs = [];this.columns = [{text : '源单据',width : 80,dataIndex : 'bean.origForm',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '源单据号',width : 135,dataIndex : 'bean.origFormNum',sortable : true}
	,{text : '金额',width : 120,dataIndex : 'one.amt',sortable : true,renderer : mvc.Tools.numberRenderer(), align:'right'}
	,{text : '机构',width : 100,dataIndex : 'bean.org',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '核算单元',width : 100,dataIndex : 'bean.cell',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '创建用户',width : 100,dataIndex : 'bean.userCrt',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '建档时间',width : 140,dataIndex : 'bean.createdTime',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s')}
	,{text : '备注',width : 150,dataIndex : 'bean.rem',sortable : true}
	];
		this.tbar=mainActs;
		this.store=Ext.create('mvc.store.frm.FrmPending'); 
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
		this.store.proxy.url = base_path + '/frm_FrmPending_listOut';
this.dockedItems=[{
		dock : 'top',
		xtype : 'toolbar',
		items : [{
			xtype : 'hiddenfield',
			name : 'descType',
			value : this.descType
		},{
			xtype : 'label',
			text : '单据类型：'
		},{
			xtype : 'combo',
			name : 'type',
			mode : 'local',
			valueField : 'value',
			triggerAction : 'all',
			forceSelection : true,
			typeAhead : true,
			editable : false,
			emptyText : form_empty_text,
			store : myStore
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
	},
	
onSearch : function(){
	var array = mvc.Tools.searchValues(this.down('toolbar'));
	if (array.length == 0){
		this.store.clearFilter();
		return;
	}
	this.store.clearFilter(true);
	this.store.filter(array);
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