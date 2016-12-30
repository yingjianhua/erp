Ext.define('mvc.view.pur.PurOrder.List',{
extend : 'Ext.panel.Panel',
oldId : 'PurOrder_list_',
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
var mainActs = [];		
if (this.roles.indexOf('ins') != -1)
	mainActs.push({
			text : '新增',
			iconCls : 'ins-icon',
			itemId : this.oldId+'ins',
			scope : this,
			handler : this.onIns
		});
if (this.roles.indexOf('upd') != -1)
	mainActs.push({
			text : '修改',
			iconCls : 'upd-icon',
			itemId : this.oldId+'upd',
			scope : this,
			handler : this.onUpd,
			disabled : this.lock
		});
if (this.roles.indexOf('del') != -1)
	mainActs.push({
			text : '删除',
			iconCls : 'del-icon',
			itemId : this.oldId+'del',
			scope : this,
			handler : this.onDel,
			disabled : this.lock
		});
if (this.roles.indexOf('checkPrice') != -1)
	mainActs.push({
			text : '核价',
			iconCls : 'doAppr-icon',
			itemId : this.oldId+'checkPrice',
			scope : this,
			handler : this.onCheckPrice,
			disabled : this.lock
		});
if (this.roles.indexOf('doAppr') != -1)
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

if (this.roles.indexOf('close') != -1)
	mainActs.push({
			text : '关闭',
			iconCls : 'upd-icon',
			itemId : this.oldId+'close',
			scope : this,
			handler : this.onDoClose,
			disabled : this.lock
		});
if (this.roles.indexOf('open') != -1)
	mainActs.push({
			text : '打开',
			iconCls : 'upd-icon',
			itemId : this.oldId+'open',
			scope : this,
			handler : this.onDoOpen,
			disabled : this.lock
		});
if (this.roles.indexOf('doNote') != -1)
	mainActs.push({
			text : '便签',
			iconCls : 'doNote-icon',
			itemId : this.oldId+'doNote',
			scope : this,
			handler : this.onDoNote,
			disabled : this.lock
		});
if (this.roles.indexOf('doTally') != -1)
	mainActs.push({
			text : '记账',
			iconCls : 'doTally-icon',
			itemId : this.oldId+'doTally',
			scope : this,
			handler : this.onDoTally,
			disabled : this.lock
		});
if (this.roles.indexOf('unTally') != -1)
	mainActs.push({
			text : '记账取消',
			iconCls : 'unTally-icon',
			itemId : this.oldId+'unTally',
			scope : this,
			handler : this.onUnTally,
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
					text : '单据号：'
				},{
					xtype : 'textfield',
					name : 'code'
				},'',{
					xtype : 'label',
					text : '供应商名称：'
				},{
					xtype : 'textfield',
					name : 'name'
				},'',{
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
					eitable : false,
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
					title : '采购订单信息',
					collapsible : true,
					layout : {
						type : 'table',
						columns : 3
					},
					items : [{xtype : 'textfield',name : 'bean.code',fieldLabel : '单据号'}
						,
					mvc.Tools.crtComboTrigger(true,'sys_SysSupplier','',{
								name : 'bean.supplier',
								fieldLabel : '供应商',
								listeners :{
									render : function(e){
										e.getEl().on('click',function(e){
											if(!e.ctrlKey)
												return;
											if(!this.value)
												return;
											var record;
											Ext.Ajax.request({
												async : false,
												url : base_path + '/sys_SysMenu_loadMenu?type=sys',
												method : 'GET',
												scope : this,
												success : function(response) {
													var rtn = Ext.decode(response.responseText, true);
													Ext.each(rtn,function(a){
														if(a.url='view.sys.SysSupplier.List')
															record = a;
													});
												},
												failure : function(response) {
													Ext.example.msg(msg_title, msg_ajax);
												}
											});
											
											var mainTab = Ext.getCmp('mainTab');
											var tab = mainTab.getComponent(record.id);
											if (!tab) {
												var p = {
													title : record.text,
													id : record.id,
													iconCls : 'tab-user-icon',
													roles : record.roles,
													menuType : record.beanType, //用于TAB点击时，自动跳到对应的菜单模块下
													closable : true,
													autoDestroy:true
												};
												var url = "mvc." + record.url;
												var list = Ext.create(url, p);
												list.store.filter([{'id':'filter', 'property':'pkey','value':this.value}]);
												tab = mainTab.add(list);
											}
											mainTab.setActiveTab(tab);
										},this)
									},
									keypress : function(field,e) {
										if(e.getKey() != 13 || !e.ctrlKey)
											return;
										if(!field.value)
											return;
										var record;
										Ext.Ajax.request({
											async : false,
											url : base_path + '/sys_SysMenu_loadMenu?type=sys',
											method : 'GET',
											scope : this,
											success : function(response) {
												var rtn = Ext.decode(response.responseText, true);
												Ext.each(rtn,function(a){
													if(a.url='view.sys.SysSupplier.List')
														record = a;
												});
											},
											failure : function(response) {
												Ext.example.msg(msg_title, msg_ajax);
											}
										});
										
										var mainTab = Ext.getCmp('mainTab');
										var tab = mainTab.getComponent(record.id);
										if (!tab) {
											var p = {
												title : record.text,
												id : record.id,
												iconCls : 'tab-user-icon',
												roles : record.roles,
												menuType : record.beanType, //用于TAB点击时，自动跳到对应的菜单模块下
												closable : true,
												autoDestroy:true
											};
											var url = "mvc." + record.url;
											var list = Ext.create(url, p);
											list.store.filter([{'id':'filter', 'property':'pkey','value':field.value}]);
											tab = mainTab.add(list);
										}
										mainTab.setActiveTab(tab);
									}
								}
							})
						,{xtype : 'textfield',name : 'bean.supname',fieldLabel : '供应商名称'}
						,mvc.Tools.crtComboTrigger(true,'gs_GsWarehouse','',{
							name : 'bean.warehouse',
							fieldLabel : '仓库'
						})
						,{xtype : 'numberfield',name : 'bean.amt',fieldLabel : '金额',decimalPrecision : 2}
						,{xtype : 'numberfield',name : 'bean.amtCost',fieldLabel : '合计费用',decimalPrecision : 2}
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
			xtype : Ext.create('mvc.view.pur.PurOrder.ListMain',{
						title : '采购订单',
						itemId : this.oldId+'maintable',
						iconCls : 'tab-user-icon',
						roles : this.roles,
						listeners : {
		 					scope : this,
			                selectionchange: function(model, records) {
			                    if (records.length === 1){
			                        this.mdMain.getForm().loadRecord(records[0]);
    								this.mdLineTable.store.filter([{'id':'filter', 'property':'pkey','value':records[0].get('bean.pkey')}]);
    								var status = records[0].get('bean.status'); //根据单据状态判断
    								var ordStatus = records[0].get('bean.ordStatus'); //根据单据状态判断
    								this.onChangeStatus(status, ordStatus);
			                    }else{
			                    	this.mdMain.getForm().reset();
			                    	this.mdLineTable.store.removeAll();
			                    	this.onChangeStatus(-1, -1);
			                    }
			                }
		                }

					})
		},{
			xtype : Ext.create('mvc.view.pur.PurOrder.ListLinePurOrderLine',{
						title : '采购订单明细',
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
},
onChangeStatus : function(status,ordStatus){
	if (this.roles.indexOf('upd') != -1)
		this.down('#'+this.oldId+'upd').setDisabled(status != STATUS_INIT);
	if (this.roles.indexOf('del') != -1)
		this.down('#'+this.oldId+'del').setDisabled(status != STATUS_INIT);
	if (this.roles.indexOf('checkPrice') != -1)
		this.down('#'+this.oldId+'checkPrice').setDisabled(status != STATUS_INIT && status != STATUS_VERIFIED);
	if (this.roles.indexOf('doAppr') != -1)
		this.down('#'+this.oldId+'doAppr').setDisabled(status != STATUS_VERIFIED);
	if (this.roles.indexOf('unAppr') != -1)
		this.down('#'+this.oldId+'unAppr').setDisabled(status != STATUS_TALLY || ordStatus != 1 && status <= STATUS_TALLY);
	if (this.roles.indexOf('doNote') != -1)
		this.down('#'+this.oldId+'doNote').setDisabled(status != STATUS_TALLY);
	if (this.roles.indexOf('doTally') != -1)
		this.down('#'+this.oldId+'doTally').setDisabled(status != STATUS_TALLY);
	if (this.roles.indexOf('unTally') != -1)
		this.down('#'+this.oldId+'unTally').setDisabled(status != STATUS_DONE);
	if (this.roles.indexOf('close') != -1)
		this.down('#'+this.oldId+'close').setDisabled(status != STATUS_CHECKED || ordStatus != 1 && status < STATUS_TALLY);
	if (this.roles.indexOf('open') != -1)
		this.down('#'+this.oldId+'open').setDisabled(ordStatus != 2);
},
getStore : function(){
		return this.mdMainTable.store;
},
onSaveRecord : function(form, data){
		this.mdMainTable.store.insert(0,data);
		this.mdMainTable.getView().select(0);
		Ext.example.msg(msg_title, msg_text);
},
onIns : function(){
		var win = Ext.create('mvc.view.pur.PurOrder.WinDemand',{
			title : this.title+'>新增',
			parent : this
		});
		win.show();
},
onUpd : function(){
		var selection = this.mdMainTable.getView().getSelectionModel().getSelection()[0];
		this.mdMainTable.onUpdWin(selection);
},
onCheckPrice : function(){
	var selection = this.mdMainTable.getView().getSelectionModel().getSelection()[0];
	this.mdMainTable.onCheckPriceWin(selection);
},
onDel : function(){
		var selection = this.mdMainTable.getView().getSelectionModel().getSelection();
		if (selection){
			var me = this;
			Ext.MessageBox.confirm(msg_confirm_title, msg_confirm_msg, 
				function(btn) {
					if (btn != 'yes')
						return;
					var arr=new Array();
					for(var i = 0; i < selection.length; i++){
						arr.push(selection[i].get('bean.pkey'));
					}
					Ext.Ajax.request({
						url : base_path+'/pur_PurOrder_delMulti',
						params : { pkeys : arr.toString() },
						success : function (response, options) {
							var result = Ext.decode(response.responseText);
							if (result.success){
								me.mdMainTable.getStore().remove(selection);
								Ext.example.msg(msg_title, msg_del);
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
onDoAppr : function(){
		var selection = this.mdMainTable.getView().getSelectionModel().getSelection()[0];
		var me = this;
		if (selection){
			Ext.MessageBox.confirm(msg_confirm_title, 'pur['+selection.get('bean.code') + '] - 审核确认吗？',
				function(btn) {
					if (btn != 'yes')
						return;
					Ext.Ajax.request({
						url : base_path+'/pur_PurOrder_approve?pkey='+selection.get('bean.pkey'),
						success : function (response, options) {
							var result = Ext.decode(response.responseText);
							if (result.success){
								selection.set(BEAN_STATUS, STATUS_TALLY);
								selection.commit();
								me.mdMainTable.getSelectionModel().deselectAll();
								me.mdMainTable.getView().select(selection);
								Ext.example.msg(msg_title, '审核--成功');
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
onUnAppr : function(){
		var selection = this.mdMainTable.getView().getSelectionModel().getSelection()[0];
		var me = this;
		if (selection){
			Ext.MessageBox.confirm(msg_confirm_title, 'pur['+selection.get('bean.code') + '] - 弃审确认吗？',
				function(btn) {
					if (btn != 'yes')
						return;
					Ext.Ajax.request({
						url : base_path+'/pur_PurOrder_unapprove?pkey='+selection.get('bean.pkey'),
						success : function (response, options) {
							var result = Ext.decode(response.responseText);
							if (result.success){
								selection.set(BEAN_STATUS, STATUS_VERIFIED);
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
onDoClose : function(){
	var selection = this.mdMainTable.getView().getSelectionModel().getSelection()[0];
	var me = this;
	if (selection){
		Ext.MessageBox.confirm(msg_confirm_title, '采购订单['+selection.get('bean.code') + '] - 确认关闭吗？',
			function(btn) {
				if (btn != 'yes')
					return;
				Ext.Ajax.request({
					url : base_path+'/pur_PurOrder_close?pkey='+selection.get('bean.pkey'),
					success : function (response, options) {
						var result = Ext.decode(response.responseText);
						if (result.success){
							selection.set("bean.ordStatus", 2);
							selection.commit();
							me.mdMainTable.getSelectionModel().deselectAll();
							me.mdMainTable.getView().select(selection);
							Ext.example.msg(msg_title, '关闭--成功');
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
onDoOpen : function(){
	var selection = this.mdMainTable.getView().getSelectionModel().getSelection()[0];
	var me = this;
	if (selection){
		Ext.MessageBox.confirm(msg_confirm_title, '采购订单['+selection.get('bean.code') + '] - 确认关闭吗？',
				function(btn) {
			if (btn != 'yes')
				return;
			Ext.Ajax.request({
				url : base_path+'/pur_PurOrder_open?pkey='+selection.get('bean.pkey'),
				success : function (response, options) {
					var result = Ext.decode(response.responseText);
					if (result.success){
						selection.set("bean.ordStatus", 1);
						selection.commit();
						me.mdMainTable.getSelectionModel().deselectAll();
						me.mdMainTable.getView().select(selection);
						Ext.example.msg(msg_title, '打开--成功');
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
onDoNote : function(){
	var selection = this.mdMainTable.getView().getSelectionModel().getSelection()[0];
	if (selection){
		var win = Ext.create('mvc.view.gl.GlNote.WinNote',{
			title : this.title+'>记账便签',
			insFlag : false,
			tableCode : 'irille.pss.pur.PurOrder'
		});
		win.show();
		win.setActiveRecord(selection);
	}
},
onDoTally : function(){
	var selection = this.mdMainTable.getView().getSelectionModel().getSelection()[0];
	var me = this;
	if (selection){
		Ext.MessageBox.confirm(msg_confirm_title, '销售订单['+selection.get('bean.code') + '] - 记账确认吗？',
			function(btn) {
				if (btn != 'yes')
					return;
				Ext.Ajax.request({
					url : base_path+'/pur_PurOrder_tally?pkey='+selection.get('bean.pkey'),
					success : function (response, options) {
						var result = Ext.decode(response.responseText);
						if (result.success){
							selection.set(BEAN_STATUS, result.status);
							selection.commit();
							me.mdMainTable.getSelectionModel().deselectAll();
							me.mdMainTable.getView().select(selection);
							Ext.example.msg(msg_title, '记账--成功');
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
onUnTally : function(){
	var selection = this.mdMainTable.getView().getSelectionModel().getSelection()[0];
	var me = this;
	if (selection){
		Ext.MessageBox.confirm(msg_confirm_title, '销售订单['+selection.get('bean.code') + '] - 记账取消确认吗？',
			function(btn) {
				if (btn != 'yes')
					return;
				Ext.Ajax.request({
					url : base_path+'/pur_PurOrder_untally?pkey='+selection.get('bean.pkey'),
					success : function (response, options) {
						var result = Ext.decode(response.responseText);
						if (result.success){
							selection.set(BEAN_STATUS, result.status);
							selection.commit();
							me.mdMainTable.getSelectionModel().deselectAll();
							me.mdMainTable.getView().select(selection);
							Ext.example.msg(msg_title, '记账取消--成功');
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
onSearchCancel : function(){
	this.mdMainTable.getSelectionModel().deselectAll();
		mvc.Tools.searchClear(this.mdSearch);
		this.mdMainTable.store.clearFilter();
},
onSearch : function(){
	this.mdMainTable.getSelectionModel().deselectAll();
		var array = mvc.Tools.searchValues(this.mdSearch);
		if (array.length == 0){
			this.mdMainTable.store.clearFilter();
			return;
		}
		this.mdMainTable.store.clearFilter(true);
		this.mdMainTable.store.filter(array);
},
onSearchAdv : function(){
		var win = Ext.create('mvc.view.pur.PurOrder.WinSearch',{
			title : this.title+'>高级搜索',
			listStore : this.mdMainTable.store
		});
		win.show();
}
});