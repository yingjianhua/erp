Ext.define('mvc.view.sal.SalPriceProt.Form',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/sal_SalPriceProt_',
fieldDefaults : {
	labelWidth : 100,
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
					fieldLabel : '核算单元'
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
					me.down('[name=bean.name]').setValue(null);
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
	    				me.down('[name=bean.name]').setValue(rtn.custName);
	    			},
	    			failure : function(response) {
	    				Ext.example.msg(msg_title, msg_ajax);
	    			}
	    		});
			}
		} 	
  		

	},{xtype : 'textfield',name : 'bean.name',fieldLabel : '客户名称',readOnly : true}
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.priceLevel',
					fieldLabel : '价格级别',
					store : Ext.create('mvc.combo.sal.SalODiscountLevel'),
					value : 1
				})
	,{xtype : 'numberfield',name : 'bean.rowVersion',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '版本',hidden : true,allowDecimals : false}
	,{
		xtype : 'hiddenfield',
		name : 'bean.pkey'
	});
	this.items = [{
		layout : {
			type : 'vbox',
			align : 'stretch'
		},
		border : false,
		items : formFlds
	}];
	this.callParent(arguments);
}
});