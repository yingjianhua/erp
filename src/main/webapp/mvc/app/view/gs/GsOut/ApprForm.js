Ext.define('mvc.view.gs.GsOut.ApprForm', {
	extend : 'Ext.form.Panel',
	requires : [ 'Ext.ux.DataTip' ],
	layout : 'form',
	border : false,
	frame : false,
	pkey : null,
	bodyPadding : '5 5 5 5',
	url : base_path + '/gs_GsOut_approve',
	fieldDefaults : {
		labelWidth : 100, // 多列
		width : 245, // 多列
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
			name : 'bean.origForm',
			afterLabelTextTpl : required,
			allowBlank : false,
			fieldLabel : '源单据'
		}, {
			xtype : 'textfield',
			name : 'bean.gsName',
			afterLabelTextTpl : required,
			allowBlank : false,
			fieldLabel : '名称'
		}, mvc.Tools.crtComboTrigger(true, 'sys_SysUser', '', {
			name : 'bean.operator',
			fieldLabel : '理货员',
			readOnly : false
		}), mvc.Tools.crtComboTrigger(true, 'sys_SysUser', '', {
			name : 'bean.checker',
			fieldLabel : '检验员',
			readOnly : false
		}), {
			xtype : 'datefield',
			name : 'bean.outTime',
			fieldLabel : '实际出库时间',
			format : 'Y-m-d H:i:s',
			readOnly : false
		}, mvc.Tools.crtComboForm(false,{
			name : 'bean.shipingMode',
			fieldLabel : '运输方式',
			store : Ext.create('mvc.combo.sys.SysOShipingMode'),
			value : 1,
			readOnly : false,
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
,{xtype : 'datefield',name : 'ship.timeShipPlan',fieldLabel : '计划发货时间',readOnly : false,hidden : true,format : 'Y-m-d H:i:s'}
,{xtype : 'datefield',name : 'ship.timeArrPlan',fieldLabel : '预计到货时间',readOnly : false,hidden : true,format : 'Y-m-d H:i:s'}
,{xtype : 'textfield',name : 'ship.name',fieldLabel : '收货人名称',readOnly : false,hidden : true}
,{xtype : 'textfield',name : 'ship.addr',fieldLabel : '收货地址',readOnly : false,hidden : true}
,{xtype : 'textfield',name : 'ship.mobile',fieldLabel : '收货人手机',readOnly : false,hidden : true}
,{xtype : 'textfield',name : 'ship.tel',fieldLabel : '收货人电话',readOnly : false,hidden : true}
, {
			xtype : 'hiddenfield',
			name : 'bean.pkey'
		});
		this.items = [ {
			layout : {
				type : 'table', // 多列
				columns : 3, // 多列
				itemCls : 'x-layout-table-items-form' // 多列
			},
			border : false,
			items : formFlds
		} ];
		this.callParent(arguments);
	}
});
