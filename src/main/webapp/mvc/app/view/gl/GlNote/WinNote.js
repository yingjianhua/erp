Ext.define('mvc.view.gl.GlNote.WinNote',{
extend : 'Ext.window.Window',
width : 880,
resizable : false,
modal : true,
iconCls : 'app-icon',
pkeyFlag : true,
insFlag : true,
tableCode : 'irille.pss.sal.SalSale',
initComponent : function(){
		this.items =[{
			anchor : '100%',
			plain : true,
			xtype : Ext.create('mvc.view.gl.GlNote.FormNote',{insFlag : this.insFlag})
		},{
			xtype : Ext.create('mvc.view.gl.GlNote.ListFormNote',{minHeight : 300,border : false, tableCode :this.tableCode })
		}];
		this.callParent(arguments);
		this.addEvents('create');
		this.form = this.items.items[0];
		this.lineTable = this.items.items[1];
},
setActiveRecord : function(record){
		this.form.activeRecord = record;
		if (record || this.form.activeRecord) {
			this.form.getForm().loadRecord(record);
			this.lineTable.onSearch();
		} else {
			this.form.getForm().reset();
			this.lineTable.store.removeAll();
		}
}
});