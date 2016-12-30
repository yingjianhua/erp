Ext.define('mvc.view.rp.RpStimateRec.WinProc',{
extend : 'Ext.window.Window',
width : 400,
y : 100,
layout : 'fit',
form : null,
resizable : true,
modal : true,
iconCls : 'app-icon',
initComponent : function(){
		this.items ={
	anchor : '100%',
	plain : true,
	xtype : Ext.create('mvc.view.rp.RpStimateRec.FormProc')
};
		this.buttonAlign = 'right',
		this.buttons =[{
				text : '关闭',
				scope : this,
				iconCls : 'win-close-icon',
				handler : this.onClose
			},{
				text : '保存',
				scope : this,
				iconCls : 'win-save-icon',
				handler : this.onSave
			}];
		this.callParent(arguments);
		this.addEvents('create');
		this.form = this.items.items[0];
},
setBalance : function(pkey, amt){
	this.form.down('[name=note.pkey]').setValue(pkey);
	this.form.down('[name=note.amt]').setValue(amt);
},
onClose : function(){
		this.close();
},
onSave : function(){
		var form = this.form.getForm();
		if (form.isValid()) {
			form.submit({
				url : this.form.url,
				submitEmptyText: false,
				type : 'ajax',
				success : function(form, action) {
					this.fireEvent('create', this, action.result);
					this.close();
				},
				failure : mvc.Tools.formFailure(),
				waitTitle : wait_title,
				waitMsg : wait_msg,
				scope : this
			});
		}
}
});