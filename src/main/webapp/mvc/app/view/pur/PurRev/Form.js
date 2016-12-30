Ext.define('mvc.view.pur.PurRev.Form',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/pur_PurRev_',
fieldDefaults : {
	labelWidth : 110,
	width : 275,
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
		mvc.Tools.crtComboTrigger(false,'pur_PurOrder','',{
					name : 'bean.ord',
					fieldLabel : '采购订单',
					readOnly : true
				})
	,{
		 		 		xtype : 'comboauto',
		fieldLabel : '供应商',
		name : 'bean.supplier',
		listConfig : {minWidth:250},
		fields : ['pkey','code','name'],//查询返回信息model
		valueField : ['pkey'],//提交值
		textField : 'code', //显示信息
		queryParam : 'code',//搜索使用
		url : base_path + '/sys_SysSuppliser_autoComplete',
		urlExt : 'sys.SysCustom',
		hasBlur : false,
		afterLabelTextTpl : required,
		allowBlank : false,
		readOnly : true
  		

	},{xtype : 'textfield',name : 'bean.supname',fieldLabel : '供应商名称',readOnly : true}
	,
		mvc.Tools.crtComboTrigger(false,'gs_GsWarehouse','',{
					name : 'bean.warehouse',
					fieldLabel : '仓库',
					readOnly : true
				})
	,{xtype : 'numberfield',name : 'bean.amt',value : 0,fieldLabel : '金额',readOnly : true,decimalPrecision : 2}
	,{xtype : 'numberfield',name : 'bean.amtXf',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '现付金额',decimalPrecision : 2}
	,{xtype : 'numberfield',name : 'bean.amtGz',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '挂帐金额',decimalPrecision : 2}
	,{xtype : 'numberfield',name : 'bean.amtDj',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '冲减订金金额',decimalPrecision : 2}
	,{
		xtype : 'beantrigger',
		name : 'bean.buyer',
		fieldLabel : '采购员',
		bean : 'SysUser',
		beanType : 'sys',
		emptyText : form_empty_text,
		afterLabelTextTpl : required,
		allowBlank : false
	},
		mvc.Tools.crtComboForm(false,{
					name : 'bean.billFlag',
					fieldLabel : '开票标准',
					store : Ext.create('mvc.combo.sys.SysOBillFlag'),
					value : 1
				})
	,{xtype : 'textfield',name : 'bean.rem',fieldLabel : '备注'}
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.settleFlag',
					fieldLabel : '结算标准',
					store : Ext.create('mvc.combo.pur.PurOSettleFlag'),
					value : 1
				})
	,
				mvc.Tools.crtComboForm(false,{
					name : 'bean.shipingMode',
					fieldLabel : '运输方式',
					store : Ext.create('mvc.combo.sys.SysOShipingMode'),
					value : 1,
					listeners : {
						scope : this,
						change : function(field,newv,oldv,opts) {
							if (newv >= 10){
								this.down('[name=ship.timeShipPlan]').show();
								this.down('[name=ship.timeArrPlan]').show();
								this.down('[name=ship.name]').show();
								this.down('[name=ship.addr]').show();
								this.down('[name=ship.mobile]').show();
								this.down('[name=ship.tel]').show();
							}else{
								this.down('[name=ship.timeShipPlan]').hide();
								this.down('[name=ship.timeArrPlan]').hide();
								this.down('[name=ship.name]').hide();
								this.down('[name=ship.addr]').hide();
								this.down('[name=ship.mobile]').hide();
								this.down('[name=ship.tel]').hide();
							}
							this.doLayout();
						}
					}
				})

	,{xtype : 'numberfield',name : 'bean.rowVersion',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '版本',hidden : true,allowDecimals : false}
	,{xtype : 'datefield',name : 'ship.timeShipPlan',value : 'Env.getTranBeginTime()',fieldLabel : '计划发货时间',hidden : true,format : 'Y-m-d H:i:s'}
	,{xtype : 'datefield',name : 'ship.timeArrPlan',value : 'Env.getTranBeginTime()',fieldLabel : '预计到货时间',hidden : true,format : 'Y-m-d H:i:s'}
	,{xtype : 'textfield',name : 'ship.name',fieldLabel : '发货人名称',hidden : true}
	,{xtype : 'textfield',name : 'ship.addr',fieldLabel : '发货地址',hidden : true}
	,{xtype : 'textfield',name : 'ship.mobile',fieldLabel : '发货人手机',hidden : true}
	,{xtype : 'textfield',name : 'ship.tel',fieldLabel : '发货人电话',hidden : true}
	,{
		xtype : 'hiddenfield',
		name : 'bean.pkey'
	});
	this.items = [{
		layout : {
			type : 'table',
			columns : 3,
			itemCls : 'x-layout-table-items-form'
		},
		border : false,
		items : formFlds
	}];
	this.callParent(arguments);
}
});