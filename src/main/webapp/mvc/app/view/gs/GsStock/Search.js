Ext.define('mvc.view.gs.GsStock.Search', {
			extend : 'Ext.window.Window',
			width : 400,
			layout : 'fit',
			form : null,
			resizable : true,
			modal : true,
			pkey : null,
			iconCls : 'app-icon',
			insFlag : true,
			initComponent : function() {
				// 创建一个空的数组并添加内容
				var formFlds = [];
				formFlds.push({
							xtype : 'datefield',
							name : 'startDate',
							fieldLabel : '开始日期',
							labelWidth : 120,
							format : 'Y-m-d'
						}, {
							xtype : 'datefield',
							name : 'endDate',
							fieldLabel : '结束日期',
							labelWidth : 120,
							format : 'Y-m-d'
						});
				this.items = {
					anchor : '100%',
					plain : true,
					xtype : 'form',
					layout : 'form',
					border : false,
					frame : false,
					bodyPadding : '5 5 5 5',
					fieldDefaults : {
						labelWidth : 70,
						labelStyle : 'font-weight : bold'
					},
					items : [{
								layout : {
									type : 'vbox',
									align : 'stretch'
								},
								border : false,
								items : formFlds
							}]
				};
				this.buttonAlign = 'right';
				this.buttons = [{
							text : '取消',
							scope : this,
							iconCls : 'win-close-icon',
							handler : this.onClose
						}, {
							text : '打印',
							scope : this,
							iconCls : 'win-save-icon',
							handler : this.onSave
						}];
				this.callParent(arguments);
				this.form = this.items.items[0];
			},
			onClose : function() {
				this.close();
			},
			onSave : function() {
				var form = this.form.getForm().getValues();
				var startDate = form['startDate'];
				var endDate = form['endDate'];
				window.open(
						'/print/General/PrintReport.jsp?report=GsStock.grf&data=GsStock.jsp&pkey='+ this.pkey + '&startDate=' + startDate + '&endDate=' + endDate, '_blank');
				this.close();
			},
			setActiveRecord : function(record) {
				this.form.activeRecord = record;
				this.form.getForm().loadRecord(record);
			}
		});