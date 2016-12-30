Ext.define('mvc.view.pur.PurRev.Win',{
extend : 'Ext.window.Window',
width : 880,
maxHeight : 520,
resizable : false,
modal : true,
iconCls : 'app-icon',
pkeyFlag : true,
insFlag : true,
initComponent : function(){
		this.items =[{
		anchor : '100%',
		plain : true,
		xtype : Ext.create('mvc.view.pur.PurRev.Form',{	insFlag : this.insFlag})
	},{
		xtype : Ext.create('mvc.view.pur.PurRev.ListForm',{height : 300,border : false })
	}];
		this.buttonAlign = 'right',
this.buttons =[{
		text : '重置',
		iconCls : 'win-refresh-icon',
		scope : this,
		handler : this.onReset
	},{
		text : '关闭',
		iconCls : 'win-close-icon',
		scope : this,
		handler : this.onClose
	},{
		text : '保存',
		iconCls : 'win-save-icon',
		scope : this,
		handler : this.onSave
	}];
		this.callParent(arguments);
		this.addEvents('create');
		this.form = this.items.items[0];
		this.lineTable = this.items.items[1];
},
setActiveRecordIns : function(order){
			Ext.Ajax.request({
						async : false,
						scope : this,
						url : base_path + '/pur_PurRev_init',
						params:{orderId:order},
						method : 'GET',
						success : function(response) {
							var rtn = Ext.JSON.decode(response.responseText, true);
							var rev  = Ext.create('mvc.model.pur.PurRev');
							Ext.apply(rev.data,rtn.rev);
							this.form.getForm().loadRecord(rev);
							this.lineTable.store.loadData(rtn.revLine);
						},
						failure : function(response) {
							Ext.example.msg(msg_title, msg_ajax);
						}
				});
},
setActiveRecord : function(record){
		this.form.activeRecord = record;
		if (record || this.form.activeRecord) {
			this.form.getForm().loadRecord(record);
			this.lineTable.store.filter([{'id':'filter','property':'pkey','value':record.get('bean.pkey')}]);
		} else {
			this.form.getForm().reset();
			this.lineTable.store.removeAll();
		}
},
onReset : function(){
		this.setActiveRecord(this.form.activeRecord);
},
onClose : function(){
		this.lineTable.cellEditing.cancelEdit();
		this.close();
},
onSave : function(){
		var form = this.form.getForm();
		console.log('a',1);
		if (form.isValid()) {
			console.log('a',2);
			form.submit({
				url : this.form.url,
				submitEmptyText: false,
				type : 'ajax',
				params : mvc.Tools.storeValues(this.lineTable.store,{insFlag : this.insFlag}),
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