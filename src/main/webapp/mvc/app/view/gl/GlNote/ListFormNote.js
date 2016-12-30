Ext.define('mvc.view.gl.GlNote.ListFormNote', {
	extend : 'mvc.tools.RowexpanderGridForNote',
	disableSelection : false,
	loadMask : true,
	cellEditing : Ext.create('Ext.grid.plugin.CellEditing', {
				clicksToEdit : 1
			}),
	mainPkey : null,
	tableCode : null,
	selModel : {
		selType : 'checkboxmodel'
	},
	initComponent : function() {
		var mainActs = [{
					text : '新增',
					iconCls : 'ins-icon',
					scope : this,
					handler : this.onIns
				}, {
					text : '删除',
					iconCls : 'del-icon',
					itemId : this.oldId + 'del',
					scope : this,
					handler : this.onDel,
					disabled : true
				}, {
					xtype : 'splitbutton',
					text : '应收应付',
					iconCls : 'ins-icon',
					// itemId : this.oldId + 'ins',
					scope : this,
					menu : [{
								text : '应付单',
								iconCls : 'ins-icon',
								scope : this,
								bill : 'PyaPayBill',
								handler : this.onInsExt
							}, {
								text : '应付核销单',
								iconCls : 'ins-icon',
								scope : this,
								bill : 'PyaPayWriteoffBill',
								handler : this.onInsExt
							}, {
								text : '其他应付单',
								iconCls : 'ins-icon',
								scope : this,
								bill : 'PyaPayOtherBill',
								handler : this.onInsExt
							}, {
								text : '其他应付核销单',
								iconCls : 'ins-icon',
								scope : this,
								bill : 'PyaPayOtherWriteoffBill',
								handler : this.onInsExt
							}, {
								text : '预付单',
								iconCls : 'ins-icon',
								scope : this,
								bill : 'PyaPayDepBill',
								handler : this.onInsExt
							}, {
								text : '预付核销单',
								iconCls : 'ins-icon',
								scope : this,
								bill : 'PyaPayDepWriteoffBill',
								handler : this.onInsExt
							}, {
								text : '应收单',
								iconCls : 'ins-icon',
								scope : this,
								bill : 'RvaRecBill',
								handler : this.onInsExt
							}, {
								text : '应收核销单',
								iconCls : 'ins-icon',
								scope : this,
								bill : 'RvaRecWriteoffBill',
								handler : this.onInsExt
							}, {
								text : '其他应收单',
								iconCls : 'ins-icon',
								scope : this,
								bill : 'RvaRecOtherBill',
								handler : this.onInsExt
							}, {
								text : '其他应收核销单',
								iconCls : 'ins-icon',
								scope : this,
								bill : 'RvaRecOtherWriteoffBill',
								handler : this.onInsExt
							}, {
								text : '预收单',
								iconCls : 'ins-icon',
								scope : this,
								bill : 'RvaRecDepBill',
								handler : this.onInsExt
							}, {
								text : '预收核销单',
								iconCls : 'ins-icon',
								scope : this,
								bill : 'RvaRecDepWriteoffBill',
								handler : this.onInsExt
							}]
				}, {
					xtype : 'splitbutton',
					text : '出纳管理',
					iconCls : 'ins-icon',
					scope : this,
					menu : [{
								text : '付款单',
								iconCls : 'ins-icon',
								scope : this,
								bill : 'RpNotePayBill',
								handler : this.onInsExt
							}, {
								text : '收款单',
								iconCls : 'ins-icon',
								scope : this,
								bill : 'RpNoteRptBill',
								handler : this.onInsExt
							}]
				}, '->', {
					text : '关闭',
					iconCls : 'win-close-icon',
					scope : this,
					handler : this.onClose
				}];
		this.tbar = mainActs;
		this.columns = [{
					text : '分户账',
					width : '27%',
					dataIndex : 'bean.journal',
					sortable : true,
					renderer : mvc.Tools.beanRenderer()
				}, {
					text : '借贷标志',
					width : 65,
					dataIndex : 'bean.direct',
					sortable : true,
					renderer : mvc.Tools.optRenderer('gl', 'Gl', 'ODirect')
				}, {
					text : '金额',
					width : '11%',
					dataIndex : 'bean.amt',
					sortable : true,
					renderer : mvc.Tools.numberRenderer(),
					align : 'right'
				}, {
					text : '票据号',
					width : '11%',
					dataIndex : 'bean.docNum',
					sortable : true
				}, {
					text : '摘要',
					width : '18%',
					dataIndex : 'bean.summary',
					sortable : true
				}, {
					text : '扩展属性表',
					width : '11%',
					dataIndex : 'bean.extTable',
					sortable : true,
					renderer : mvc.Tools.beanRenderer()
				}, {
					text : '备注',
					width : '14%',
					dataIndex : 'bean.rem',
					sortable : true
				}, {
					text : '扩展属性',
					dataIndex : 'extContent',
					expandCol : true,
					hidden : true
				}/*
					 * , { text : '销账标志', width : 100, dataIndex :
					 * 'bean.writeoffFlag', sortable : true, renderer :
					 * mvc.Tools.optRenderer('gl', 'Gl', 'OWriteoffFlag'),
					 * editor : mvc.Tools.crtComboForm(true, { name :
					 * 'bean.writeoffFlag', store : Ext
					 * .create('mvc.combo.gl.GlOWriteoffFlag') }) }, { text :
					 * '销账计划', width : 100, dataIndex : 'bean.writeoff',
					 * sortable : true, renderer : mvc.Tools.beanRenderer(),
					 * editor : { xtype : 'combotriggercell', mode : 'local',
					 * valueField : 'value', triggerAction : 'all', typeAhead :
					 * true, editable : false, store :
					 * Ext.create('mvc.store.ComboTrigger', { actUrl :
					 * 'gl_GlNoteWriteoff', actWhere : '' }), emptyText :
					 * form_empty_text } }, { text : '起始日期', width : 100,
					 * dataIndex : 'bean.dateStart', sortable : true, renderer :
					 * Ext.util.Format.dateRenderer('Y-m-d'), editor : { xtype :
					 * 'datefield', format : 'Y-m-d' } }, { text : '到期日期', width :
					 * 100, dataIndex : 'bean.dateDue', sortable : true,
					 * renderer : Ext.util.Format.dateRenderer('Y-m-d'), editor : {
					 * xtype : 'datefield', format : 'Y-m-d' } }
					 */];
		this.listeners = {
			scope : this,
			selectionchange : function(model, records) {
				if (records.length === 0) {
					this.down('#' + this.oldId + 'del').setDisabled(true);
				} else {
					this.down('#' + this.oldId + 'del').setDisabled(false);
				}
			}
		};
		this.store = Ext.create('mvc.store.gl.GlNote');
		this.store.pageSize = 0;
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
		// this.plugins = [this.cellEditing];
		this.callParent(arguments);

	},
	onSaveRecord : function(form, data) {
		this.store.add(data);
		// this.store.insert(0, data);
		this.getView().select(0);
		Ext.example.msg(msg_title, msg_text);
	},
	onIns : function() {
		var win = Ext.create('mvc.view.gl.GlNote.Win', {
					tableCode : this.tableCode,
					billPkey : this.up('window').form.activeRecord.get("bean.pkey"),
					billCell : this.up('window').form.activeRecord.get("bean.cell").split(bean_split)[0]
				});
		win.on('create', this.onSaveRecord, this);
		win.show();
		win.setActiveRecord(this.up('window').form.activeRecord);

		/*
		 * var model = Ext.create('mvc.store.gl.GlNoteView', { 'bean.direct' :
		 * 1, 'bean.writeoffFlag' : 1 }); this.store.insert(0, model);
		 * this.cellEditing.startEditByPosition({ row : 0, column : 0 });
		 */
	},
	onDel : function() {
		var selection = this.getView().getSelectionModel().getSelection();
		if (selection) {
			var me = this;
			Ext.MessageBox.confirm(msg_confirm_title, msg_confirm_msg,
					function(btn) {
						if (btn != 'yes')
							return;
						var arr = new Array();
						for (var i = 0; i < selection.length; i++) {
							arr.push(selection[i].get('bean.pkey'));
						}
						Ext.Ajax.request({
									url : base_path + '/gl_GlNote_delMulti',
									params : {
										pkeys : arr.toString()
									},
									success : function(response, options) {
										var result = Ext
												.decode(response.responseText);
										if (result.success) {
											me.getStore().remove(selection);
											Ext.example.msg(msg_title, msg_del);
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
	onDelRow : function(grid, rowIndex) {
		var me = this;
		Ext.MessageBox.confirm(msg_confirm_title, msg_confirm_msg,
				function(btn) {
					if (btn != 'yes')
						return;
					Ext.Ajax.request({
								url : '/gl_GlNote_del?pkey='
										+ me.getStore().getAt(rowIndex)
												.get('bean.pkey'),
								success : function(response, options) {
									var result = Ext
											.decode(response.responseText);
									if (result.success) {
										me.getStore().removeAt(rowIndex);
										Ext.example.msg(msg_title, msg_del);
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
	},
	onSearch : function() {
		this.store.proxy.url = base_path + '/gl_GlNote_listByTb?tableCode='
				+ this.tableCode + "&bean.pkey="
				+ this.up('window').form.activeRecord.get('bean.pkey');
		this.store.load();
	},
	onInsExt : function(button) {
		var win = Ext.create('mvc.view.gl.GlNote.Win' + button.bill, {
					tableCode : this.tableCode,
					billPkey : this.up('window').form.activeRecord.get("bean.pkey"),
					billCell : this.up('window').form.activeRecord.get("bean.cell").split(bean_split)[0]
				});
		win.on('create', this.onSaveRecord, this);
		win.show();
	},
	onClose : function() {
		this.up('window').close();
	}
});