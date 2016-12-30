Ext.define('mvc.view.sal.SalMvOut.Form',{
insFd : false,
chkFlag : false,
wsql : '',
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/sal_SalMvOut_',
fieldDefaults : {
	labelWidth : 100,
	width : 245,
	labelStyle : 'font-weight : bold'
},
initComponent : function(){
			  if(this.chkFlag)
					this.url = this.url + 'chk';
				else{
					if (this.insFlag)
						this.url = this.url + 'ins';
					else
						this.url = this.url + 'upd';
				}
				var formFlds = [];
				formFlds.push
(
						mvc.Tools.crtComboTrigger(true,'gs_GsWarehouse',this.wsql,{
					name : 'bean.warehouse',
					fieldLabel : '仓库',
					listeners: {
						scope : this,
						change : function(field, newValue, oldValue, eOpts) {
							var grid = this.up('window').lineTable;
							mvc.Tools.doLoadStock(grid);
						}
					}
				})
	  		

	,
		mvc.Tools.crtComboTrigger(false,'sys_SysCell','',{
					name : 'bean.cellOther',
					fieldLabel : '调入核算单元',
					readOnly : this.insFd || this.chkFlag
				})
	,
		mvc.Tools.crtComboTrigger(true,'gs_GsWarehouse','',{
					name : 'bean.warehouseOther',
					fieldLabel : '调入仓库',
					hidden : true
				})
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.fromType',
					fieldLabel : '单据来源',
					store : Ext.create('mvc.combo.sal.SalMvOutOFromType'),
					value : 3,
					hidden : true
				})
	,{xtype : 'numberfield',name : 'bean.amt',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '金额',readOnly : true,decimalPrecision : 2}
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.billFlag',
					fieldLabel : '开票标准',
					store : Ext.create('mvc.combo.sys.SysOBillFlag'),
					value : 1
				})
	,{xtype : 'numberfield',name : 'bean.rowVersion',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '版本',hidden : true,allowDecimals : false}
	,{xtype : 'datefield',name : 'ship.timeShipPlan',value : 'Env.getTranBeginTime()',fieldLabel : '计划发货时间',hidden : true,format : 'Y-m-d H:i:s'}
	,{xtype : 'datefield',name : 'ship.timeArrPlan',value : 'Env.getTranBeginTime()',fieldLabel : '预计到货时间',hidden : true,format : 'Y-m-d H:i:s'}
	,{xtype : 'textfield',name : 'ship.name',fieldLabel : '收货人名称',readOnly : true,hidden : true}
	,{xtype : 'textfield',name : 'ship.addr',fieldLabel : '收货地址',readOnly : true,hidden : true}
	,{xtype : 'textfield',name : 'ship.mobile',fieldLabel : '收货人手机',readOnly : true,hidden : true}
	,{xtype : 'textfield',name : 'ship.tel',fieldLabel : '收货人电话',readOnly : true,hidden : true}
	,{xtype : 'textfield',name : 'bean.rem',fieldLabel : '备注'}
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