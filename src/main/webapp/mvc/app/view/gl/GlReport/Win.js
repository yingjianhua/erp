Ext.define('mvc.view.gl.GlReport.Win', {
			extend : 'Ext.window.Window',
			width : 400,
			layout : 'fit',
			form : null,
			resizable : true,
			modal : true,
			iconCls : 'app-icon',
			insFlag : true,
			reportPkey : null,
			initComponent : function() {
				this.items = {
					xtype : Ext.create('mvc.view.gl.GlReport.ListForm', {
								minHeight : 200,
								mainPkey : this.reportPkey,
								border : false
							})
				};
				this.buttonAlign = 'right', this.buttons = [{
							text : '重置',
							scope : this,
							iconCls : 'win-refresh-icon',
							handler : this.onReset
						}, {
							text : '关闭',
							scope : this,
							iconCls : 'win-close-icon',
							handler : this.onClose
						}, {
							text : '保存',
							scope : this,
							iconCls : 'win-save-icon',
							handler : this.onSave
						}];
				this.callParent(arguments);
				this.listForm = this.items.items[0];
			},
			setActiveRecord : function(record) {
				var store = this.down('grid').store;
				var array = [{
					"property" : "report",
					"value" : this.reportPkey.split("##")[0]
				}];
				store.clearFilter(true);
				store.filter(array);
			},
			onReset : function() {
				this.setActiveRecord(this.listForm.activeRecord);
			},
			onClose : function() {
				this.close();
			},
			onSave : function() {
				var me = this;
				Ext.Ajax.request({
							// async : false,
							// //加上同步限制后，单元格之间切换会中断
							url : base_path
									+ '/gl_GlReportLine_upd?reportPkey='
									+ this.reportPkey.split("##")[0],
							method : 'GET',
							params : mvc.Tools.storeValues(
									this.listForm.store, {
										insFlag : this.insFlag
									}),
							success : function (response, options) {
								var result = Ext.decode(response.responseText);
								if (result.success){
									//Ext.example.msg(msg_title, msg_del);
									me.close();
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