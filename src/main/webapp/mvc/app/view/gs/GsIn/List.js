Ext.define('mvc.view.gs.GsIn.List',{
extend : 'Ext.panel.Panel',
oldId : 'GsIn_list_',
loadMask : true,
multiSelect : true,
roles : '',
layout : 'border',
lock : true,
mdSearch : null,
mdAct : null,
mdMain : null,
mdMainTable : null,
mdLineTable : null,
initComponent : function(){
var mainActs = [];		if (this.roles.indexOf('doAppr') != -1)
mainActs.push({
		text : '审核',
		iconCls : 'doAppr-icon',
		itemId : this.oldId+'doAppr',
		scope : this,
		handler : this.onDoAppr,
		disabled : this.lock
	});
		if (this.roles.indexOf('unAppr') != -1)
mainActs.push({
		text : '弃审',
		iconCls : 'unAppr-icon',
		itemId : this.oldId+'unAppr',
		scope : this,
		handler : this.onUnAppr,
		disabled : this.lock
	});
		if (this.roles.indexOf('print') != -1)
mainActs.push({
		text : '打印',
		iconCls : 'print-icon',
		itemId : this.oldId+'print',
		scope : this,
		handler : this.onPrint,
		disabled : this.lock
	});
		this.items =[{
		region : 'north',
		xtype : 'panel',
		border : false,
		items : [{
				xtype : 'toolbar',
				itemId : this.oldId+'search',
				items : [{
						xtype : 'label',
						text : '源单据号：'
					},{
						xtype : 'textfield',
						name : 'origFormNum'
					},'',{
						xtype : 'label',
						text : '仓库：'
					},
						mvc.Tools.crtComboTrigger(true,'gs_GsWarehouse','',{
									name : 'warehouse'
								})
					,'',{
						xtype : 'label',
						text : '状态：'
					},{
						xtype : 'combo',
						name : 'status',
						mode : 'local',
						valueField : 'value',
						triggerAction : 'all',
						forceSelection : true,
						typeAhead : true,
						editable : false,
						emptyText : form_empty_text,
						store : Ext.create('mvc.combo.sys.SysOBillStatus')
					},'',{
						xtype : 'button',
						text : '撤销',
						scope : this,
						iconCls : 'win-close-icon',
						handler : this.onSearchCancel
					},{
						xtype : 'splitbutton',
						text : '搜索',
						scope : this,
						iconCls : 'win-ok-icon',
						handler : this.onSearch,
						menu : [{text:'高级搜索',iconCls : 'win-ok-icon', scope : this,handler: this.onSearchAdv}]
					}]
			},{
				xtype : 'toolbar',
				itemId : this.oldId+'act',
				items : mainActs
			},{
				xtype : 'form',
				itemId :  this.oldId+'main',
				bodyPadding : '5 5 0 5',
				fieldDefaults : {
					anchor : '100%',
					labelWidth : 100,
					width : 275,
					labelAlign : 'right',
					readOnly : true
				},
				items : [{
						xtype : 'fieldset',
						title : '入库单信息',
						collapsible : true,
						layout : {
							type : 'table',
							columns : 3
						},
						items : [{xtype : 'textfield',name : 'bean.code',fieldLabel : '单据号'}
							,{xtype : 'textfield',name : 'bean.origFormNum',fieldLabel : '源单据号'}
							,{xtype : 'textfield',name : 'bean.gsName',fieldLabel : '名称'}
							,
								mvc.Tools.crtComboTrigger(true,'gs_GsWarehouse','',{
											name : 'bean.warehouse',
											fieldLabel : '仓库'
										})
							,
								mvc.Tools.crtComboForm(true,{
											name : 'bean.status',
											fieldLabel : '状态',
											store : Ext.create('mvc.combo.sys.SysOBillStatus')
										})
							,{xtype : 'datefield',name : 'bean.inTime',fieldLabel : '实际入库时间',format : 'Y-m-d H:i:s'}
							,{
								xtype : 'beantrigger',
								name : 'bean.createdBy',
								fieldLabel : '建档员',
								bean : 'SysUser',
								beanType : 'sys',
								emptyText : form_empty_text
							},{xtype : 'datefield',name : 'bean.createdTime',fieldLabel : '建档时间',format : 'Y-m-d H:i:s'}
							,
								mvc.Tools.crtComboTrigger(true,'sys_SysOrg','',{
											name : 'bean.org',
											fieldLabel : '机构'
										})
							]
					}]
			}]
	},{
		region : 'center',
		xtype : 'tabpanel',
		tabBar : {
			style : 'background:#fff'
		},
		items : [{
				xtype : Ext.create('mvc.view.gs.GsIn.ListMain',{
							title : '入库单',
							itemId : this.oldId+'maintable',
							iconCls : 'tab-user-icon',
							roles : this.roles,
							listeners : 		{
				scope : this,
		selectionchange: function(model, records) {
				                    if (records.length === 1){
				                        this.mdMain.getForm().loadRecord(records[0]);
        								this.mdLineTable.store.filter([{'id':'filter', 'property':'pkey','value':records[0].get('bean.pkey')}]);
        								var status = records[0].get('bean.status'); //根据单据状态判断
        								this.onChangeStatus(status);
				                    }else{
				                    	this.mdMain.getForm().reset();
				                    	this.mdLineTable.store.removeAll();
				                    	this.onChangeStatus(-1);
				                    }
				                }
		}

						})
			},{
				xtype : Ext.create('mvc.view.gs.GsIn.ListLineGsInLineView',{
							title : '入库单明细',
							itemId : this.oldId+'linetable',
							iconCls : 'tab-user-icon'
						})
			}]
	}];
		this.callParent(arguments);
		this.mdSearch = this.down('#'+this.oldId+'search');
		this.mdAct = this.down('#'+this.oldId+'act');
		this.mdMain = this.down('#'+this.oldId+'main');
		this.mdMainTable = this.down('#'+this.oldId+'maintable');
		this.mdLineTable = this.down('#'+this.oldId+'linetable');
		mvc.Tools.onENTER2SearchBar(this.mdSearch,this);
		if (mainActs.length == 0)
			this.down('[region=north]').remove(this.mdAct);
},
onChangeStatus : function(status){
		if (this.roles.indexOf('doAppr') != -1)
		this.down('#'+this.oldId+'doAppr').setDisabled(status != STATUS_INIT);
		if (this.roles.indexOf('print') != -1)
		this.down('#'+this.oldId+'print').setDisabled(status != STATUS_INIT && status != STATUS_CHECKED);
		if (this.roles.indexOf('unAppr') != -1)
		this.down('#'+this.oldId+'unAppr').setDisabled(status != STATUS_CHECKED );
},
getStore : function(){
		return this.mdMainTable.store;
},
onDoAppr : function(){
	var selection = this.mdMainTable.getView().getSelectionModel().getSelection()[0];
		this.onApprWin(selection);
},
onApproveRecord : function(form, data){
	var selection = this.mdMainTable.getView().getSelectionModel().getSelection()[0];
	var bean = Ext.create('mvc.model.gs.GsIn', data);
	Ext.apply(selection.data,bean.data);
	selection.commit();
	this.mdMainTable.getSelectionModel().deselectAll();
	this.mdMainTable.getView().select(selection);
},
getGoodsKeys : function(pkey){
	var keys = '';
	Ext.Ajax.request({
		async : false,
		url : base_path+'/gs_GsInLineView_getGoodsKeys?pkey=' + pkey,
		method : 'GET',
		success : function (response, options) {
			keys = response.responseText;
		}
	});
	return keys;
},
onApprWin : function(selection){
	if (selection){
			mvc.model.gs.GsIn.load(selection.get('bean.pkey'), {
				scope : this,
				failure : function(response, operation) {
					Ext.example.msg(msg_title,msg_ajax);
				},
				success : function(response, operation) {
					Ext.apply(selection.data,response.data);
					var win = Ext.create('mvc.view.gs.GsIn.ApprWin',{
						title : this.title+'>审核',
						insFlag : false,
						goodsKeys : this.getGoodsKeys(selection.get('bean.pkey'))
					});
					win.on('create',this.onApproveRecord,this);
					win.show();
					win.setActiveRecord(selection);
				}
			});
		}
},
onUnAppr : function(){
		var selection = this.mdMainTable.getView().getSelectionModel().getSelection()[0];
		var me = this;
		if (selection){
			Ext.MessageBox.confirm(msg_confirm_title, '入库单['+selection.get('bean.code') + '] - 弃审确认吗？',
				function(btn) {
					if (btn != 'yes')
						return;
					Ext.Ajax.request({
						url : base_path+'/gs_GsIn_unapprove?pkey='+selection.get('bean.pkey')+'&rowVersion='+selection.get(BEAN_VERSION),
						success : function (response, options) {
							var result = Ext.decode(response.responseText);
							if (result.success){
								var bean  = Ext.create('mvc.model.gs.GsIn',result);
								Ext.apply(selection.data, bean.data);
								selection.commit();
								me.mdMainTable.getSelectionModel().deselectAll();
								me.mdMainTable.getView().select(selection);
								Ext.example.msg(msg_title, '弃审--成功');
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
			);
		}
},
onPrint : function(){
		var selection = this.mdMainTable.getView().getSelectionModel().getSelection()[0];
		var key = selection.get('bean.pkey');
		window.open('/print/General/PrintReport.jsp?report=GsIn.grf&data=GsIn.jsp&pkey='+key,'_blank');		 
},
onSearchCancel : function(){
		this.mdMainTable.getSelectionModel().deselectAll();
		mvc.Tools.searchClear(this.mdSearch);
		this.mdMainTable.store.clearFilter();
},
onSearch : function(){
		var array = mvc.Tools.searchValues(this.mdSearch);
		this.onSearchDo(array);
},
onSearchAdv : function(){
		var win = Ext.create('mvc.view.gs.GsIn.WinSearch',{
			title : this.title+'>高级搜索',
			listCmp : this
		});
		win.show();
},
onSearchDo : function(array){
		this.mdMainTable.getSelectionModel().deselectAll();
		if (array.length == 0){
			this.mdMainTable.store.clearFilter();
			return;
		}
		this.mdMainTable.store.clearFilter(true);
		this.mdMainTable.store.filter(array);
}
});