Ext.define('mvc.view.rp.RpFundMv.Form',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/rp_RpFundMv_',
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
({xtype : 'numberfield',name : 'bean.amt',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '金额',decimalPrecision : 2}
	,{
		xtype : 'beantrigger',
		name : 'bean.sourceJournal',
		fieldLabel : '来源账户',
		bean : 'RpJournal',
		beanType : 'rp',
		emptyText : form_empty_text,
		afterLabelTextTpl : required,
		allowBlank : false
	},{
		xtype : 'beantrigger',
		name : 'bean.descJournal',
		fieldLabel : '接收账户',
		bean : 'RpJournal',
		beanType : 'rp',
		emptyText : form_empty_text,
		afterLabelTextTpl : required,
		allowBlank : false
	},{xtype : 'numberfield',name : 'bean.rowVersion',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '版本',hidden : true,allowDecimals : false}
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