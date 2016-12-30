Ext.define('mvc.view.gs.GsPriceGoodsKindCell.Win', {
	extend : 'Ext.window.Window',
	width : 700,
	resizable : false,
	modal : true,
	iconCls : 'app-icon',
	pkeyFlag : true,
	insFlag : true,
	initComponent : function() {
		this.items = [{
			anchor : '100%',
			plain : true,
			xtype : Ext.create('mvc.view.gs.GsPriceGoodsKindCell.Form',{
				insFlag : this.insFlag
			})
		},{
			xtype : Ext.create('mvc.view.gs.GsPriceGoodsKindCell.ListForm',{
				minHeight : 300,
				border : false
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
//			this.lineTable.store.filter([{'id':'filter','property':'pkey','value':record.get('bean.pkey')}]);
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
		var selection = this.lineTable.getView().getSelectionModel().getSelection();
		var values = {};
		if (selection) {
			for(var i = 0; i < selection.length; i++){
				values[line_pr+'['+i+'].'+'pkey'] = selection[i].get('bean.pkey');
				values[line_pr+'['+i+'].'+'goods'] = selection[i].get('bean.goods').split(bean_split)[0];
				values[line_pr+'['+i+'].'+'priceCost'] = selection[i].get('bean.priceCost');
				for(var j = 1; j < 13; j++)
					values[line_pr+'['+i+'].'+'price'+j] = selection[i].get('bean.price'+j);
			}
		}
		var form = this.form.getForm();
		if (form.isValid()) {
			form.submit({
				url : this.form.url,
				submitEmptyText: false,
				type : 'ajax',
//				params : mvc.Tools.storeValues(this.lineTable.store,{insFlag : this.insFlag}),
				params : values,
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
