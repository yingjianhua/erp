Ext.define('mvc.view.gl.GlRateType.Form',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/gl_GlRateType_',
fieldDefaults : {
	labelWidth : 100,
	width : 275,
	labelStyle : 'font-weight : bold'
},
plugins : {
	ptype : 'datatip'
},
initComponent : function(){
			if (this.insFlag)
				this.url = this.url + 'ins';
			else
				this.url = this.url + 'upd';
			var formFlds = [];
			formFlds.push
({xtype : 'textfield',name : 'bean.code',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '代码'}
	,{xtype : 'textfield',name : 'bean.name',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '名称'}
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.timeType',
					fieldLabel : '期限',
					store : Ext.create('mvc.combo.gl.GlRateTypeOTimeType'),
					value : 1
				})
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.type',
					fieldLabel : '期限',
					store : Ext.create('mvc.combo.gl.GlRateTypeOType'),
					value : 2
				})
	,
		mvc.Tools.crtComboTrigger(true,'sys_SysOrg','',{
					name : 'bean.org',
					fieldLabel : '机构'
				})
	,{xtype : 'textfield',name : 'bean.rem',fieldLabel : '备注'}
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