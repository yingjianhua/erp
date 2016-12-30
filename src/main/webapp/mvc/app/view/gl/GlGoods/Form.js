Ext.define('mvc.view.gl.GlGoods.Form',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/gl_GlGoods_',
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
					name : 'cell',
					fieldLabel : '核算单元',
					readOnly : !this.insFlag
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
	,{xtype : 'textfield',name : 'bean.batch',fieldLabel : '批次代码',hidden : true}
	,{xtype : 'numberfield',name : 'bean.qty',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '数量',readOnly : true,decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.price',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '单价',decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.balance',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '余额',readOnly : true,decimalPrecision : 2}
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.enabled',
					fieldLabel : '启用标志',
					store : Ext.create('mvc.combo.sys.SysOEnabled'),
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