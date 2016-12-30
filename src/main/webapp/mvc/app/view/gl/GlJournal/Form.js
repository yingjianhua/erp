Ext.define('mvc.view.gl.GlJournal.Form', {
	extend : 'Ext.form.Panel',
	requires : ['Ext.ux.DataTip'],
	layout : 'form',
	border : false,
	frame : false,
	insFlag : true,
	bodyPadding : '5 5 5 5',
	url : base_path + '/gl_GlJournal_',
	fieldDefaults : {
		labelWidth : 100,
		labelStyle : 'font-weight : bold'
	},
	initComponent : function() {
		if (this.insFlag)
			this.url = this.url + 'ins';
		else
			this.url = this.url + 'upd';
		var formFlds = [];
		formFlds.push(mvc.Tools.crtComboTrigger(false, 'sys_SysCell', '', {
				name : 'bean.cell',
				fieldLabel : '核算单元',
				readOnly : !this.insFlag
			}), {
					xtype : 'beantrigger',
					name : 'bean.subject',
					fieldLabel : '科目字典',
					bean : 'GlSubject',
					beanType : 'gl',
					emptyText : form_empty_text,
					afterLabelTextTpl : required,
					allowBlank : false,
					readOnly : !this.insFlag,
					listeners : {
						scope : this,
						change : function(field, newv, oldv, opts) {
							var me = this;
							// 当需要添加项目模块时，在数组中添加“65”
							// var org = me.down('#form_SysRole_org');
							var nums = ["2", "61", "62","63", "66", "67", "68","69"];
							
							Ext.Ajax.request({
								//async : false,
								// //加上同步限制后，单元格之间切换会中断
								url : base_path
										+ '/gl_GlSubject_load?pkey='
										+ newv.split("##")[0],
								method : 'GET',
								success : function(response) {
									rtn = Ext.JSON.decode(
											response.responseText,
											true);
									var accType = rtn.accType;
									
									Ext.each(nums, function(item) {
										var fld = me.down('#'+ item);
										if (item == accType) {
											fld.setDisabled(false);
											fld.show();
											if(!me.insFlag){
												fld.setReadOnly(true);
												me.down('[name=bean.cell]').setReadOnly(true);
												me.down('[name=bean.subject]').setReadOnly(true);
											}
										} else {
											fld.setDisabled(true);
											fld.hide();
										}
									});
								},
								failure : function(response) {
									Ext.example.msg(msg_title,
											msg_ajax);
								}
							});
						}
					}
				}, {
					xtype : 'numberfield',
					itemId : '2',
					name : 'bean.objPkey',
					value : '0',
					fieldLabel : '顺序号',
					allowDecimals : false,
					afterLabelTextTpl : required,
					allowBlank : false,
					hidden : true
				}, mvc.Tools.crtComboTrigger(false, 'sys_SysOrg', '', {
							itemId : '61',
							name : 'bean.objPkey',
							fieldLabel : '机构',
							hidden : true
						}), mvc.Tools.crtComboTrigger(false, 'sys_SysCell', '',
						{
							itemId : '62',
							name : 'bean.objPkey',
							fieldLabel : '核算单元',
							hidden : true
						}), mvc.Tools.crtComboTrigger(false, 'sys_SysDept', '',
						{
							itemId : '63',
							name : 'bean.objPkey',
							fieldLabel : '部门',
							hidden : true
						}), mvc.Tools.crtComboTrigger(false, 'sys_SysEm', '', {
							itemId : '66',
							name : 'bean.objPkey',
							fieldLabel : '职员',
							hidden : true
						}), mvc.Tools.crtComboTrigger(false, 'sys_SysUser', '',
						{
							itemId : '67',
							name : 'bean.objPkey',
							fieldLabel : '用户',
							hidden : true
						}), {
					xtype : 'beantrigger',
					itemId : '68',
					name : 'bean.objPkey',
					fieldLabel : '客户',
					bean : 'SysCustom',
					beanType : 'sys',
					afterLabelTextTpl : required,
					allowBlank : false,
					emptyText : form_empty_text,
					hidden : true
				}, {
					xtype : 'beantrigger',
					itemId : '69',
					name : 'bean.objPkey',
					fieldLabel : '供应商',
					bean : 'SysSupplier',
					beanType : 'sys',
					afterLabelTextTpl : required,
					allowBlank : false,
					emptyText : form_empty_text,
					hidden : true
				}, {
					xtype : 'textfield',
					name : 'bean.name',
					afterLabelTextTpl : required,
					allowBlank : false,
					fieldLabel : '名称'
				}, {
					xtype : 'textfield',
					name : 'bean.rem',
					fieldLabel : '备注'
				},{xtype : 'numberfield',name : 'bean.rowVersion',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '版本',hidden : true,allowDecimals : false}
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
		this.addEvents('create');
		this.callParent(arguments);
	}
});