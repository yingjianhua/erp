Ext.define('mvc.view.rp.RpJournal.Form', {
	extend : 'Ext.form.Panel',
	requires : ['Ext.ux.DataTip'],
	layout : 'form',
	border : false,
	frame : false,
	insFlag : true,
	bodyPadding : '5 5 5 5',
	url : base_path + '/rp_RpJournal_',
	fieldDefaults : {
		labelWidth : 110,
		width : 275,
		labelStyle : 'font-weight : bold'
	},
	initComponent : function() {
		if (this.insFlag)
			this.url = this.url + 'ins';
		else
			this.url = this.url + 'upd';
		var formFlds = [];
		if (this.insFlag) {
			formFlds.push({
						xtype : 'beantrigger',
						fieldLabel : '对应分户帐',
						name : 'bean.pkey',
						bean : 'GlJournal',
						beanType : 'gl',
						afterLabelTextTpl : required,
						allowBlank : false,
						emptyText : form_empty_text,
						diySql : 'org='+lg_org_pkey
					});
		} else {
			formFlds.push({
						xtype : 'hiddenfield',
						name : 'bean.pkey'
					}, {
						xtype : 'textfield',
						name : 'bean.name',
						fieldLabel : '名称',
						readOnly : true
					});
		}
		formFlds.push(
				mvc.Tools.crtComboForm(false, {
							name : 'bean.rpJournalType',
							fieldLabel : '账户类型',
							store : Ext.create('mvc.combo.rp.RpORpJournalType'),
							value : 1
						}), {
					xtype : 'textfield',
					name : 'bean.bankName',
					fieldLabel : '银行名称'
				}, {
					xtype : 'textfield',
					name : 'bean.bankAccName',
					fieldLabel : '账户名称'
				}, {
					xtype : 'textfield',
					name : 'bean.bankAccCode',
					fieldLabel : '银行账号'
				}, {
					xtype : 'beantrigger',
					name : 'bean.workBox',
					fieldLabel : '所属工作箱',
					bean : 'RpWorkBox',
					beanType : 'rp',
					emptyText : form_empty_text,
					afterLabelTextTpl : required,
					allowBlank : false,
					readOnly : !this.insFlag
				}, {
					xtype : 'numberfield',
					name : 'bean.rowVersion',
					value : 0,
					afterLabelTextTpl : required,
					allowBlank : false,
					fieldLabel : '版本',
					hidden : true,
					allowDecimals : false
				}, {
					xtype : 'textfield',
					name : 'bean.rem',
					fieldLabel : '备注',
					width : 560,
					colspan : 2
				});
		this.items = [{
					layout : {
						type : 'table',
						columns : 2,
						itemCls : 'x-layout-table-items-form'
					},
					border : false,
					items : formFlds
				}];
		this.callParent(arguments);
	}
});