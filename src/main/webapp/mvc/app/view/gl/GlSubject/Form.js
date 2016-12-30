Ext.define('mvc.view.gl.GlSubject.Form',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/gl_GlSubject_',
fieldDefaults : {
	labelWidth : 120,
	width : 275,
	labelStyle : 'font-weight : bold'
},
initComponent : function(){
			if (this.insFlag)
				this.url = this.url + 'ins';
			else
				this.url = this.url + 'upd';
			var formFlds = [];
			formFlds.push
(
		mvc.Tools.crtComboTrigger(false,'sys_SysTemplat','type=1',{
					name : 'bean.templat',
					fieldLabel : '财务模板',
					readOnly : !this.insFlag
				})
	,{
		xtype : 'beantrigger',
		name : 'bean.subjectUp',
		fieldLabel : '上级科目',
		bean : 'GlSubject',
		beanType : 'gl',
		emptyText : form_empty_text,
		readOnly : !this.insFlag
	},{xtype : 'textfield',name : 'bean.code',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '科目号',readOnly : !this.insFlag}
	,{xtype : 'textfield',name : 'bean.name',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '名称'}
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.subjectKind',
					fieldLabel : '分类',
					store : Ext.create('mvc.combo.gl.GlOSubjectKind'),
					value : 11
				})
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.currency',
					fieldLabel : '币种',
					store : Ext.create('mvc.combo.sys.SysOCurrency'),
					value : 1
				})
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.direct',
					fieldLabel : '借贷标志',
					store : Ext.create('mvc.combo.gl.GlODirect'),
					value : 1
				})
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.totalFlag',
					fieldLabel : '是否汇总科目',
					store : Ext.create('mvc.combo.sys.SysOYn'),
					value : 0
				})
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.enabled',
					fieldLabel : '启用标志',
					store : Ext.create('mvc.combo.sys.SysOEnabled'),
					value : 1
				})
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.accJournalType',
					fieldLabel : '明细账金额类型',
					store : Ext.create('mvc.combo.gl.GlOAccJournalType'),
					value : 1
				})
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.tallyFlag',
					fieldLabel : '记明细汇总标志',
					store : Ext.create('mvc.combo.gl.GlOTallyFlag'),
					value : 9
				})
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.useScope',
					fieldLabel : '应用范围',
					store : Ext.create('mvc.combo.gl.GlOUseScope'),
					value : 3
				})
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.accType',
					fieldLabel : '账户类型',
					store : Ext.create('mvc.combo.gl.GlOAccType'),
					value : 1
				})
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.autoCrt',
					fieldLabel : '可否自动建账户',
					store : Ext.create('mvc.combo.sys.SysOYn'),
					value : 1
				})
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.writeoffFlag',
					fieldLabel : '是否设销账',
					store : Ext.create('mvc.combo.sys.SysOYn'),
					value : 0
				})
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.inFlag',
					fieldLabel : '表内标志',
					store : Ext.create('mvc.combo.sys.SysOYn'),
					value : 1
				})
	,{xtype : 'textfield',name : 'bean.rem',fieldLabel : '备注'}
	,{xtype : 'numberfield',name : 'bean.rowVersion',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '版本',hidden : true,allowDecimals : false}
	,{
		xtype : 'hiddenfield',
		name : 'bean.pkey'
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