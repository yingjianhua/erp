Ext.define('mvc.view.sal.SalCollect.Form',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/sal_SalCollect_list',
fieldDefaults : {
	labelWidth : 100,
	labelStyle : 'font-weight : bold'
},
initComponent : function(){
				var formFlds = [];
				formFlds.push({
					xtype : 'datefield',
					name : 'startDate',
					afterLabelTextTpl : required,
					allowBlank : false,
					fieldLabel : '开始时间',
					format : 'Y-m-d'
				},{
					xtype : 'datefield',
					name : 'expireDate',
					afterLabelTextTpl : required,
					allowBlank : false,
					fieldLabel : '截止时间',
					format : 'Y-m-d'
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