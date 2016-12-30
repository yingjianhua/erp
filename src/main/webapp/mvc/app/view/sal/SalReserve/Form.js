Ext.define('mvc.view.sal.SalReserve.Form',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/sal_SalReserve_',
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
	,
				mvc.Tools.crtComboTrigger(false,'gs_GsWarehouse','',{
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

	,{
		 		xtype : 'comboauto',
		fieldLabel : '客户',
		name : 'bean.cust',
		listConfig : {minWidth:250},
		fields : ['pkey','code', 'name'],//查询返回信息model
		valueField : ['pkey'],//提交值
		textField : 'code', //显示信息
		queryParam : 'code',//搜索使用
		url : base_path + '/sys_SysCustom_autoComplete',
		urlExt : 'sys.SysCustom',
		hasBlur : false,
		afterLabelTextTpl : required,
		allowBlank : false,
		listeners : {
			scope : this,
			blur : function(field){
				var me = this;
				if (!field.getRawValue()){
					me.down('[name=bean.custName]').setValue(null);
					me.down('[name=bean.operator]').setValue(null);
					me.down('[name=ship.name]').setValue(null);
  				me.down('[name=ship.addr]').setValue(null);
  				me.down('[name=ship.mobile]').setValue(null);
  				me.down('[name=ship.tel]').setValue(null);
	    		return;
	    	}
				var urlCust = base_path+ '/sys_SysCustom_loadInfoDetail?sarg1=' + field.getRawValue();
	    		Ext.Ajax.request({
	    			//async : false, //加上同步限制后，单元格之间切换会中断
	    			url : urlCust,
	    			method : 'GET',
	    			success : function(response) {
	    				rtn = Ext.JSON.decode(response.responseText, true);
	    				me.down('[name=bean.cust]').setValue(rtn.cust);
	    				me.down('[name=bean.custName]').setValue(rtn.custName);
	    				me.down('[name=bean.operator]').setValue(rtn.business);
	    				me.down('[name=ship.name]').setValue(rtn.goodsbyName);
		  				me.down('[name=ship.addr]').setValue(rtn.goodsbyAddr);
		  				me.down('[name=ship.mobile]').setValue(rtn.goodsbyMobile);
		  				me.down('[name=ship.tel]').setValue(rtn.goodsbyTel);
	    			},
	    			failure : function(response) {
	    				Ext.example.msg(msg_title, msg_ajax);
	    			}
	    		});
			}
		} 		
  		

	},{xtype : 'textfield',name : 'bean.custName',fieldLabel : '客户名称',readOnly : true}
	,{xtype : 'datefield',name : 'bean.expireDate',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '截止时间',format : 'Y-m-d'}
	,{
		xtype : 'beantrigger',
		name : 'bean.operator',
		fieldLabel : '业务员',
		bean : 'SysUser',
		beanType : 'sys',
		emptyText : form_empty_text,
		afterLabelTextTpl : required,
		allowBlank : false
	},{xtype : 'textfield',name : 'bean.rem',fieldLabel : '备注'}
	,{xtype : 'numberfield',name : 'bean.rowVersion',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '版本',hidden : true,allowDecimals : false}
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