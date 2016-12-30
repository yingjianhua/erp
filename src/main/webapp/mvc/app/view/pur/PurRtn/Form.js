Ext.define('mvc.view.pur.PurRtn.Form',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/pur_PurRtn_',
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
({
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

	},{xtype : 'textfield',name : 'bean.supname',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '供应商名称',readOnly : true}
	,
		mvc.Tools.crtComboTrigger(false,'gs_GsWarehouse','',{
					name : 'bean.warehouse',
					fieldLabel : '仓库'
				})
	,{xtype : 'numberfield',name : 'bean.amt',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '金额',readOnly : true,decimalPrecision : 2}
	,{xtype : 'numberfield',name : 'bean.amtXf',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '现付金额',decimalPrecision : 2}
	,{xtype : 'numberfield',name : 'bean.amtGz',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '挂帐金额',decimalPrecision : 2}
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.billFlag',
					fieldLabel : '开票标准',
					store : Ext.create('mvc.combo.sys.SysOBillFlag'),
					value : 1
				})
	,{xtype : 'textfield',name : 'bean.rem',fieldLabel : '备注'}
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