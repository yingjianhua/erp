Ext.define('mvc.view.gs.GsIn.ApprWin', {
	extend : 'Ext.window.Window',
	width : 775,
	resizable : false,
	modal : true,
	iconCls : 'app-icon',
	pkeyFlag : true,
	goodsKeys : null,
	initComponent : function() {
		this.items = [{
			anchor : '100%',
			plain : true,
			xtype : Ext.create('mvc.view.gs.GsIn.ApprForm',{
				pkey : this.pkey
			})
		},{
			xtype : Ext.create('mvc.view.gs.GsIn.ApprListForm',{
				height : 300,
				border : false,
				goodsKeys : this.goodsKeys
			})
		}];
		this.buttonAlign = 'right',
		this.buttons = [{
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
			text : '保存',
			scope : this,
			iconCls : 'win-save-icon',
			handler : this.onSave
		}]
		this.callParent(arguments);
		this.addEvents('create');
		this.form = this.items.items[0];
		this.lineTable = this.items.items[1];
	},
	setActiveRecord : function(record) {
		this.form.activeRecord = record;
		if (record || this.form.activeRecord) {
			this.form.getForm().loadRecord(record);
			this.form.down('[name=bean.inTime]').setValue(new Date());
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
		var me = this;
		var form = this.form.getForm();
		if (form.isValid()) {
			form.submit({
				url : this.form.getForm().url,
				submitEmptyText: false,
				type : 'ajax',
				params : mvc.Tools.storeValues(this.lineTable.store,{insFlag : this.insFlag}),
				success : function(form, action) {
					me.fireEvent('create', me, action.result);
					me.onClose();
					Ext.example.msg(msg_title, '审核--成功');
				},
				failure : mvc.Tools.formFailure(),
				waitTitle : wait_title,
				waitMsg : wait_msg,
				scope : this
			});
		}
	}
});
