Ext.define('mvc.view.pur.PurOrder.Win',{
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
		xtype : Ext.create('mvc.view.pur.PurOrder.Form',{	insFlag : this.insFlag,checkPrice : this.checkPrice})
	},{
		xtype : Ext.create('mvc.view.pur.PurOrder.ListForm',{minHeight : 200,border : false,checkPrice : this.checkPrice })
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
setActiveRecordIns : function(warehouse,tmp,supplier,lines){
		Ext.Ajax.request({
			async : false,
			scope : this,
			url : base_path + '/pur_PurOrder_init',
			params:{temId:tmp,supId:supplier,whsId:warehouse},
			method : 'GET',
			success : function(response) {
				var rtn = Ext.JSON.decode(response.responseText, true);
				var order  = Ext.create('mvc.model.pur.PurOrder');
				Ext.apply(order.data,rtn);
				this.form.getForm().loadRecord(order);
			},
			failure : function(response) {
				Ext.example.msg(msg_title, msg_ajax);
			}
	});
	Ext.each(lines,function(dm){
		var orderLine  = Ext.create('mvc.model.pur.PurOrderLine');
		orderLine.set('bean.pkey',dm.get('bean.pkey'));
		orderLine.set('bean.goods',dm.get('bean.goods'));
		orderLine.set('link.goodsName',dm.get('link.goodsName'));
		orderLine.set('link.goodsSpec',dm.get('link.goodsSpec'));
		orderLine.set('bean.uom',dm.get('bean.uom'));
		orderLine.set('bean.qty',dm.get('bean.qty'));
		this.lineTable.store.insert(0,orderLine);
		
	},this);
	//this.form.getForm().loadRecord(mainRecord);
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
					url : base_path+'/pur_PurOrderLine_listForPrice',
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
						//this.down('#amt').setValue(amt);
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
}
});