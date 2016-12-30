Ext.define('mvc.view.gl.GlReport.Form',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/gl_GlReport_',
fieldDefaults : {
	labelWidth : 100,
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
	,{xtype : 'numberfield',name : 'bean.keyValue',value : '0',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '键',allowDecimals : false}
	,{xtype : 'textfield',name : 'bean.name',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '名称'}
	,{xtype : 'numberfield',name : 'bean.parent',value : '0',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '上级',allowDecimals : false}
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.tableType',
					fieldLabel : '表类型',
					store : Ext.create('mvc.combo.gl.GlOTableType'),
					value : 1
				})
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.valueType',
					fieldLabel : '值类型',
					store : Ext.create('mvc.combo.gl.GlOValueType'),
					value : 1
				})
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.symbolType',
					fieldLabel : '加减类型',
					store : Ext.create('mvc.combo.gl.GlOSymbolType'),
					value : 1
				})
	,{xtype : 'numberfield',name : 'bean.orderId',value : '0',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '顺序号',allowDecimals : false}
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