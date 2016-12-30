Ext.define('mvc.view.pur.PurOrderDirect.Win',{
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
		xtype : Ext.create('mvc.view.pur.PurOrderDirect.Form',{	insFlag : this.insFlag,checkPrice : this.checkPrice})
	},{
		xtype : Ext.create('mvc.view.pur.PurOrderDirect.ListForm',{minHeight : 200,border : false,checkPrice : this.checkPrice })
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
			if(!this.checkPrice){
				this.lineTable.store.filter([{'id':'filter','property':'pkey','value':record.get('bean.pkey')}]);
			}else{
				this.lineTable.store.setProxy({
					type : 'ajax',
					url : base_path+'/pur_PurOrderDirectLine_listForPrice',
					reader : {
						type : 'json',
						root : 'items',
						totalProperty : 'total'
					},
					simpleSortMode : true
				});
				this.lineTable.store.load({
					params : {pkey:record.get('bean.pkey')},
					callback:function(){
						var amt=0;
						this.lineTable.store.each(function(line){
							//line.set('bean.price',10);
							amt = amt + Number(line.get('bean.amt'));
						});
						this.down('#amt').setValue(amt);
					},scope:this});
			}
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
},
setActiveRecordDr : function(dirId){
		Ext.Ajax.request({
				async : false,
				scope : this,
				url : base_path + '/pur_PurOrderDirect_initDr',
				params:{dirId:dirId},
				method : 'GET',
				success : function(response) {
					var rtn = Ext.JSON.decode(response.responseText, true);
					if(rtn.message){
						alert(rtn.message);
						return;
					}
					var order  = Ext.create('mvc.model.pur.PurOrderDirect');
					Ext.apply(order.data,rtn.order);
					this.form.getForm().loadRecord(order);
					this.lineTable.store.loadData(rtn.lines);
				},
				failure : function(response) {
					Ext.example.msg(msg_title, msg_ajax);
				}
		});
}
});