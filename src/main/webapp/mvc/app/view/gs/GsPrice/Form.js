Ext.define('mvc.view.gs.GsPrice.Form',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/gs_GsPrice_',
fieldDefaults : {
	labelWidth : 110,
	width : 275,
	labelStyle : 'font-weight : bold'
},
initComponent : function(){
				if(this.checkPrice)
					this.url = this.url + 'checkPrice';
				else if (this.insFlag)
					this.url = this.url + 'ins';
				else
					this.url = this.url + 'upd';
				var formFlds = [];
				formFlds.push
({xtype : 'textfield',name : 'bean.name',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '名称'}
	,{xtype : 'textfield',name : 'bean.namePrice1',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '价格名称1'}
	,{xtype : 'textfield',name : 'bean.namePrice2',fieldLabel : '价格名称2'}
	,{xtype : 'textfield',name : 'bean.namePrice3',fieldLabel : '价格名称3'}
	,{xtype : 'textfield',name : 'bean.namePrice4',fieldLabel : '价格名称4'}
	,{xtype : 'textfield',name : 'bean.namePrice5',fieldLabel : '价格名称5'}
	,{xtype : 'textfield',name : 'bean.namePrice6',fieldLabel : '价格名称6'}
	,{xtype : 'textfield',name : 'bean.namePrice7',fieldLabel : '价格名称7'}
	,{xtype : 'textfield',name : 'bean.namePrice8',fieldLabel : '价格名称8'}
	,{xtype : 'textfield',name : 'bean.namePrice9',fieldLabel : '价格名称9'}
	,{xtype : 'textfield',name : 'bean.namePrice10',fieldLabel : '价格名称10'}
	,{xtype : 'textfield',name : 'bean.namePrice11',fieldLabel : '价格名称11'}
	,{xtype : 'textfield',name : 'bean.namePrice12',fieldLabel : '价格名称12'}
	,
					mvc.Tools.crtComboForm(false,{
					name : 'bean.rangeType',
					fieldLabel : '可视范围',
					store : Ext.create('mvc.combo.sys.SysORangeType'),
					value : 1,
					listeners : {
						scope : this,
						change : function(field,newv,oldv,opts) {
							var range = this.down('[name=bean.rangePkey]');
							if (newv <= 10) {
								range.setDisabled(true);
								range.hide();
							} else {
								if (newv > 10 && newv <= 20) {
									range.setFieldLabel('可视机构');
									range.store.proxy.url = base_path + '/sys_SysOrg_getComboTrigger';
								} else if (newv >20 && newv <= 30) {
									range.setFieldLabel('可视单元');
									range.store.proxy.url = base_path + '/sys_SysCell_getComboTrigger';
								}
								range.store.load();
								range.setDisabled(false);
								range.show();
							}
						}
					}
				})

	,
				 mvc.Tools.crtComboTrigger(false,'sys_SysOrg','',{
			name : 'bean.rangePkey',
			fieldLabel : '可视机构',
			hidden : this.insFlag ? true : false,
			disabled : this.insFlag ? true : false
		})

	,
		mvc.Tools.crtComboTrigger(false,'sys_SysCell','',{
					name : 'bean.cell',
					fieldLabel : '管理核算单元'
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
	var rt = this.down('[name=bean.rangeType]');
	var rp = this.down('[name=bean.rangePkey]');
	if (rt.getValue() == 1) {
		rp.setDisabled(true);
		rp.hide();
	} else if (rt.getValue() > 10 && rt.getValue() <= 20) {
		rp.setFieldLabel('可视机构');
		rp.store.proxy.url = base_path + '/sys_SysOrg_getComboTrigger';
		rp.store.load();
	} else if (rt.getValue() >20 && rt.getValue() <= 30) {
		rp.setFieldLabel('可视单元');
		rp.store.proxy.url = base_path + '/sys_SysCell_getComboTrigger';
		rp.store.load();
	}
}
});