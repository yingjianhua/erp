Ext.define('mvc.view.lgt.LgtShipMode.Form',{
	extend : 'Ext.form.Panel',
	requires : ['Ext.ux.DataTip'],
	layout : 'form',
	border : false,
	frame : false,
	insFlag : true,
	bodyPadding : '5 5 5 5',
	url : base_path+'/lgt_LgtShipMode_',
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
		formFlds.push({
				xtype : 'textfield',
				name : 'bean.code',
				afterLabelTextTpl : required,
				allowBlank : false,
				fieldLabel : '代码'
			},{
				xtype : 'textfield',
				name : 'bean.name',
				afterLabelTextTpl : required,
				allowBlank : false,
				fieldLabel : '名称'
			},mvc.Tools.crtComboTrigger(true,'sys_SysOrg','',{
				name : 'bean.org',
				fieldLabel : '机构'
			}),{
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
