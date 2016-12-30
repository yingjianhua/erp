Ext.define('mvc.view.gl.GlWriteoff.List',{
extend : 'Ext.panel.Panel',
oldId : 'GlWriteoff_list_',
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
		this.items =[{
		region : 'north',
		xtype : 'panel',
		border : false,
		items : [{
				xtype : 'toolbar',
				itemId : this.oldId+'search',
				items : [{
							xtype : 'label',
							text : '分户账：'
						}, {
							xtype : 'beantrigger',
							name : 'journal',
							bean : 'GlJournal',
							beanType : 'gl',
							emptyText : form_empty_text
						}, '', {
							xtype : 'label',
							text : '状态：'
						}, {
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
						}, '', {
							xtype : 'label',
							text : '金额'
						}, {
							xtype : 'numberfield',
							name : 'amt'
						}, '', {
							xtype : 'button',
							text : '撤销',
							scope : this,
							iconCls : 'win-close-icon',
							handler : this.onSearchCancel
						}, {
							xtype : 'splitbutton',
							text : '搜索',
							scope : this,
							iconCls : 'win-ok-icon',
							handler : this.onSearch,
							menu : [{text : '高级搜索',iconCls : 'win-ok-icon',scope : this,handler : this.onSearchAdv}]
						}]
			},{
				xtype : 'form',
					itemId : this.oldId + 'main',
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
						title : '凭条信息',
						collapsible : true,
						height : 140,
						layout : {
							type : 'table',
							columns : 3
						},
						items : [
								mvc.Tools.crtComboTrigger(true, 'gl_GlJournal',
										'', {
											name : 'bean.journal',
											fieldLabel : '分户账'
										}), mvc.Tools.crtComboForm(true, {
											name : 'bean.direct',
											fieldLabel : '借贷标志',
											store : Ext
													.create('mvc.combo.gl.GlODirect')
										}), mvc.Tools.crtComboForm(true, {
									name : 'bean.status',
									fieldLabel : '状态',
									store : Ext
											.create('mvc.combo.sys.SysOBillStatus')
								}), {
									xtype : 'numberfield',
									name : 'bean.amt',
									fieldLabel : '金额',
									decimalPrecision : 2
								},

								{
									xtype : 'beantrigger',
									name : 'bean.bill',
									fieldLabel : '凭证'
								}, {
									xtype : 'beantrigger',
									name : 'bean.extTable',
									fieldLabel : '扩展对象',
									emptyText : form_empty_text
								}, {
									xtype : 'textfield',
									hidden : true
								}, {
									xtype : 'textfield',
									hidden : true
								}, {
									xtype : 'textfield',
									hidden : true
								}, {
									xtype : 'textfield',
									hidden : true
								}, {
									xtype : 'textfield',
									hidden : true
								}, {
									xtype : 'textfield',
									hidden : true
								}]
					}]
			}]
	},{
		region : 'center',
		xtype : 'tabpanel',
		tabBar : {
			style : 'background:#fff'
		},
		items : [{
				xtype : Ext.create('mvc.view.gl.GlWriteoff.ListMain',{
							title : '销账管理',
							itemId : this.oldId+'maintable',
							iconCls : 'tab-user-icon',
							roles : this.roles,
							listeners : {
								scope : this,
								selectionchange: function(model, records) {
								if (records.length === 1){
									this.mdMain.getForm().loadRecord(records[0]);
									this.mdLineTable.onUpdate(records[0].get('bean.pkey'));
									//this.mdLineTable.store.filter([{'id':'filter', 'property':'pkey','value':records[0].get('bean.pkey')}]);
								}else{
									this.mdMain.getForm().reset();
									this.mdLineTable.store.removeAll();
								}
								if (records.length == 1) {
									var me = this;
									var urlExt = base_path + '/gl_GlNote_loadExt?bean.pkey='+ records[0].get('bean.pkey');
									Ext.Ajax.request({
												//async : false, // 加上同步限制后，单元格之间切换会中断
												url : urlExt,
												method : 'GET',
												success : function(response) {
													rtn = Ext.JSON.decode(response.responseText,
															true);
													if (rtn.success) {
														var resText = response.responseText;
														resText = resText.replace(/[\"\{\}]/g, '');
														var array = resText.split(',');
														var form = me.mdMain.getForm();
														var key = [];
														var value = [];
														var j = 0;
														Ext.Array.each(array, function(line) {
																	var res = line.split(':');
																	if (res[0] != 'success') {
																		key[j] = res[0];
																		value[j] = res[1];
																		j++;
																	}
																});
														me.mdMain.getForm().getFields().each(
																function(item, index) {
																	if (index >= 6) {
																		if (key[index - 6] !== undefined) {
																			item.setFieldLabel(key[index- 6]);
																			item.setValue(value[index- 6]+ "");
																			item.show();
																		} else {
																			item.hide();
																		}
																	}
																})
													} else {
														Ext.MessageBox.show({
																	title : msg_title,
																	msg : rtn.msg,
																	buttons : Ext.MessageBox.OK,
																	icon : Ext.MessageBox.ERROR
																});
													}
												},
												failure : function(response) {
													Ext.example.msg(msg_title, msg_ajax);
												}
											});
									me.doLayout();
								} else {
									this.mdMain.getForm().getFields().each(
										function(item, index) {
											if (index >= 6) {
												item.hide();
											}
										})
								}
							}
      					 }
					})
			},{
				xtype : Ext.create('mvc.view.gl.GlWriteoff.ListLineGlWriteoffLine',{
							title : '核销明细',
							itemId : this.oldId+'linetable',
							iconCls : 'tab-user-icon'
						})
			}]
	}];
		this.callParent(arguments);
		this.mdSearch = this.down('#'+this.oldId+'search');
		this.mdMain = this.down('#'+this.oldId+'main');
		this.mdMainTable = this.down('#'+this.oldId+'maintable');
		this.mdLineTable = this.down('#'+this.oldId+'linetable');
		mvc.Tools.onENTER2SearchBar(this.mdSearch,this);
},
getStore : function(){
		return this.mdMainTable.store;
},
onSaveRecord : function(form, data){
		this.mdMainTable.store.insert(0,data);
		this.mdMainTable.getView().select(0);
		Ext.example.msg(msg_title, msg_text);
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
		var win = Ext.create('mvc.view.gl.GlJournal.WinSearch',{
			title : this.title+'>高级搜索',
			listStore : this.mdMainTable.store
		});
		win.show();
}
});