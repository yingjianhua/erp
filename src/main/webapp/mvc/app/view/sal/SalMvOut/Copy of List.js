Ext.define('mvc.view.sal.SalMvOut.List',{
extend : 'Ext.panel.Panel',
oldId : 'SalMvOut_list_',
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
var mainActs = [];		if (this.roles.indexOf('ins') != -1)
mainActs.push({
		text : '新增',
		iconCls : 'ins-icon',
		itemId : this.oldId+'ins',
		scope : this,
		handler : this.onIns
	});
		if (this.roles.indexOf('insFd') != -1)
mainActs.push({
		text : '从需求新增',
		iconCls : 'ins-icon',
		itemId : this.oldId+'insFd',
		scope : this,
		handler : this.onInsFd
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
		if (this.roles.indexOf('chk') != -1)
mainActs.push({
		text : '确认',
		iconCls : 'ins-icon',
		itemId : this.oldId+'chk',
		scope : this,
		handler : this.onChk,
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
		if (this.roles.indexOf('cOut') != -1)
mainActs.push({
		text : '产生出库单',
		iconCls : 'ins-icon',
		itemId : this.oldId+'cOut',
		scope : this,
		handler : this.onCOut,
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
						xtype : 'label',
						text : '调入机构：'
					},
						mvc.Tools.crtComboTrigger(true,'sys_SysOrg','',{
									name : 'orgOther'
								})
					,'',{
						xtype : 'label',
						text : '仓库：'
					},
						mvc.Tools.crtComboTrigger(true,'gs_GsWarehouse','',{
									name : 'warehouse'
								})
					,'',{
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
						title : '调出单信息',
						collapsible : true,
						layout : {
							type : 'table',
							columns : 3
						},
						items : [{xtype : 'textfield',name : 'bean.code',fieldLabel : '单据号'}
							,
								mvc.Tools.crtComboForm(true,{
											name : 'bean.status',
											fieldLabel : '状态',
											store : Ext.create('mvc.combo.sys.SysOBillStatus')
										})
							,
								mvc.Tools.crtComboTrigger(true,'gs_GsWarehouse','',{
											name : 'bean.warehouse',
											fieldLabel : '仓库'
										})
							,
								mvc.Tools.crtComboTrigger(true,'sys_SysOrg','',{
											name : 'bean.orgOther',
											fieldLabel : '调入机构'
										})
							,
								mvc.Tools.crtComboTrigger(true,'sys_SysCell','',{
											name : 'bean.cellOther',
											fieldLabel : '调入核算单元'
										})
							,
								mvc.Tools.crtComboForm(true,{
											name : 'bean.fromType',
											fieldLabel : '单据来源',
											store : Ext.create('mvc.combo.sal.SalMvOutOFromType')
										})
							,
								mvc.Tools.crtComboForm(true,{
											name : 'bean.goodsFrom',
											fieldLabel : '货物来源',
											store : Ext.create('mvc.combo.sal.SalMvOutOGoodsFrom')
										})
							,
								mvc.Tools.crtComboForm(true,{
											name : 'bean.billFlag',
											fieldLabel : '开票标准',
											store : Ext.create('mvc.combo.sys.SysOBillFlag')
										})
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
				xtype : Ext.create('mvc.view.sal.SalMvOut.ListMain',{
							title : '调出单',
							itemId : this.oldId+'maintable',
							iconCls : 'tab-user-icon',
							roles : this.roles,
							listeners : 													{
												scope : this,
				                selectionchange: function(model, records) {
				                    if (records.length === 1){
				                        this.mdMain.getForm().loadRecord(records[0]);
        								this.mdLineTable.store.filter([{'id':'filter', 'property':'pkey','value':records[0].get('bean.pkey')}]);
        								var status = records[0].get('bean.status'); //根据单据状态判断
        								var fromType = records[0].get('bean.fromType'); 
        								//初始状态
        							if (status==STATUS_INIT){
	    								if (this.roles.indexOf('upd') != -1)
												this.down('#'+this.oldId+'upd').setDisabled(fromType == 2);
											if (this.roles.indexOf('chk') != -1)
												this.down('#'+this.oldId+'chk').setDisabled(fromType != 2);
											if (this.roles.indexOf('del') != -1)
												this.down('#'+this.oldId+'del').setDisabled(fromType == 2);
											if (this.roles.indexOf('doAppr') != -1)
												this.down('#'+this.oldId+'doAppr').setDisabled(true);
											if (this.roles.indexOf('unAppr') != -1)
												this.down('#'+this.oldId+'unAppr').setDisabled(true);
											if (this.roles.indexOf('cOut') != -1)
												this.down('#'+this.oldId+'cOut').setDisabled(true);
        							}else if (status==STATUS_VERIFIED){
	    								if (this.roles.indexOf('upd') != -1)
												this.down('#'+this.oldId+'upd').setDisabled(fromType == 2);
											if (this.roles.indexOf('chk') != -1)
												this.down('#'+this.oldId+'chk').setDisabled(fromType != 2);
											if (this.roles.indexOf('del') != -1)
												this.down('#'+this.oldId+'del').setDisabled(fromType == 2);
											if (this.roles.indexOf('doAppr') != -1)
												this.down('#'+this.oldId+'doAppr').setDisabled(false);
											if (this.roles.indexOf('unAppr') != -1)
												this.down('#'+this.oldId+'unAppr').setDisabled(true);
											if (this.roles.indexOf('cOut') != -1)
												this.down('#'+this.oldId+'cOut').setDisabled(true);
        							}else if (status==STATUS_APPROVE){
        							if (this.roles.indexOf('upd') != -1)
												this.down('#'+this.oldId+'upd').setDisabled(true);
												if (this.roles.indexOf('chk') != -1)
												this.down('#'+this.oldId+'chk').setDisabled(true);
											if (this.roles.indexOf('del') != -1)
												this.down('#'+this.oldId+'del').setDisabled(true);
											if (this.roles.indexOf('doAppr') != -1)
												this.down('#'+this.oldId+'doAppr').setDisabled(true);
											if (this.roles.indexOf('unAppr') != -1)
												this.down('#'+this.oldId+'unAppr').setDisabled(false);
											if (this.roles.indexOf('cOut') != -1)
												this.down('#'+this.oldId+'cOut').setDisabled(false);
        						}else if (status==STATUS_INOUT){
        							if (this.roles.indexOf('upd') != -1)
												this.down('#'+this.oldId+'upd').setDisabled(true);
											if (this.roles.indexOf('chk') != -1)
												this.down('#'+this.oldId+'chk').setDisabled(true);
											if (this.roles.indexOf('del') != -1)
												this.down('#'+this.oldId+'del').setDisabled(true);
											if (this.roles.indexOf('doAppr') != -1)
												this.down('#'+this.oldId+'doAppr').setDisabled(true);
											if (this.roles.indexOf('unAppr') != -1)
												this.down('#'+this.oldId+'unAppr').setDisabled(false);
											if (this.roles.indexOf('cOut') != -1)
												this.down('#'+this.oldId+'cOut').setDisabled(true);
        								}
                    }else{
                    	this.mdMain.getForm().reset();
                    	this.mdLineTable.store.removeAll();
                    	if (this.roles.indexOf('upd') != -1)
											this.down('#'+this.oldId+'upd').setDisabled(true);
										if (this.roles.indexOf('del') != -1)
											this.down('#'+this.oldId+'del').setDisabled(true);
										if (this.roles.indexOf('doAppr') != -1)
											this.down('#'+this.oldId+'doAppr').setDisabled(true);
										if (this.roles.indexOf('unAppr') != -1)
											this.down('#'+this.oldId+'unAppr').setDisabled(true);
										if (this.roles.indexOf('cOut') != -1)
												this.down('#'+this.oldId+'cOut').setDisabled(true);
				                    }
				                }
					            }

						})
			},{
				xtype : Ext.create('mvc.view.sal.SalMvOut.ListLineSalMvOutLine',{
							title : '调出单明细',
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
getStore : function(){
		return this.mdMainTable.store;
},
onSaveRecord : function(form, data){
		this.mdMainTable.store.insert(0,data);
		this.mdMainTable.getView().select(0);
		Ext.example.msg(msg_title, msg_text);
},
onIns : function(){
		var win = Ext.create('mvc.view.sal.SalMvOut.Win',{
			title : this.title+'>新增'
		});
		win.on('create',this.onSaveRecord,this);
		win.show();
},
onInsFd : function(){
		var win = Ext.create('mvc.view.sal.SalMvOut.WinDemand',{
			title : this.title+'>新增',
			parent : this
		});
		win.show();
},
onUpd : function(){
		var selection = this.mdMainTable.getView().getSelectionModel().getSelection()[0];
		this.mdMainTable.onUpdWin(selection);
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
						url : base_path+'/sal_SalMvOut_delMulti',
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
onChk : function(){
			var selection = this.mdMainTable.getView().getSelectionModel().getSelection()[0];
			this.mdMainTable.onChkWin(selection);
},
onDoAppr : function(){
		var selection = this.mdMainTable.getView().getSelectionModel().getSelection()[0];
		var me = this;
		if (selection){
			Ext.MessageBox.confirm(msg_confirm_title, '调出单['+selection.get('bean.code') + '] - 审核确认吗？',
				function(btn) {
					if (btn != 'yes')
						return;
					Ext.Ajax.request({
						url : base_path+'/sal_SalMvOut_approve?pkey='+selection.get('bean.pkey'),
						success : function (response, options) {
							var result = Ext.decode(response.responseText);
							if (result.success){
								selection.set(BEAN_STATUS, STATUS_CHECKED);
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
			Ext.MessageBox.confirm(msg_confirm_title, '调出单['+selection.get('bean.code') + '] - 弃审确认吗？',
				function(btn) {
					if (btn != 'yes')
						return;
					Ext.Ajax.request({
						url : base_path+'/sal_SalMvOut_unapprove?pkey='+selection.get('bean.pkey'),
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
onCOut : function(){
		var selection = this.mdMainTable.getView().getSelectionModel().getSelection()[0];
		var me = this;
		if (selection){
			Ext.Ajax.request({
				url : base_path+'/sal_SalMvOut_cOut?pkey='+selection.get('bean.pkey'),
				success : function (response, options) {
					var result = Ext.decode(response.responseText);
					if (result.success){
						selection.set(BEAN_STATUS, STATUS_INOUT);
						selection.commit();
						me.mdMainTable.getSelectionModel().deselectAll();
						me.mdMainTable.getView().select(selection);
						Ext.example.msg(msg_title, '产生出库单--成功');
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
},
onSearchCancel : function(){
		mvc.Tools.searchClear(this.mdSearch);
		this.mdMainTable.store.clearFilter();
},
onSearch : function(){
		var array = mvc.Tools.searchValues(this.mdSearch);
		if (array.length == 0){
			this.mdMainTable.store.clearFilter();
			return;
		}
		this.mdMainTable.store.clearFilter(true);
		this.mdMainTable.store.filter(array);
},
onSearchAdv : function(){
		var win = Ext.create('mvc.view.sal.SalMvOut.WinSearch',{
			title : this.title+'>高级搜索',
			listStore : this.mdMainTable.store
		});
		win.show();
}
});