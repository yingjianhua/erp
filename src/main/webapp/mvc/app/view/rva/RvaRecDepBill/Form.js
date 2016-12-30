Ext.define('mvc.view.rva.RvaRecDepBill.Form',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/rva_RvaRecDepBill_',
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
				var subject = "";
				Ext.Ajax.request({
					async : false,
					url : base_path+'/rva_RvaRecDepBill_getSubjects',
					success : function (response, options) {
						subject =  response.responseText;
					}
				});
				formFlds.push
({
		xtype : 'beantrigger',
		name : 'bean.journal',
		fieldLabel : '分户账',
		bean : 'GlJournal',
		beanType : 'gl',
		emptyText : form_empty_text,
		afterLabelTextTpl : required,
		allowBlank : false,
		diySql : subject
	},{xtype : 'numberfield',name : 'bean.amt',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '金额',decimalPrecision : 2}
	,{xtype : 'textfield',name : 'bean.docNum',fieldLabel : '票据号'}
	,{xtype : 'textfield',name : 'bean.summary',fieldLabel : '摘要'}
	,{xtype : 'datefield',name : 'bean.dateStart',fieldLabel : '起始日期',format : 'Y-m-d',value : new Date()}
	,{xtype : 'datefield',name : 'bean.dateDue',fieldLabel : '到期日期',format : 'Y-m-d'}
	,{xtype : 'numberfield',name : 'bean.rowVersion',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '版本',hidden : true,allowDecimals : false}
	,{xtype : 'textfield',name : 'bean.rem',fieldLabel : '备注'}
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