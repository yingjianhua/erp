Ext.define('mvc.view.gs.GsStockBatch.Form',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/gs_GsStockBatch_',
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
({xtype : 'textfield',name : 'bean.name',fieldLabel : '批次'}
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.cleared',
					fieldLabel : '结清标志',
					store : Ext.create('mvc.combo.sys.SysOYn'),
					value : 1
				})
	,{xtype : 'datefield',name : 'bean.expDate',fieldLabel : '有效(保质)期',format : 'Y-m-d'}
	,{xtype : 'numberfield',name : 'bean.qty',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '库存数量',decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.rowVersion',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '版本',hidden : true,allowDecimals : false}
	,{
		xtype : 'beantrigger',
		name : 'bean.goods',
		fieldLabel : '货物',
		bean : 'GsGoods',
		beanType : 'gs',
		emptyText : form_empty_text,
		afterLabelTextTpl : required,
		allowBlank : false
	},{xtype : 'textfield',name : 'link.goodsName',fieldLabel : '货物名称'}
	,{xtype : 'textfield',name : 'link.goodsSpec',fieldLabel : '货物规格'}
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