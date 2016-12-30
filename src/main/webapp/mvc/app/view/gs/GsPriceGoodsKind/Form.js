Ext.define('mvc.view.gs.GsPriceGoodsKind.Form',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/gs_GsPriceGoodsKind_',
fieldDefaults : {
	labelWidth : 120,
	width : 275,
	labelStyle : 'font-weight : bold'
},
initComponent : function(){
				if(this.checkPrice)
					this.url = this.url + 'checkPrice';
				else if (this.insFlag)
					this.url = this.url + 'ins';
				else
					this.url = this.url + 'upd';
				var formFlds = [];
				formFlds.push
({xtype : 'textfield',name : 'bean.code',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '代码'}
	,{xtype : 'textfield',name : 'bean.name',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '名称'}
	,
				mvc.Tools.crtComboTrigger(false,'gs_GsPrice','',{
					name : 'bean.price',
					fieldLabel : '定价名称',
					listeners : {
						scope : this,
						change : function(field,newv,oldv,opts) {
							var me = this;
							Ext.Ajax.request({
								async : false,
								url : base_path+'/gs_GsPrice_getPriceNames?pkey=' + newv,
								method : 'GET',
								success : function (response, options) {
									if(response.responseText == '') {
										for (var i = 0; i < 12; i++) {
											var fld = me.down('[name=bean.rate' + (i + 1) + ']');
											fld.setValue(null);
											fld.setValue(0);
											fld.hide();
										}
										return;
									}
									var nameslength = response.responseText.lastIndexOf("-");
									var names = response.responseText.substring(0,nameslength).split('-');
									for (var i = 0; i < 12; i++) {
										var fld = me.down('[name=bean.rate' + (i + 1) + ']');
										if (i < names.length) {
											fld.setFieldLabel(names[i] + '利润率(%)');
											fld.setValue(0);
											fld.show();
										} else {
											fld.setValue(null);
											fld.hide();
										}
									}
									var rangelength = response.responseText.indexOf("*")+1;
									var range = response.responseText.substring(rangelength,response.responseText.length).split('*');
									me.down('[name=bean.cell]').setValue(range[0]);
									if(range[1] > 10){
										me.down('[name=bean.rangePkey]').setValue(range[2]);	
									}
									me.down('[name=bean.rangeType]').setValue(Number(range[1]));
									me.doLayout();
								}
							});
						}
					}
				})

	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.priceOrig',
					fieldLabel : '定价基数来源',
					store : Ext.create('mvc.combo.gs.GsOPriceOrig'),
					value : 1
				})
	,{xtype : 'numberfield',name : 'bean.rate1',fieldLabel : '利润率1(%)',hidden : true,decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.rate2',fieldLabel : '利润率2(%)',hidden : true,decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.rate3',fieldLabel : '利润率3(%)',hidden : true,decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.rate4',fieldLabel : '利润率4(%)',hidden : true,decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.rate5',fieldLabel : '利润率5(%)',hidden : true,decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.rate6',fieldLabel : '利润率6(%)',hidden : true,decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.rate7',fieldLabel : '利润率7(%)',hidden : true,decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.rate8',fieldLabel : '利润率8(%)',hidden : true,decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.rate9',fieldLabel : '利润率9(%)',hidden : true,decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.rate10',fieldLabel : '利润率10(%)',hidden : true,decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.rate11',fieldLabel : '利润率11(%)',hidden : true,decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.rate12',fieldLabel : '利润率12(%)',hidden : true,decimalPrecision : 4}
	,
				mvc.Tools.crtComboForm(false,{
					name : 'bean.rangeType',
					fieldLabel : '可视范围',
					store : Ext.create('mvc.combo.sys.SysORangeType'),
					value : 1,
					listeners : {
						scope : this,
						change : function(field,newv,oldv,opts) {
							var range = this.down('[name=bean.rangePkey]');
							if (newv <= 10) {
								range.setDisabled(true);
								range.hide();
							} else {
								if (newv > 10 && newv <= 20) {
									range.setFieldLabel('可视机构');
									range.store.proxy.url = base_path + '/sys_SysOrg_getComboTrigger';
								} else if (newv >20 && newv <= 30) {
									range.setFieldLabel('可视单元');
									range.store.proxy.url = base_path + '/sys_SysCell_getComboTrigger';
								}
								range.store.load();
								range.setDisabled(false);
								range.show();
							}
							this.doLayout();
						}
					}
				})

	,
				mvc.Tools.crtComboTrigger(false,'sys_SysOrg','',{
			name : 'bean.rangePkey',
			fieldLabel : '可视机构',
			hidden : this.insFlag ? true : false,
			disabled : this.insFlag ? true : false
		})

	,
		mvc.Tools.crtComboTrigger(false,'sys_SysCell','',{
					name : 'bean.cell',
					fieldLabel : '管理核算单元'
				})
	,{xtype : 'numberfield',name : 'bean.rowVersion',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '版本',hidden : true,allowDecimals : false}
	,{
		xtype : 'hiddenfield',
		name : 'bean.pkey'
	});
	this.items = [{
		layout : {
			type : 'table',
			columns : 2,
			itemCls : 'x-layout-table-items-form'
		},
		border : false,
		items : formFlds
	}];
	this.callParent(arguments);
	var rt = this.down('[name=bean.rangeType]');
	var rp = this.down('[name=bean.rangePkey]');
	if (rt.getValue() == 1) {
		rp.setDisabled(true);
		rp.hide();
	} else if (rt.getValue() > 10 && rt.getValue() <= 20) {
		rp.setFieldLabel('可视机构');
		rp.store.proxy.url = base_path + '/sys_SysOrg_getComboTrigger';
		rp.store.load();
	} else if (rt.getValue() >20 && rt.getValue() <= 30) {
		rp.setFieldLabel('可视单元');
		rp.store.proxy.url = base_path + '/sys_SysCell_getComboTrigger';
		rp.store.load();
	}
}
});