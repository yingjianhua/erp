Ext.define('mvc.view.gl.GlReportProfit.Form', {
			extend : 'Ext.form.Panel',
			requires : ['Ext.ux.DataTip'],
			layout : 'form',
			border : false,
			frame : false,
			insFlag : true,
			bodyPadding : '5 5 5 5',
			url : base_path + '/gl_GlReportProfit_',
			fieldDefaults : {
				labelWidth : 100,
				labelStyle : 'font-weight : bold'
			},
			plugins : {
				ptype : 'datatip'
			},
			initComponent : function() {
				if (this.insFlag)
					this.url = this.url + 'ins';
				else
					this.url = this.url + 'upd';
				var formFlds = [];
				formFlds.push(mvc.Tools.crtComboTrigger(false, 'sys_SysOrg',
								'', {
									name : 'bean.org',
									fieldLabel : '机构'
								}), {
							xtype : 'datefield',
							name : 'bean.beginDate',
							afterLabelTextTpl : required,
							allowBlank : false,
							fieldLabel : '起始日期',
							format : 'Y-m-d'
						}, {
							xtype : 'datefield',
							name : 'bean.endDate',
							afterLabelTextTpl : required,
							allowBlank : false,
							fieldLabel : '结束日期',
							format : 'Y-m-d'
						}, {
							xtype : 'textfield',
							name : 'bean.rem',
							fieldLabel : '备注'
						}, {
							xtype : 'hiddenfield',
							name : 'bean.pkey'
						},{xtype : 'numberfield',name : 'bean.rowVersion',value : '0',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '版本',hidden : true,allowDecimals : false}
						);
				this.items = [{
							layout : {
								type : 'vbox',
								align : 'stretch'
							},
							border : false,
							items : formFlds
						}];
				this.callParent(arguments);
			}
		});