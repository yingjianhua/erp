Ext.define('mvc.view.rp.RpStimatePay.FormProc',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
bodyPadding : '5 5 5 5',
url : base_path+'/rp_RpStimatePay_doProc',
fieldDefaults : {
	labelWidth : 100,
	labelStyle : 'font-weight : bold'
},
initComponent : function(){
			var formFlds = [];
			formFlds.push({
				xtype : 'beantrigger',
				name : 'note.journal',
				fieldLabel : '出纳日记账',
				bean : 'RpJournal',
				beanType : 'rp',
				emptyText : form_empty_text,
				afterLabelTextTpl : required,
				allowBlank : false
			}
			,{xtype : 'numberfield',name : 'note.amt',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '金额',decimalPrecision : 2, minValue:0}
			,{xtype : 'textfield',name : 'note.summary',fieldLabel : '摘要'}
			,{xtype : 'textfield',name : 'note.docNum',fieldLabel : '票据号'}
			,{xtype : 'datefield',name : 'rp.payDate',fieldLabel : '实际付款日期',format : 'Y-m-d'}
			,mvc.Tools.crtComboForm(true,{
				name : 'note.type',
				fieldLabel : '付款方式',
				store : Ext.create('mvc.combo.rp.RpOPayType'),
				value : 0,
				listeners : {
					scope : this,
					change : function(field,newv,oldv,opts) {
						if (newv > 0){
							this.down('[name=rp.date]').show();
							this.down('[name=rp.name]').show();
							this.down('[name=rp.account]').show();
							this.down('[name=rp.bank]').show();
						}else{
							this.down('[name=rp.date]').hide();
							this.down('[name=rp.name]').hide();
							this.down('[name=rp.account]').hide();
							this.down('[name=rp.bank]').hide();
						}
						this.doLayout();
					}
				}
			})
			,{xtype : 'datefield',name : 'rp.date',fieldLabel : '票据日期',format : 'Y-m-d',hidden : true}
			,{xtype : 'textfield',name : 'rp.name',fieldLabel : '收款方名称',hidden : true}
			,{xtype : 'textfield',name : 'rp.account',fieldLabel : '收款方账号',hidden : true}
			,{xtype : 'textfield',name : 'rp.bank',fieldLabel : '收款方银行',hidden : true}
			,{xtype : 'textfield',name : 'note.rem',fieldLabel : '备注'}
	,{
		xtype : 'hiddenfield',
		name : 'note.pkey'
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