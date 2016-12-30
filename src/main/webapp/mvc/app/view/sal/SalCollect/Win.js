Ext.define('mvc.view.sal.SalCollect.Win',{
extend : 'Ext.window.Window',
width : 400,
layout : 'fit',
form : null,
resizable : true,
modal : true,
iconCls : 'app-icon',
insFlag : true,
initComponent : function(){
		this.items ={
	anchor : '100%',
	plain : true,
	xtype : Ext.create('mvc.view.sal.SalCollect.Form',{	insFlag : this.insFlag})
};
		this.buttonAlign = 'right',
this.buttons =[{
		text : '重置',
		scope : this,
		iconCls : 'win-refresh-icon',
		handler : this.onReset
	},{
		text : '关闭',
		scope : this,
		iconCls : 'win-close-icon',
		handler : this.onClose
	},{
		text : '搜索',
		scope : this,
		iconCls : 'win-ok-icon',
		handler : this.onSearch
	}];
		this.callParent(arguments);
		this.addEvents('create');
		this.form = this.items.items[0];
},
setActiveRecord : function(record){
		this.form.activeRecord = record;
		if (record || this.form.activeRecord) {
			this.form.getForm().loadRecord(record);
		} else {
			this.form.getForm().reset();
		}
},
onReset : function(){
		this.setActiveRecord(this.form.activeRecord);
},
onClose : function(){
		this.close();
},
onSearch : function(){
	var form = this.form.getForm();
	if (form.isValid()) {
		form.submit({
			url : this.form.url,
			submitEmptyText: false,
			type : 'ajax',
			//params : {insFlag : this.insFlag},
			success : function(form, action) {
				this.fireEvent('create', this, action.result);
				this.onClose();
			},
			failure : mvc.Tools.formFailure(),
			waitTitle : wait_title,
			waitMsg : wait_msg,
			scope : this
		});
	}
}
});