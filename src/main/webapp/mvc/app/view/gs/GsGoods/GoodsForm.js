Ext.define('mvc.view.gs.GsGoods.GoodsForm',{
	extend : 'Ext.form.Panel',
	requires : ['Ext.ux.DataTip'],
	layout : 'form',
	border : false,
	frame : false,
	insFlag : true,
	bodyPadding : '5 5 5 5',
	url : base_path+'/gs_GsGoods_',
	fieldDefaults : {
		labelWidth : 110, //多列
		width : 295, //多列
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
		formFlds.push(mvc.Tools.crtComboTrigger(false,'gs_GsGoodsKind','',{
				name : 'bean.kind',
				fieldLabel : '货物类别'
			}),mvc.Tools.crtComboTrigger(true,'sys_SysOrg','',{
				name : 'bean.org',
				fieldLabel : '机构'
			}),{
				xtype : 'textfield',
				name : 'bean.code',
				afterLabelTextTpl : required,
				allowBlank : false,
				fieldLabel : '代码',
				readOnly : !this.insFlag
			},{
				xtype : 'textfield',
				name : 'bean.name',
				afterLabelTextTpl : required,
				allowBlank : false,
				fieldLabel : '名称'
			},{
				xtype : 'textfield',
				name : 'bean.shortkey',
				fieldLabel : '快捷键'
			},mvc.Tools.crtComboForm(false,{
				name : 'bean.type',
				fieldLabel : '类型',
				store : Ext.create('mvc.combo.gs.GsOType'),
				value : 1
			}),{
				xtype : 'textfield',
				name : 'bean.spec',
				fieldLabel : '规格'
			},{
				xtype : 'beantrigger',
				name : 'bean.uom',
				fieldLabel : '计量单位',
				bean : 'GsUom',
				beanType : 'gs',
				afterLabelTextTpl : required,
				allowBlank : false,
				emptyText : form_empty_text,
				readOnly : !this.insFlag
			},{
				xtype : 'numberfield',
				name : 'bean.weightRate',
				fieldLabel : '单位重量',decimalPrecision : 4
			},{
				xtype : 'numberfield',
				name : 'bean.valumeRate',
				fieldLabel : '单位体积',decimalPrecision : 4
			},{
				xtype : 'textfield',
				name : 'bean.descrip',
				fieldLabel : '描述'
			},{
				xtype : 'textfield',
				name : 'bean.barCode',
				fieldLabel : '条型码'
			},mvc.Tools.crtComboForm(false,{
				name : 'bean.enabled',
				fieldLabel : '启用标志',
				store : Ext.create('mvc.combo.sys.SysOEnabled'),
				value : 1
			}),mvc.Tools.crtComboForm(false,{
				name : 'bean.combType',
				fieldLabel : '组合类型',
				store : Ext.create('mvc.combo.gs.GsOCombType'),
				value : 1,
				readOnly : true
			}),mvc.Tools.crtComboForm(false,{
				name : 'bean.zeroOutFlag',
				fieldLabel : '可否零库存出库',
				store : Ext.create('mvc.combo.sys.SysOYn'),
				value : 1
			}),mvc.Tools.crtComboForm(false,{
				name : 'bean.batchType',
				fieldLabel : '批次管理类型',
				store : Ext.create('mvc.combo.gs.GsOBatchType'),
				value : 0
			}),{
				xtype : 'numberfield',
				name : 'bean.economicQty',
				afterLabelTextTpl : required,
				allowBlank : false,
				fieldLabel : '经济批量',decimalPrecision : 4,
				value : 0
			},{
				xtype : 'numberfield',
				name : 'bean.purLeadDays',
				fieldLabel : '采购提前天数',
				afterLabelTextTpl : required,
				allowBlank : false,
				allowDecimals : false,
				value : 0
			},{
				xtype : 'checkboxgroup',
				fieldLabel : '货物属性',
				columns : 3,
				width : 150,
				items : [{
					boxLabel : '销售出库',
					name: 'outSale',
					inputValue: '1',
					checked: true,
					width : 100
				},{
					boxLabel : '调拨出库',
					name: 'outMv',
					inputValue: '1',
					checked: true,
					width : 100
				},{
					boxLabel : '投料出库',
					name: 'outPro',
					inputValue: '1',
					checked: true,
					width : 100
				},{
					boxLabel : '采购入库',
					name: 'inPur',
					inputValue: '1',
					checked: true,
					width : 100
				},{
					boxLabel : '调拨入库',
					name: 'inMv',
					inputValue: '1',
					checked: true,
					width : 100
				},{
					boxLabel : '生产入库',
					name: 'inPro',
					inputValue: '1',
					checked: true,
					width : 100
				}]
			}
			,{xtype : 'numberfield',name : 'bean.rowVersion',value : '0',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '版本',hidden : true,allowDecimals : false}
			,{
				xtype : 'hiddenfield',
				name : 'bean.pkey'
			});
		this.items = [{
			layout : {
				type : 'table', //多列
				columns: 2, //多列
				itemCls : 'x-layout-table-items-form' //多列
			},
			border : false,
			items : formFlds
		}];
		this.callParent(arguments);
	}
});
