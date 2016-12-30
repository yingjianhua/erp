Ext.define('mvc.view.gs.GsGoodsCmb.Form',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/gs_GsGoodsCmb_',
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
({
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
		listeners : {
			scope : this,
			blur : function(field){
				mvc.Tools.onLoadGoodsForm(field.getRawValue(),this,'goods');
			}
		}

	},{xtype : 'textfield',name : 'link.goodsName',fieldLabel : '货物名称',readOnly : true,disabled : true,disabledCls : ''}
	,{xtype : 'textfield',name : 'link.goodsSpec',fieldLabel : '货物规格',readOnly : true,disabled : true,disabledCls : ''}
	,{
				xtype : 'comboauto',
		listConfig : {minWidth:250},
		fieldLabel : '货物',
		fields : ['pkey','code','name','spec'],//查询返回信息model
		valueField : ['pkey'],//提交值
		textField : 'code', //显示信息
		queryParam : 'code',//搜索使用
		name : 'bean.innerGoods', //提交使用
		url : base_path + '/gs_GsGoods_autoComplete',
		urlExt : 'gs.GsGoods',
		hasBlur : false,
		afterLabelTextTpl : required,
		allowBlank : false,
		listeners : {
			scope : this,
			blur : function(field){
				mvc.Tools.onLoadGoodsForm(field.getRawValue(),this,'innerGoods');
			}
		}

	},{xtype : 'textfield',name : 'link.innerGoodsName',fieldLabel : '内部货物名称',readOnly : true,disabled : true,disabledCls : ''}
	,{xtype : 'textfield',name : 'link.innerGoodsSpec',fieldLabel : '内部货物规格',readOnly : true,disabled : true,disabledCls : ''}
	,{xtype : 'numberfield',name : 'bean.innerCount',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '内部货物数量',decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.rowVersion',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '版本',hidden : true,allowDecimals : false}
	,{xtype : 'numberfield',name : 'bean.sort',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '排序号',allowDecimals : false}
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