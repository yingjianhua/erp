Ext.define('mvc.view.gs.GsLocation.Form',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/gs_GsLocation_',
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
		mvc.Tools.crtComboTrigger(false,'gs_GsWarehouse','',{
					name : 'bean.warehouse',
					fieldLabel : '仓库'
				})
	,{xtype : 'textfield',name : 'bean.name',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '名称'}
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.enabled',
					fieldLabel : '启用标志',
					store : Ext.create('mvc.combo.sys.SysOEnabled'),
					value : 1
				})
	,{xtype : 'numberfield',name : 'bean.weight',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '总可用重量',decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.weightUsed',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '已用重量',decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.weightAvail',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '可用重量',decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.valume',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '总可用体积',decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.valumeUsed',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '已用体积',decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.valumeAvail',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '可用体积',decimalPrecision : 4}
	,{xtype : 'textfield',name : 'bean.rem',fieldLabel : '备注'}
	,{xtype : 'numberfield',name : 'bean.rowVersion',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '版本',hidden : true,allowDecimals : false}
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