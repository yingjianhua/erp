Ext.define('mvc.view.gs.GsPhyinv.InvForm', {
	extend : 'Ext.form.Panel',
	requires : [ 'Ext.ux.DataTip' ],
	layout : 'form',
	border : false,
	frame : false,
	pkey : null,
	bodyPadding : '5 5 5 5',
	url : base_path + '/gs_GsPhyinv_inv',
	fieldDefaults : {
		labelWidth : 100, // 多列
		width : 325, // 多列
		labelStyle : 'font-weight : bold',
		readOnly : true
	},
	plugins : {
		ptype : 'datatip'
	},
	initComponent : function() {
		var formFlds = [];
		formFlds.push({
			xtype : 'textfield',
			name : 'bean.code',
			afterLabelTextTpl : required,
			allowBlank : false,
			fieldLabel : '单据号'
		}, {
			xtype : 'beantrigger',
			name : 'bean.warehouse',
			fieldLabel : '仓库',
			bean : 'GsWarehouse',
			beanType : 'gs',
			afterLabelTextTpl : required,
			allowBlank : false,
			emptyText : form_empty_text
		}, {
			xtype : 'beantrigger',
			name : 'bean.org',
			fieldLabel : '机构',
			bean : 'SysOrg',
			beanType : 'sys',
			afterLabelTextTpl : required,
			allowBlank : false,
			emptyText : form_empty_text
		}, {
			xtype : 'beantrigger',
			name : 'bean.dept',
			fieldLabel : '部门',
			bean : 'SysDept',
			beanType : 'sys',
			afterLabelTextTpl : required,
			allowBlank : false,
			emptyText : form_empty_text
		},{
			xtype : 'beantrigger',
			name : 'bean.countedBy',
			fieldLabel : '盘点员',
			bean : 'SysUser',
			beanType : 'sys',
			afterLabelTextTpl : required,
			allowBlank : false,
			emptyText : form_empty_text
		}, {
			xtype : 'datefield',
			name : 'bean.planFiniDate',
			fieldLabel : '预计完成日期',
			allowBlank : true,
			format : 'Y-m-d'
		}, {
			xtype : 'beantrigger',
			name : 'bean.createdBy',
			fieldLabel : '建档员',
			bean : 'SysUser',
			beanType : 'sys',
			afterLabelTextTpl : required,
			allowBlank : false,
			emptyText : form_empty_text
		}, {
			xtype : 'datefield',
			name : 'bean.createdTime',
			fieldLabel : '建档时间',
			afterLabelTextTpl : required,
			allowBlank : false,
			format : 'Y-m-d H:i:s'
		}, {
			xtype : 'beantrigger',
			name : 'bean.apprBy',
			fieldLabel : '审核员',
			bean : 'SysUser',
			beanType : 'sys',
			afterLabelTextTpl : required,
			allowBlank : false,
			emptyText : form_empty_text
		}, {
			xtype : 'datefield',
			name : 'bean.apprTime',
			fieldLabel : '审核时间',
			afterLabelTextTpl : required,
			allowBlank : false,
			format : 'Y-m-d H:i:s'
		},{
			xtype : 'numberfield',
			name : 'bean.rowVersion',
			value : 0,
			afterLabelTextTpl : required,
			allowBlank : false,
			fieldLabel : '版本',
			hidden : true,allowDecimals : false
		}, {
			xtype : 'hiddenfield',
			name : 'bean.pkey'
		});
		this.items = [ {
			layout : {
				type : 'table', // 多列
				columns : 2, // 多列
				itemCls : 'x-layout-table-items-form' // 多列
			},
			border : false,
			items : formFlds
		} ];
		this.callParent(arguments);
	}
});
