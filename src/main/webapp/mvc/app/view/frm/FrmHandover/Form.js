Ext.define('mvc.view.frm.FrmHandover.Form',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/frm_FrmHandover_',
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
		mvc.Tools.crtComboTrigger(false,'sys_SysUser','',{
					name : 'bean.apprBy',
					fieldLabel : '接收人'
				})
		,{xtype : 'textfield',name : 'bean.rem',fieldLabel : '备注'}
		,{xtype : 'numberfield',name : 'bean.rowVersion',value : '0',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '版本',hidden : true,allowDecimals : false}
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