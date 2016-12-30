Ext.define('mvc.view.pur.PurPresent.Form',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/pur_PurPresent_',
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
({xtype : 'textfield',name : 'bean.code',fieldLabel : '单据号',readOnly : true}
	,
		mvc.Tools.crtComboForm(true,{
					name : 'bean.status',
					fieldLabel : '状态',
					store : Ext.create('mvc.combo.sys.SysOBillStatus'),
					value : 11,
					readOnly : true
				})
	,{xtype : 'numberfield',name : 'bean.amt',value : 0,fieldLabel : '金额',readOnly : true,decimalPrecision : 2}
	,{
		 		xtype : 'comboauto',
		fieldLabel : '供应商',
		name : 'bean.supplier',
		listConfig : {minWidth:250},
		fields : ['pkey','code','name'],//查询返回信息model
		valueField : ['pkey'],//提交值
		textField : 'code', //显示信息
		queryParam : 'code',//搜索使用
		url : base_path + '/sys_SysSupplier_autoComplete',
		urlExt : 'sys.SysSupplier',
		hasBlur : false,
		afterLabelTextTpl : required,
		allowBlank : false,
		listeners : {
			scope : this,
			blur : function(field){
				var me = this;
				if (!field.getRawValue()){
					me.down('[name=bean.supname]').setValue(null);
					me.down('[name=ship.name]').setValue(null);
  				me.down('[name=ship.addr]').setValue(null);
  				me.down('[name=ship.mobile]').setValue(null);
  				me.down('[name=ship.tel]').setValue(null);
	    		return;
	    	}
				var urlCust = base_path+ '/sys_SysSupplier_loadInfoDetail?sarg1=' + field.getRawValue();
	    		Ext.Ajax.request({
	    			//async : false, //加上同步限制后，单元格之间切换会中断
	    			url : urlCust,
	    			method : 'GET',
	    			success : function(response) {
	    				rtn = Ext.JSON.decode(response.responseText, true);
	    				me.down('[name=bean.supplier]').setValue(rtn.supplier);
	    				me.down('[name=bean.supname]').setValue(rtn.supname);
	    				me.down('[name=ship.name]').setValue(rtn.goodsbyName);
		  				me.down('[name=ship.addr]').setValue(rtn.goodsbyAddr);
		  				me.down('[name=ship.mobile]').setValue(rtn.goodsbyMobile);
		  				me.down('[name=ship.tel]').setValue(rtn.goodsbyTel);
		  				if (rtn.supplier !=null) {
			  				var supkey = rtn.supplier.split(bean_split)[0];
			  				me.up('panel').lineTable.goodsEditor.diySql = 'pkey in(select goods from pur_prot_goods where supplier = '+supkey+')' ;
		  				}
	    			},
	    			failure : function(response) {
	    				Ext.example.msg(msg_title, msg_ajax);
	    			}
	    		});
			}
		} 		

	},{xtype : 'textfield',name : 'bean.supname',fieldLabel : '供应商名称',readOnly : true}
	,
		mvc.Tools.crtComboTrigger(false,'gs_GsWarehouse','',{
					name : 'bean.warehouse',
					fieldLabel : '仓库'
				})
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.billFlag',
					fieldLabel : '开票标准',
					store : Ext.create('mvc.combo.sys.SysOBillFlag'),
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
	,{xtype : 'textfield',name : 'bean.rem',fieldLabel : '备注'}
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