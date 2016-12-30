Ext.define('mvc.view.rp.RpNoteRptBill.Form',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/rp_RpNoteRptBill_',
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
	,{xtype : 'datefield',name : 'bean.tranTime',fieldLabel : '收款时间',format : 'Y-m-d H:i:s'}
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.type',
					fieldLabel : '收款方式',
					store : Ext.create('mvc.combo.rp.RpORptType'),
					value : 0 ,
					listeners : {
						scope : this,
						change : function(field,newv,oldv,opts) {
							if (newv == 0){
								this.down('[name=bean.name]').hide();
								this.down('[name=bean.receiveDate]').hide();
							}else{
								this.down('[name=bean.name]').show();
								this.down('[name=bean.receiveDate]').show();
							}
							this.doLayout();
						}
					}
				})
	,{xtype : 'datefield',name : 'bean.receiveDate',fieldLabel : '到账日期',hidden : true,format : 'Y-m-d'}
	,{xtype : 'textfield',name : 'bean.name',fieldLabel : '付款方名称',hidden : true}
	,
		mvc.Tools.crtComboTrigger(true,'sys_SysUser','',{
					name : 'bean.cashier',
					fieldLabel : '出纳'
				})
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