Ext.define('mvc.view.gs.GsWarehouse.Form',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/gs_GsWarehouse_',
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
		mvc.Tools.crtComboTrigger(false,'sys_SysDept','',{
					name : 'bean.pkey',
					fieldLabel : '仓库',
					readOnly : !this.insFlag
				})
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.enabled',
					fieldLabel : '启用标志',
					store : Ext.create('mvc.combo.sys.SysOEnabled'),
					value : 1
				})
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.locationFlag',
					fieldLabel : '货位管理标志',
					store : Ext.create('mvc.combo.sys.SysOYn'),
					value : 0
				})
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.outOrder',
					fieldLabel : '存货出库顺序',
					store : Ext.create('mvc.combo.gs.GsOOutOrder'),
					value : 1
				})
	,{
		xtype : 'beantrigger',
		name : 'bean.consignees',
		fieldLabel : '收货人',
		bean : 'SysEm',
		beanType : 'sys',
		emptyText : form_empty_text
	},
		mvc.Tools.crtComboForm(false,{
					name : 'bean.invented',
					fieldLabel : '是否为虚拟仓库',
					store : Ext.create('mvc.combo.sys.SysOYn'),
					value : 0
				})
	,{xtype : 'textfield',name : 'bean.rem',fieldLabel : '备注'}
	,{xtype : 'numberfield',name : 'bean.rowVersion',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '版本',hidden : true,allowDecimals : false}
	);
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