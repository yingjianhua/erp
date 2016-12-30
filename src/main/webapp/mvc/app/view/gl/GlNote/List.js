Ext.define('mvc.view.gl.GlNote.List', {
	extend : 'mvc.tools.RowexpanderGrid',
	oldId : 'btn_GlNote',
	lock : true,
	disableSelection : false,
	loadMask : true,
	multiSelect : true,
	roles : '',
	mdMain : '',
	selModel : {
		selType : 'checkboxmodel'
	},
	initComponent : function() {
		var mainActs = [];
		if (this.roles.indexOf('doAppr') != -1)
			mainActs.push({
						text : '审核',
						iconCls : 'doAppr-icon',
						itemId : this.oldId + 'doAppr',
						scope : this,
						handler : this.onDoAppr
					});
		if (this.roles.indexOf('unAppr') != -1)
			mainActs.push({
						text : '弃审',
						iconCls : 'unAppr-icon',
						itemId : this.oldId + 'unAppr',
						scope : this,
						handler : this.onUnAppr
					});
		this.columns = [{
					text : '凭证',
					width : 80,
					dataIndex : 'bean.bill',
					sortable : true,
					renderer : mvc.Tools.beanRenderer()
				}, {
					text : '单据号',
					width : 140,
					dataIndex : 'bean.code',
					sortable : true
				}, {
					text : '扩展属性表',
					width : 100,
					dataIndex : 'bean.extTable',
					sortable : true,
					renderer : mvc.Tools.beanRenderer(),
					expandCol : true,hidden : true
				}, {
					text : '分户账',
					width : 250,
					dataIndex : 'bean.journal',
					sortable : true,
					renderer : mvc.Tools.beanRendererHref(),
					md : 'gl',
					mn : 'view.gl.GlJournal.List'
				}, {
					text : '借贷标志',
					width : 75,
					dataIndex : 'bean.direct',
					sortable : true,
					renderer : mvc.Tools.optRenderer('gl', 'Gl', 'ODirect')
				}, {
					text : '状态',
					width : 60,
					dataIndex : 'bean.status',
					sortable : true,
					renderer : mvc.Tools.optRenderer('sys', 'Sys',
							'OBillStatus')
				}, {
					text : '金额',
					width : 100,
					dataIndex : 'bean.amt',
					sortable : true,
					renderer : mvc.Tools.numberRenderer(),
					align : 'right'
				}, {
					text : '票据号',
					width : 100,
					dataIndex : 'bean.docNum',
					sortable : true
				}, {
					text : '摘要',
					width : 210,
					dataIndex : 'bean.summary',
					sortable : true
				}, {
					text : '核算单元',
					width : 100,
					dataIndex : 'bean.cell',
					sortable : true,
					renderer : mvc.Tools.beanRendererHref(),
					md : 'sys',
					mn : 'view.sys.SysCell.List',
					expandCol : true,hidden : true
				}, {
					text : '部门',
					width : 100,
					dataIndex : 'bean.dept',
					sortable : true,
					renderer : mvc.Tools.beanRendererHref(),
					md : 'sys',
					mn : 'view.sys.SysDept.List',
					expandCol : true,hidden : true
				}, {
					text : '机构',
					width : 100,
					dataIndex : 'bean.org',
					sortable : true,
					renderer : mvc.Tools.beanRendererHref(),
					md : 'sys',
					mn : 'view.sys.SysOrg.List'
				}, {
					text : '建档员',
					width : 100,
					dataIndex : 'bean.createdBy',
					sortable : true,
					renderer : mvc.Tools.beanRendererHref(),
					md : 'sys',
					mn : 'view.sys.SysUser.List',
					expandCol : true,hidden : true
				}, {
					text : '建档时间',
					width : 140,
					dataIndex : 'bean.createdTime',
					sortable : true,
					renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s'),
					expandCol : true,hidden : true
				}, {
					text : '审核员',
					width : 100,
					dataIndex : 'bean.apprBy',
					sortable : true,
					renderer : mvc.Tools.beanRendererHref(),
					md : 'sys',
					mn : 'view.sys.SysUser.List',
					expandCol : true,hidden : true
				}, {
					text : '审核时间',
					width : 140,
					dataIndex : 'bean.apprTime',
					sortable : true,
					renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s'),
					expandCol : true,hidden : true
				}, {
					text : '备注',
					width : 100,
					dataIndex : 'bean.rem',
					sortable : true,
					expandCol : true,hidden : true
				}, {
					text : '是否自动产生',
					width : 100,
					dataIndex : 'bean.isAuto',
					sortable : true,
					renderer : mvc.Tools.optRenderer('sys', 'Sys', 'OYn')
				}];
		this.store = Ext.create('mvc.store.gl.GlNote');
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
		this.on({cellclick:mvc.Tools.onCellclick});
		this.dockedItems = [{
					dock : 'top',
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
								store : Ext
										.create('mvc.combo.sys.SysOBillStatus')
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
								menu : [{
											text : '高级搜索',
											iconCls : 'win-ok-icon',
											scope : this,
											handler : this.onSearchAdv
										}]
							}]
				}, {
					xtype : 'toolbar',
					itemId : this.oldId + 'act',
					items : mainActs
				}, {
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
				}, {
					xtype : 'pagingtoolbar',
					store : this.store,
					dock : 'bottom',
					displayInfo : true,
					displayMsg : '显示 {0} - {1} 条，共计 {2} 条',
					emptyMsg : '没有数据',
					items : [{
								xtype : Ext.create('mvc.tools.ComboxPaging', {
											myList : this
										})
							}]
				}];
		this.callParent(arguments);
		this.mdSearch = this.down('#'+this.oldId+'search');
		this.mdMain = this.down('#' + this.oldId + 'main');
		mvc.Tools.onENTER2SearchBar(this.mdSearch,this);
	},
	listeners : {
		selectionchange : function(model, records) {
			if (records.length === 1) {
				this.mdMain.getForm().loadRecord(records[0]);
				var status = records[0].get('bean.status'); // 根据单据状态判断
				// 初始状态
				if (status == STATUS_INIT) {
					if (this.roles.indexOf('doAppr') != -1)
						this.down('#' + this.oldId + 'doAppr')
								.setDisabled(false);
					if (this.roles.indexOf('unAppr') != -1)
						this.down('#' + this.oldId + 'unAppr')
								.setDisabled(true);
				} else if (status == STATUS_TALLY) {
					if (this.roles.indexOf('doAppr') != -1)
						this.down('#' + this.oldId + 'doAppr')
								.setDisabled(true);
					if (this.roles.indexOf('unAppr') != -1)
						this.down('#' + this.oldId + 'unAppr')
								.setDisabled(false);
				}
			} else if(records.length >=1){
				this.mdMain.getForm().reset();
				if (this.roles.indexOf('doAppr') != -1)
					this.down('#' + this.oldId + 'doAppr').setDisabled(false);
				if (this.roles.indexOf('unAppr') != -1)
					this.down('#' + this.oldId + 'unAppr').setDisabled(false);
			} else {
				this.mdMain.getForm().reset();
				if (this.roles.indexOf('doAppr') != -1)
					this.down('#' + this.oldId + 'doAppr').setDisabled(true);
				if (this.roles.indexOf('unAppr') != -1)
					this.down('#' + this.oldId + 'unAppr').setDisabled(true);
			}
			if (records.length == 1) {
				var me = this;
				var urlExt = base_path + '/gl_GlNote_loadExt?bean.pkey='
						+ records[0].get('bean.pkey');
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
	},
	onDoAppr : function() {
		var selections = this.getView().getSelectionModel().getSelection();
		var me = this;
		if (selections) {
			Ext.MessageBox.confirm(msg_confirm_title,'记账条 - 审核确认吗？', function(btn) {
				if (btn != 'yes')
					return;
				var arr=new Array();
				var arrv = new Array();
				for(var i = 0; i < selections.length; i++){
					arr.push(selections[i].get('bean.pkey'));
					arrv.push(selections[i].get(BEAN_VERSION));
				}
				Ext.Ajax.request({
					url : base_path+ '/gl_GlNote_approve?pkeys='+arr.toString()+'&rowVersions='+arrv.toString(),
					success : function(response, options) {
						var result = Ext.decode(response.responseText);
						if (result.success) {
							Ext.example.msg(msg_title, '审核--成功');
							if(selections.length>1) {
								me.onSearch();									
							} else {
								var bean = Ext.create('mvc.model.gl.GlNote',result);
								Ext.apply(selections[0].data,bean.data);
								selections[0].commit();
								me.getSelectionModel().deselectAll();
								me.getView().select(selections[0]);
							}
						} else {
							Ext.MessageBox.show({
								title : msg_title,
								msg : result.msg,
								buttons : Ext.MessageBox.OK,
								icon : Ext.MessageBox.ERROR
							});
						}
					}
				});
			});
		}
	},
	onUnAppr : function() {
		var selections = this.getView().getSelectionModel().getSelection();
		var me = this;
		if (selections) {
			Ext.MessageBox.confirm(msg_confirm_title,'记账条 - 弃审确认吗？', function(btn) {
				if (btn != 'yes')
					return;
				var arr=new Array();
				var arrv = new Array();
				for(var i = 0; i < selections.length; i++){
					arr.push(selections[i].get('bean.pkey'));
					arrv.push(selections[i].get(BEAN_VERSION));
				}
				Ext.Ajax.request({
					url : base_path+ '/gl_GlNote_unapprove?pkeys='+arr.toString()+'&rowVersions='+arrv.toString(),
					success : function(response, options) {
						var result = Ext.decode(response.responseText);
						if (result.success) {
							Ext.example.msg(msg_title, '弃审--成功');
							if(selections.length>1) {
								me.onSearch();									
							} else {
								var bean = Ext.create('mvc.model.gl.GlNote',result);
								Ext.apply(selections[0].data,bean.data);
								selections[0].commit();
								me.getSelectionModel().deselectAll();
								me.getView().select(selections[0]);
							}
						} else {
							Ext.MessageBox.show({
								title : msg_title,
								msg : result.msg,
								buttons : Ext.MessageBox.OK,
								icon : Ext.MessageBox.ERROR
							});
						}
					}
				});
			});
		}
	},
	onSearchCancel : function() {
		this.getSelectionModel().deselectAll();

		mvc.Tools.searchClear(this.down('toolbar'));
		this.store.clearFilter();
	},
	onSearch : function() {
		this.getSelectionModel().deselectAll();

		var array = mvc.Tools.searchValues(this.down('toolbar'));
		if (array.length == 0) {
			this.store.clearFilter();
			return;
		}
		this.store.clearFilter(true);
		this.store.filter(array);
	},
	onSearchAdv : function() {
		var win = Ext.create('mvc.view.gl.GlNote.WinSearch', {
					title : this.title + '>高级搜索',
					listCmp : this
				});
		win.show();
	},
	onSearchDo : function(array){
		this.getSelectionModel().deselectAll();
		if (array.length == 0){
			this.store.clearFilter();
			return;
		}
		this.store.clearFilter(true);
		this.store.filter(array);
}
});