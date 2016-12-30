Ext.define('mvc.view.sal.SalCustGoods.Form',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/sal_SalCustGoods_',
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
		mvc.Tools.crtComboTrigger(false,'sys_SysOrg','',{
					name : 'bean.org',
					fieldLabel : '机构'
				})
	,{
		xtype : 'beantrigger',
		name : 'bean.cust',
		fieldLabel : '客户',
		bean : 'SysCustom',
		beanType : 'sys',
		emptyText : form_empty_text,
		afterLabelTextTpl : required,
		allowBlank : false
	},{
		xtype : 'beantrigger',
		name : 'bean.goods',
		fieldLabel : '货物',
		bean : 'GsGoods',
		beanType : 'gs',
		emptyText : form_empty_text,
		afterLabelTextTpl : required,
		allowBlank : false
	},{xtype : 'numberfield',name : 'bean.latestPrice',value : 0,fieldLabel : '上次成交价',decimalPrecision : 4}
	,{xtype : 'datefield',name : 'bean.latestDate',fieldLabel : '上次成交日期',format : 'Y-m-d'}
	,{xtype : 'numberfield',name : 'bean.latestSpePrice',value : 0,fieldLabel : '上次成交特价',decimalPrecision : 4}
	,{xtype : 'datefield',name : 'bean.latestSpeDate',fieldLabel : '上次特价成交日期',format : 'Y-m-d'}
	,{xtype : 'numberfield',name : 'bean.rowVersion',value : '0',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '版本',hidden : true,allowDecimals : false}
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