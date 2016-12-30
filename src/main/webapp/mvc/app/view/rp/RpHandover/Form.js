Ext.define('mvc.view.rp.RpHandover.Form',{
frist : true,
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/rp_RpHandover_',
fieldDefaults : {
	labelWidth : 100,
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
(
				mvc.Tools.crtComboTrigger(false,'sys_SysUser','',{
					name : 'bean.source',
					fieldLabel : '交出人',
						listeners :{
							scope : this,
							change : function(field,newv,oldv,opts) {
								if(!newv && this.frist)
									return;
								if(!this.frist  || this.insFlag){
									this.up('panel').down('grid').getStore().removeAll();
								}
								this.frist = false;
							}
						}
				})

	,{xtype : 'datefield',name : 'bean.giveUpTime',value : 'Env.getTranBeginTime()',fieldLabel : '交出时间',afterLabelTextTpl : required,allowBlank : false,format : 'Y-m-d H:i:s',value : new Date()}
	,{
		xtype : 'beantrigger',
		name : 'bean.workBox',
		fieldLabel : '收入的工作箱',
		bean : 'RpWorkBox',
		beanType : 'rp',
		emptyText : form_empty_text,
		afterLabelTextTpl : required,
		allowBlank : false
	},{xtype : 'numberfield',name : 'bean.rowVersion',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '版本',hidden : true,allowDecimals : false}
	,{xtype : 'textfield',name : 'bean.rem',fieldLabel : '备注'}
	,{
		xtype : 'hiddenfield',
		name : 'bean.pkey'
	});
	this.items = [{
		layout : {
			type : 'table',
			columns : 2,
			itemCls : 'x-layout-table-items-form'
		},
		border : false,
		items : formFlds
	}];
	this.callParent(arguments);
}
});