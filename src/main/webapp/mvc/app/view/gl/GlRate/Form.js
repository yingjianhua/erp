Ext.define('mvc.view.gl.GlRate.Form',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/gl_GlRate_',
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
(
		mvc.Tools.crtComboTrigger(false,'gl_GlRateType','',{
					name : 'bean.rateType',
					fieldLabel : '利率类型'
				})
	,{xtype : 'datefield',name : 'bean.bdate',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '启用日期',format : 'Y-m-d'}
	,{xtype : 'numberfield',name : 'bean.baseRate',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '基准利率',decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.floatUp',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '最大上浮幅度',decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.floatDown',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '最大下浮幅度',decimalPrecision : 4}
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.enabled',
					fieldLabel : '启用标志',
					store : Ext.create('mvc.combo.sys.SysOEnabled'),
					value : 1
				})
	,{xtype : 'numberfield',name : 'bean.interestRate',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '罚息利率',decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.irFloatUp',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '罚息最大上浮幅度',decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.irFloatDown',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '罚息最大下浮幅度',decimalPrecision : 4}
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