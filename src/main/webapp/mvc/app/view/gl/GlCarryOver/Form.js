Ext.define('mvc.view.gl.GlCarryOver.Form',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/gl_GlCarryOver_',
fieldDefaults : {
	labelWidth : 100,
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
					fieldLabel : '财务模板'
				})
	,{
		xtype : 'beantrigger',
		name : 'bean.subjectSource',
		fieldLabel : '源科目',
		bean : 'GlSubject',
		beanType : 'gl',
		emptyText : form_empty_text,
		afterLabelTextTpl : required,
		allowBlank : false
	},{
		xtype : 'beantrigger',
		name : 'bean.subjectTarget',
		fieldLabel : '目标科目',
		bean : 'GlSubject',
		beanType : 'gl',
		emptyText : form_empty_text,
		afterLabelTextTpl : required,
		allowBlank : false
	},{xtype : 'numberfield',name : 'bean.rowVersion',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '版本',hidden : true,allowDecimals : false}
	,{
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