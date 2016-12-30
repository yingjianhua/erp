Ext.define('mvc.view.rp.RpNotePayBill.Form',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/rp_RpNotePayBill_',
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
(
		mvc.Tools.crtComboTrigger(false,'sys_SysCell','',{
					name : 'bean.cell',
					fieldLabel : '核算单元'
				})
	,{
		xtype : 'beantrigger',
		name : 'bean.journal',
		fieldLabel : '出纳日记账',
		bean : 'RpJournal',
		beanType : 'rp',
		emptyText : form_empty_text,
		afterLabelTextTpl : required,
		allowBlank : false
	},{xtype : 'numberfield',name : 'bean.amt',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '金额',decimalPrecision : 2}
	,{xtype : 'textfield',name : 'bean.docNum',fieldLabel : '票据号'}
	,{xtype : 'textfield',name : 'bean.summary',fieldLabel : '摘要'}
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.type',
					fieldLabel : '付款方式',
					store : Ext.create('mvc.combo.rp.RpOPayType'),
					value : 0 ,
					listeners : {
						scope : this,
						change : function(field,newv,oldv,opts) {
							if (newv == 0){
								this.down('[name=bean.tranTime]').show();
								this.down('[name=bean.name]').hide();
								this.down('[name=bean.bank]').hide();
								this.down('[name=bean.account]').hide();
								this.down('[name=bean.date]').hide();
								this.down('[name=bean.payDate]').hide();
							}else{
								this.down('[name=bean.tranTime]').hide();
								this.down('[name=bean.name]').show();
								this.down('[name=bean.bank]').show();
								this.down('[name=bean.account]').show();
								this.down('[name=bean.date]').show();
								this.down('[name=bean.payDate]').show();
							}
							this.doLayout();
						}
					}
				})
	,{xtype : 'datefield',name : 'bean.tranTime',fieldLabel : '付款时间',format : 'Y-m-d H:i:s'}
	,{xtype : 'datefield',name : 'bean.date',fieldLabel : '票据日期',hidden : true,format : 'Y-m-d'}
	,{xtype : 'datefield',name : 'bean.payDate',fieldLabel : '实际付款日期',hidden : true,format : 'Y-m-d'}
	,{xtype : 'textfield',name : 'bean.name',fieldLabel : '收款方名称',hidden : true}
	,{xtype : 'textfield',name : 'bean.account',fieldLabel : '收款方账号',hidden : true}
	,{xtype : 'textfield',name : 'bean.bank',fieldLabel : '收款方银行',hidden : true}
	,{xtype : 'numberfield',name : 'bean.rowVersion',value : '0',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '版本',hidden : true,allowDecimals : false}
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