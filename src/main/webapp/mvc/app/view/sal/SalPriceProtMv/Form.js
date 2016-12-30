Ext.define('mvc.view.sal.SalPriceProtMv.Form',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/sal_SalPriceProtMv_',
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
		mvc.Tools.crtComboTrigger(false,'sys_SysCell','',{
					name : 'bean.cellSal',
					fieldLabel : '销售方核算单元'
				})
	,
		mvc.Tools.crtComboTrigger(false,'sys_SysCell','',{
					name : 'bean.cellPur',
					fieldLabel : '采购方核算单元'
				})
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.priceLevel',
					fieldLabel : '价格级别',
					store : Ext.create('mvc.combo.sal.SalODiscountLevel'),
					value : 1
				})
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