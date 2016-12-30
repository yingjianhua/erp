Ext.define('mvc.view.gs.GsStock.Form',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/gs_GsStock_',
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
			fieldLabel : '仓库',
			readOnly : !this.insFlag,
			listeners : {
				scope : this,
				change : function(field, newValue, oldValue, eOpts) {
					var loc = this.down('[name=bean.location]');
					if (newValue)
						loc.diySql = 'warehouse=' + newValue;
					else
						loc.diySql = '';
				}
			}
		})

	,{
				xtype : 'comboauto',
		listConfig : {minWidth:250},
		fieldLabel : '货物',
		fields : ['pkey','code','name','spec'],//查询返回信息model
		valueField : ['pkey'],//提交值
		textField : 'code', //显示信息
		queryParam : 'code',//搜索使用
		name : 'bean.goods', //提交使用
		url : base_path + '/gs_GsGoods_autoComplete',
		urlExt : 'gs.GsGoods',
		hasBlur : false,
		afterLabelTextTpl : required,
		allowBlank : false,
		readOnly : !this.insFlag,
		listeners : {
			scope : this,
			blur : function(field){
				mvc.Tools.onLoadGoodsForm(field.getRawValue(),this,'goods');
			}
		}

	},{xtype : 'textfield',name : 'link.goodsName',fieldLabel : '货物名称',readOnly : true,disabled : true,disabledCls : ''}
	,{xtype : 'textfield',name : 'link.goodsSpec',fieldLabel : '货物规格',readOnly : true,disabled : true,disabledCls : ''}
	,{
		xtype : 'beantrigger',
		name : 'bean.location',
		fieldLabel : '货位',
		bean : 'GsLocation',
		beanType : 'gs',
		emptyText : form_empty_text
	},{xtype : 'numberfield',name : 'bean.lowestQty',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '最低库存',decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.safetyQty',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '安全库存',decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.limitQty',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '上限库存',decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.purLeadDays',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '采购提前天数',allowDecimals : false}
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