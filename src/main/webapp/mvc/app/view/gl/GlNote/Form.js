Ext.define('mvc.view.gl.GlNote.Form', {
			extend : 'Ext.form.Panel',
			requires : ['Ext.ux.DataTip'],
			layout : 'form',
			border : false,
			frame : false,
			insFlag : true,
			bodyPadding : '5 5 5 5',
			url : base_path + '/gl_GlNote_',
			fieldDefaults : {
				labelWidth : 100,
				// width : 275,
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
				formFlds.push({
							xtype : 'beantrigger',
							name : 'bean.bill',
							afterLabelTextTpl : required,
							allowBlank : false,
							fieldLabel : '主单据'
						}, mvc.Tools.crtComboTrigger(true, 'sys_SysTable', '',
								{
									name : 'bean.extTable',
									fieldLabel : '扩展属性表'
								}), {
							xtype : 'beantrigger',
							name : 'bean.journal',
							fieldLabel : '分户账',
							bean : 'GlJournal',
							beanType : 'gl',
							emptyText : form_empty_text,
							afterLabelTextTpl : required,
							allowBlank : false
						}, mvc.Tools.crtComboForm(false, {
									name : 'bean.direct',
									fieldLabel : '借贷标志',
									store : Ext
											.create('mvc.combo.gl.GlODirect'),
									value : 1
								}), mvc.Tools.crtComboForm(false, {
									name : 'bean.status',
									fieldLabel : '状态',
									store : Ext
											.create('mvc.combo.sys.SysOBillStatus'),
									value : 11
								}), {
							xtype : 'numberfield',
							name : 'bean.amt',
							afterLabelTextTpl : required,
							allowBlank : false,
							fieldLabel : '金额',
							decimalPrecision : 2
						}, {
							xtype : 'textfield',
							name : 'bean.docNum',
							fieldLabel : '票据号'
						}, {
							xtype : 'textfield',
							name : 'bean.summary',
							fieldLabel : '摘要'
						}, {
							xtype : 'textfield',
							name : 'bean.rem',
							fieldLabel : '备注'
						}
						,{xtype : 'numberfield',name : 'bean.rowVersion',value : '0',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '版本',hidden : true,allowDecimals : false}
						, {
							xtype : 'hiddenfield',
							name : 'bean.pkey'
						});
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