Ext.define('mvc.view.gl.GlReportAsset.List', {
	extend : 'Ext.panel.Panel',
	oldId : 'GlReportAsset_list_',
	loadMask : true,
	multiSelect : true,
	roles : '',
	layout : 'border',
	lock : true,
	mdSearch : null,
	mdAct : null,
	mdMainTable : null,
	mdLineTableZC : null,
	mdLineTableLS : null,
	initComponent : function() {
		var mainActs = [];
		if (this.roles.indexOf('ins') != -1)
			mainActs.push({
						text : '新增',
						iconCls : 'ins-icon',
						itemId : this.oldId + 'ins',
						scope : this,
						handler : this.onIns
					});
		if (this.roles.indexOf('del') != -1)
			mainActs.push({
						text : '删除',
						iconCls : 'del-icon',
						itemId : this.oldId + 'del',
						scope : this,
						handler : this.onDel,
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
		this.items = [{
					region : 'north',
					xtype : 'panel',
					border : false,
					items : [{
								xtype : 'toolbar',
								itemId : this.oldId + 'act',
								items : mainActs
							}]
				}, {
					region : 'center',
					xtype : 'panel',

					layout : {
						type : 'border'
					},
					/*
					 * tabBar : { style : 'background:#fff' },
					 */
					defaults : {
						border : '100',
						height : '100%',
						style : 'border:#DFE9F6'
					},
					items : [{
						region : 'west',
						xtype : 'panel',
						layout : {
							type : 'border'
						},
						width : 300,
						items : [{
							xtype : 'panel',
							region : 'north',
							itemId : this.oldId + 'search',
							items : [mvc.Tools.crtComboTrigger(true,
									'sys_SysOrg', '', {
										name : 'bean.org',
										emptyText : '请选择机构',
										listeners : {
											scope : this,
											change : function(field, newv,
													oldv, opts) {
												var array = [{
															'id' : 'filter',
															'property' : 'org',
															'value' : newv
														}];
												if (newv == null) {
													this.mdMainTable.store
															.clearFilter();
													return;
												}
												this.mdMainTable.store
														.clearFilter(true);
												this.mdMainTable.store
														.filter(array);
												this.doLayout();
											}
										}
									})/*
										 * , { xtype : 'datefield', name :
										 * 'bean.beginDate', fieldLabel :
										 * '起始日期', format : 'Y-m-d' }, { xtype :
										 * 'datefield', name : 'bean.endDate',
										 * fieldLabel : '结束日期', format : 'Y-m-d' }
										 */]
						}, {
							xtype : 'panel',
							region : 'center',
							items : Ext.create(
									'mvc.view.gl.GlReportAsset.ListMain', {
										width : 300,
										itemId : this.oldId + 'maintable',
										roles : this.roles,
										listeners : {
											scope : this,
											selectionchange : function(model,
													records) {
												if (records.length === 1) {
													this.mdLineTableZC.store.proxy.url = base_path
															+ '/gl_GlReportAssetLine_listZC?bean.assetReport='
															+ records[0]
																	.get('bean.pkey');
													this.mdLineTableZC.store
															.load();
													this.mdLineTableLS.store.proxy.url = base_path
															+ '/gl_GlReportAssetLine_listLS?bean.assetReport='
															+ records[0]
																	.get('bean.pkey');
													this.mdLineTableLS.store
															.load();
													if (this.roles
															.indexOf('upd') != -1)
														this
																.down('#'
																		+ this.oldId
																		+ 'upd')
																.setDisabled(false);
													if (this.roles
															.indexOf('del') != -1)
														this
																.down('#'
																		+ this.oldId
																		+ 'del')
																.setDisabled(false);
													if (this.roles
															.indexOf('edit') != -1)
														this
																.down('#'
																		+ this.oldId
																		+ 'edit')
																.setDisabled(false);
													if (this.roles.indexOf('print') != -1)
														this.down('#'+ this.oldId+ 'print').setDisabled(false);
												} else {
													this.mdLineTableZC.store.removeAll();
													this.mdLineTableLS.store.removeAll();
													if (this.roles.indexOf('upd') != -1)
														this.down('#'+ this.oldId+ 'upd').setDisabled(true);
													if (this.roles.indexOf('del') != -1)
														this.down('#'+ this.oldId+ 'del').setDisabled(true);
													if (this.roles.indexOf('edit') != -1)
														thi.down('#'+ this.oldId+ 'edit').setDisabled(true);
													if (this.roles.indexOf('print') != -1)
														this.down('#'+ this.oldId+ 'print').setDisabled(true);
												}
											}
										}

									})

						}]
					}, {
						region : 'center',
						xtype : 'panel',
						autoScroll : true,
						layout : {
							type : 'hbox',
							pack : 'start',
							align : 'stretchmax'
						},
						items : [
								Ext
										.create(
												'mvc.view.gl.GlReportAsset.ListLineGlReportAssetLine',
												{
													width : '50%',
													itemId : this.oldId
															+ 'linetableZC'
												}),
								Ext
										.create(
												'mvc.view.gl.GlReportAsset.ListLineGlReportAssetLine',
												{
													width : '50%',
													itemId : this.oldId
															+ 'linetableLS'
												})]
					}]
				}];
		this.callParent(arguments);
		this.mdAct = this.down('#' + this.oldId + 'act');
		this.mdMainTable = this.down('#' + this.oldId + 'maintable');
		this.mdLineTableZC = this.down('#' + this.oldId + 'linetableZC');
		this.mdLineTableLS = this.down('#' + this.oldId + 'linetableLS');
		this.getStore().clearFilter();
	},
	getStore : function() {
		return this.mdMainTable.store;
	},
	onSaveRecord : function(form, data) {
		this.mdMainTable.store.insert(0, data);
		this.mdMainTable.getView().select(0);
		Ext.example.msg(msg_title, msg_text);
	},
	onIns : function() {
		var win = Ext.create('mvc.view.gl.GlReportAsset.Win', {
					title : this.title + '>新增'
				});
		win.on('create', this.onSaveRecord, this);
		win.show();
	},
	onDel : function() {
		var selection = this.mdMainTable.getView().getSelectionModel().getSelection();
		if (selection) {
			var me = this;
			Ext.MessageBox.confirm(msg_confirm_title, msg_confirm_msg,
					function(btn) {
						if (btn != 'yes') return;
						var arr=new Array();
						var arrv = new Array();
						for(var i = 0; i < selection.length; i++){
							arr.push(selection[i].get('bean.pkey'));
							arrv.push(selection[i].get(BEAN_VERSION));
						}
						Ext.Ajax.request({
							url : base_path + '/gl_GlReportAsset_delMulti?pkeys='+arr.toString()+'&rowVersions='+arrv.toString(),
							success : function(response, options) {
								var result = Ext.decode(response.responseText);
								if (result.success) {
									me.mdMainTable.getStore().remove(selection);
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
	onPrint : function(){
		var selection = this.mdMainTable.getView().getSelectionModel().getSelection()[0];
		var key = selection.get('bean.pkey');
		window.open('/print/General/PrintReport.jsp?report=GlReportAsset.grf&data=GlReportAsset.jsp&pkey='+key,'_blank');		 
	}
});