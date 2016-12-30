Ext.define('mvc.view.gs.GsPriceCtl.Form',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
comboStore : null,
bodyPadding : '5 5 5 5',
url : base_path+'/gs_GsPriceCtl_',
fieldDefaults : {
	labelWidth : 150,
	labelStyle : 'font-weight : bold'
},
initComponent : function(){
			 this.comboStore = this.getPriceName();
				if (this.insFlag)
					this.url = this.url + 'ins';
				else
					this.url = this.url + 'upd';
				var formFlds = [];
				formFlds.push
(
		 		mvc.Tools.crtComboForm(false,{
			fieldLabel : '对象类型',
			name : 'tbObjType',
			store : Ext.create('Ext.data.Store', {
			    fields: ['value', 'text'],
			    data : [
				        {value:1, text:'机构'},
				        {value:2, text:'核算单元'}
				    ]
				}),
			value : 1,
			readOnly : !this.insFlag,
			listeners : {
				scope : this,
				change : function(field,newv,oldv,opts) {
					if (newv===1){
						this.down('[name=tbObjOrg]').show();
						this.down('[name=tbObjCell]').setDisabled()
						this.down('[name=tbObjCell]').hide();
					}else if (newv === 2){
						this.down('[name=tbObjOrg]').setDisabled();
						this.down('[name=tbObjOrg]').hide();
						this.down('[name=tbObjCell]').show();
					}
				}
			}
		}),
		mvc.Tools.crtComboTrigger(true,'sys_SysOrg','',{
			name : 'tbObjOrg',
			fieldLabel : '机构',
			readOnly : !this.insFlag,
		}),
		mvc.Tools.crtComboTrigger(true,'sys_SysCell','',{
			name : 'tbObjCell',
			fieldLabel : '核算单元',
			readOnly : !this.insFlag,
			hidden : true
		})

	,
		mvc.Tools.crtComboTrigger(false,'gs_GsPrice','',{
					name : 'bean.price',
					fieldLabel : '定价名称',
					listeners : {
						scope : this,
						change : function(field,newv,oldv,opts) {
							if (newv){
								this.comboStore.proxy.extraParams={"pkey":newv};
								this.comboStore.load();
							}else{
								this.comboStore.removeAll();
							}
							this.down('[name=bean.retailLevel]').setValue('');
							this.down('[name=bean.lowestLevel]').setValue('');
							this.down('[name=bean.tradeLevel]').setValue('');
							this.down('[name=bean.mvLevel]').setValue('');
						}
					}
				})

	,{xtype : 'combo',name : 'bean.retailLevel',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '默认零售价格级别',allowDecimals : false,store : this.comboStore,valueField : 'value'}
	,{xtype : 'combo',name : 'bean.lowestLevel',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '默认最低零售价格级别',allowDecimals : false,store : this.comboStore,valueField : 'value'}
	,{xtype : 'combo',name : 'bean.tradeLevel',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '默认批发价格级别',allowDecimals : false,store : this.comboStore,valueField : 'value'}
	,{xtype : 'combo',name : 'bean.mvLevel',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '默认调拨价格级别',allowDecimals : false,store : this.comboStore,valueField : 'value'}
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
},
getPriceName : function(){
			var store = Ext.create('Ext.data.Store', {
				fields : ['value', 'text'],
				proxy : {
					type : 'ajax',
					url : base_path+'/gs_GsPrice_getPriceNameCombo',
					reader : {
						type : 'json'
					}
				}
			})
			return store;
}
});