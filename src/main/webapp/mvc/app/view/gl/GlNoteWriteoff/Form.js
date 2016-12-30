Ext.define('mvc.view.gl.GlNoteWriteoff.Form',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/gl_GlNoteWriteoff_',
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
({
		xtype : 'numberfield',
		name : 'bean.pkey',
		afterLabelTextTpl : required,
		allowBlank : false,
		allowDecimals : false,
		afterLabelTextTpl : required,
		allowBlank : false,
		fieldLabel : '编号'
	},
		mvc.Tools.crtComboForm(false,{
					name : 'bean.state',
					fieldLabel : '状态',
					store : Ext.create('mvc.combo.gl.GlNoteWriteoffOState'),
					value : 1
				})
	,{xtype : 'numberfield',name : 'bean.balance',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '余额',decimalPrecision : 2}
	,{xtype : 'datefield',name : 'bean.dateStart',fieldLabel : '起始日期',format : 'Y-m-d'}
	,{xtype : 'datefield',name : 'bean.dateDue',fieldLabel : '到期日期',format : 'Y-m-d'}
	,{xtype : 'datefield',name : 'bean.tallyDate',fieldLabel : '记账日期',format : 'Y-m-d'}
	,{xtype : 'textfield',name : 'bean.rem',fieldLabel : '备注'}
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