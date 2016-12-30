Ext.define('mvc.view.frm.FrmPending.WinPending', {
	extend : 'Ext.window.Window',
	width : 680,
	modal : true,
	iconCls : 'app-icon',
	pkeyFlag : true,
	initComponent : function() {
		this.items = [ {
			anchor : '100%',
			plain : true,
			xtype : Ext.create('mvc.view.frm.FrmPending.ListPending', {
				height : 450,
				descUrl : this.descUrl,
				descType : this.descType
			})
		}];
		this.callParent(arguments);
		this.addEvents('create');
	},
	onSave : function() {
	}
});