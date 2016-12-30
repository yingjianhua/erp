Ext.define('mvc.view.gl.GlDaybook.Win', {
	extend : 'Ext.window.Window',
	width : 680,
	modal : true,
	iconCls : 'app-icon',
	pkeyFlag : true,
	initComponent : function() {
		this.items = [ {
			anchor : '100%',
			plain : true,
			xtype : Ext.create('mvc.view.gl.GlDaybook.ListForm', {
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