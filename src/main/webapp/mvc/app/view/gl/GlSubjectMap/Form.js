Ext.define('mvc.view.gl.GlSubjectMap.Form',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/gl_GlSubjectMap_',
fieldDefaults : {
	labelWidth : 120,
	labelStyle : 'font-weight : bold'
},
initComponent : function(){
			if (this.insFlag)
				this.url = this.url + 'ins';
			else
				this.url = this.url + 'upd';
			var formFlds = [];
			formFlds.push
({
		xtype : 'textfield',
		name : 'bean.pkey',
		afterLabelTextTpl : required,
		allowBlank : false,
		afterLabelTextTpl : required,
		allowBlank : false,
		fieldLabel : '编号',
		readOnly : true
	},
		mvc.Tools.crtComboTrigger(false,'sys_SysTemplat','',{
					name : 'bean.templat',
					fieldLabel : '财务模板',
					readOnly : true
				})
	,{xtype : 'textfield',name : 'bean.aliasSource',afterLabelTextTpl : required,allowBlank : false,emptyText : '为数字表示科目号，英文或中文表示别名。',fieldLabel : '源别名或科目号',readOnly : true}
	,{xtype : 'textfield',name : 'bean.aliasTarget',fieldLabel : '目标别名',readOnly : true}
	,{xtype : 'textfield',name : 'bean.name',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '名称'}
	,{
		xtype : 'beantrigger',
		name : 'bean.subject',
		fieldLabel : '科目字典',
		bean : 'GlSubject',
		beanType : 'gl',
		emptyText : form_empty_text
	},{xtype : 'numberfield',name : 'bean.rowVersion',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '版本',hidden : true,allowDecimals : false}
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