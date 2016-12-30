Ext.define('mvc.view.gs.GsPriceGoodsCell.Form',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/gs_GsPriceGoodsCell_',
fieldDefaults : {
	labelWidth : 100,
	width : 320,
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
					name : 'bean.cell',
					fieldLabel : '核算单元',
					readOnly : !this.insFlag
				})
	,{
				xtype : 'beantrigger',
		name : 'bean.priceGoods',
		fieldLabel : '基础价格信息',
		bean : 'GsPriceGoods',
		beanType : 'gs',
		emptyText : form_empty_text,
		afterLabelTextTpl : required,
		readOnly : !this.insFlag,
		allowBlank : false,
		diySql : '',
		listeners : {
			scope : this,
			change : function(field,newv,oldv,opts) {
				var me = this;
				Ext.Ajax.request({
					async : false,
					url : base_path+'/gs_GsPriceGoods_getGCPNR?pkey=' + newv,
					method : 'GET',
					success : function (response, options) {
						if(response.responseText == '') {
							for (var i = 0; i < 12; i++) {
								var fld = me.down('[name=bean.price' + (i + 1) + ']');
								fld.setValue(null);
								fld.hide();
							}
							return;
						}
						var goods = me.down('[name=bean.goods]');
						var cost = me.down('[name=bean.priceCost]');
						var goodsInfo = response.responseText.split('||')[0];
						var costInfo = response.responseText.split('||')[1];
						var prices = response.responseText.split('||')[2].split('##');
						var names = response.responseText.split('||')[3].split('##');
						rates = response.responseText.split('||')[4].split('##');
						goods.setValue(goodsInfo);
						me.onLoadGoodsForm(goods.getRawValue(),me);
						cost.setValue(costInfo);
						for (var i = 0; i < 12; i++) {
							var fld = me.down('[name=bean.price' + (i + 1) + ']');
							if (i < names.length) {
								fld.setFieldLabel(names[i]);
								fld.setValue(prices[i]);
								fld.show();
							} else {
								fld.setValue(null);
								fld.hide();
							}
						}
						me.doLayout();
					}
				});
			}
		}

	},{
		xtype : 'beantrigger',
		name : 'bean.goods',
		fieldLabel : '货物',
		bean : 'GsGoods',
		beanType : 'gs',
		emptyText : form_empty_text,
		afterLabelTextTpl : required,
		allowBlank : false,
		readOnly : true
	},{xtype : 'textfield',name : 'link.goodsName',fieldLabel : '货物名称',readOnly : true,disabled : true,disabledCls : ''}
	,{xtype : 'textfield',name : 'link.goodsSpec',fieldLabel : '货物规格',readOnly : true,disabled : true,disabledCls : ''}
	,{
		xtype : 'beantrigger',
		name : 'bean.uom',
		fieldLabel : '计量单位',
		bean : 'GsUom',
		beanType : 'gs',
		emptyText : form_empty_text,
		readOnly : true,
		disabled : true,
		disabledCls : ''
	},{
		xtype : 'numberfield',name : 'bean.priceCost',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '定价基数',decimalPrecision : 4, value : 0,
		listeners : {
			scope : this,
			change : function(field,newv,oldv,opts) {
				for (var i = 0; i < 12; i++) {
					var fld = this.down('[name=bean.price' + (i + 1) + ']');
					fld.setValue(rates[i]*newv);
				}
			}
		}

	},{xtype : 'numberfield',name : 'bean.price1',fieldLabel : '价格1',hidden : true,decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.price2',fieldLabel : '价格2',hidden : true,decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.price3',fieldLabel : '价格3',hidden : true,decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.price4',fieldLabel : '价格4',hidden : true,decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.price5',fieldLabel : '价格5',hidden : true,decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.price6',fieldLabel : '价格6',hidden : true,decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.price7',fieldLabel : '价格7',hidden : true,decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.price8',fieldLabel : '价格8',hidden : true,decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.price9',fieldLabel : '价格9',hidden : true,decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.price10',fieldLabel : '价格10',hidden : true,decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.price11',fieldLabel : '价格11',hidden : true,decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.price12',fieldLabel : '价格12',hidden : true,decimalPrecision : 4}
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.flagSal',
					fieldLabel : '零售标志',
					store : Ext.create('mvc.combo.sys.SysOYn'),
					value : 1
				})
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.flagPf',
					fieldLabel : '批发标志',
					store : Ext.create('mvc.combo.sys.SysOYn'),
					value : 1
				})
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.flagMvout',
					fieldLabel : '调出标志',
					store : Ext.create('mvc.combo.sys.SysOYn'),
					value : 1
				})
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.flagMvin',
					fieldLabel : '调入标志',
					store : Ext.create('mvc.combo.sys.SysOYn'),
					value : 1
				})
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.flagPur',
					fieldLabel : '采购标志',
					store : Ext.create('mvc.combo.sys.SysOYn'),
					value : 1
				})
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.flagFini',
					fieldLabel : '产成品标志',
					store : Ext.create('mvc.combo.sys.SysOYn'),
					value : 1
				})
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.flagHalf',
					fieldLabel : '半成品标志',
					store : Ext.create('mvc.combo.sys.SysOYn'),
					value : 1
				})
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.flagPriv',
					fieldLabel : '自用品标志',
					store : Ext.create('mvc.combo.sys.SysOYn'),
					value : 1
				})
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.syncFlag',
					fieldLabel : '同步价格',
					store : Ext.create('mvc.combo.sys.SysOYn'),
					value : 1
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
},
onLoadGoodsForm : function(goodsCode,form){
		if (!goodsCode)
			return null;
		if (goodsCode.indexOf(bean_split) != -1) //两种情况：手动输入代码 或 选择器带回
			goodsCode = goodsCode.split(bean_split)[1]
		var urlGoods = base_path+ '/loadInfo?sarg1=' + goodsCode;
		var rtn = null;
		Ext.Ajax.request({
			async : true,
			url : urlGoods,
			method : 'GET',
			success : function(response) {
				rtn = Ext.JSON.decode(response.responseText, true);
				if (!rtn) {
						form.down('[name=bean.goods]')
								.setValue(null);
						form.down('[name=link.goodsName]')
						.setValue(null);
						form.down('[name=link.goodsSpec]')
								.setValue(null);
						form.down('[name=bean.uom]')
								.setValue(null);
					} else {
						form.down('[name=bean.goods]')
						.setValue(rtn.goods);
						form.down('[name=link.goodsName]')
								.setValue(rtn.goodsName);
						form.down('[name=link.goodsSpec]')
								.setValue(rtn.goodsSpec);
						form.down('[name=bean.uom]')
								.setValue(rtn.uom);
					}    				
			},
			failure : function(response) {
				Ext.example.msg(msg_title, msg_ajax);
			}
		});
}
});