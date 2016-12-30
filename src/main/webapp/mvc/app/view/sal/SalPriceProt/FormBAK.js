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
plugins : {
	ptype : 'datatip'
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
		xtype : 'beantrigger',
		name : 'bean.cust',
		fieldLabel : '客户',
		bean : 'SysCustom',
		beanType : 'sys',
		emptyText : form_empty_text,
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
				var urlCust = base_path+ '/sys_SysCustom_loadInfo?sarg1=' + field.getRawValue();
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
	},{xtype : 'textfield',name : 'bean.name',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '客户名称',readOnly : true}
	,{xtype : 'combo',name : 'bean.priceLevel',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '价格级别',
		store : this.getLevel()}
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
},
getLevel : function() {
	var today = new Date();
	var sdata = [];
	for (i = 1; i <= 12; i++)
		sdata.push({value : i, text : i});
	var store = Ext.create('Ext.data.Store', {
		fields : ['value', 'text'],
		data : sdata
	})
	return store;
}
});