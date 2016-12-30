Ext.define('mvc.view.sal.SalSaleDirect.Win',{
extend : 'Ext.window.Window',
width : 880,
resizable : false,
modal : true,
iconCls : 'app-icon',
pkeyFlag : true,
insFlag : true,
initComponent : function(){
		this.items =[{
		anchor : '100%',
		plain : true,
		xtype : Ext.create('mvc.view.sal.SalSaleDirect.Form',{	insFlag : this.insFlag})
	},{
		xtype : Ext.create('mvc.view.sal.SalSaleDirect.ListForm',{height : 250,border : false })
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
setActiveRecord : function(record){
		this.form.activeRecord = record;
		if (record || this.form.activeRecord) {
			this.form.getForm().loadRecord(record);
			this.lineTable.store.filter([{'id':'filter','property':'pkey','value':record.get('bean.pkey')}]);
			if (record.get('bean.ord'))
				this.initOrderCmp();
		} else {
			if (this.orderPkey){
				this.setActiveOrder(this.orderPkey);
			}else{
				this.form.getForm().reset();
				this.lineTable.store.removeAll();
			}
		}
},
setActiveOrder : function(orderPkey){
	this.initOrderCmp();
	this.orderPkey = orderPkey;
	Ext.Ajax.request({
		scope : this,
		url : base_path + '/sal_SalSale_initByOrder',
		params:{'orderPkey':orderPkey},
		method : 'GET',
		success : function(response) {
			var rtn = Ext.JSON.decode(response.responseText, true);
			var row  = Ext.create('mvc.model.sal.SalSaleDirect');
			Ext.apply(row.data,rtn.row);
			this.form.getForm().loadRecord(row);
			this.lineTable.store.loadData(rtn.lines);
		},
		failure : function(response) {
			Ext.example.msg(msg_title, msg_ajax);
		}
	});
},
initOrderCmp : function(){
	this.form.getForm().getFields().each(function(fd){
		if (fd.name!='bean.amtOrd' && fd.name!='bean.amtPay' && fd.name!='bean.amtRec')
			fd.setReadOnly(true);
	});
	this.lineTable.down('[text=新增]').hide();
	this.lineTable.columns[0].editor = null;
	this.lineTable.columns[4].editor = null;
	this.lineTable.columns[5].editor = null;
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
		if (form.isValid()) {
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