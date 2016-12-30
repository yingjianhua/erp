Ext.define('mvc.view.gs.GsGoods.GoodsWin', {
	extend : 'Ext.window.Window',
	width : 640,
	height : 500,
	layout : 'fit',
	resizable : true,
	modal : true,
	border : false,
	iconCls : 'app-icon',
	insFlag : true,
	cls : 'x-checkgroup-boxLabel',
	initComponent : function() {
		this.items = [{
			xtype : 'tabpanel',
			items : [{
						xtype : Ext.create('mvc.view.gs.GsGoods.GoodsForm',{
							title:'基础属性', 
							insFlag : this.insFlag,
							itemId : 'goods_base'
						})
					},{
						xtype : Ext.create('mvc.view.gs.GsGoods.GoodsSpec',{
							title:'规格属性',
							insFlag : this.insFlag,
							itemId : 'goods_spec'
						})
					},{
						xtype : Ext.create('mvc.view.gs.GsGoods.GoodsPic',{title:'图片'})
					}]
		}];
		this.buttonAlign = 'right';
		this.buttons = [{
			text : '关闭',
			scope : this,
			iconCls : 'win-close-icon',
			handler : this.onClose
		},{
			text : '保存',
			scope : this,
			iconCls : 'win-save-icon',
			handler : this.onSave
		}];
		this.callParent(arguments);
		this.addEvents('create');
	},
	onClose : function(){
		this.close();
	},
	setActiveRecord : function(record) {
		var form = this.down('#goods_base');
		var spec = this.down('#goods_spec');
		form.activeRecord = record;
		if (record || form.activeRecord) {
			form.getForm().loadRecord(record);
			spec.setActiveRecord(record);
		} else {
			form.getForm().reset();
			spec.setActiveRecord();
		}
	},
	onSave : function(){
		var form = this.down('#goods_base');
		var specPanel = this.down('#goods_spec');
		var values = specPanel.onGetData();
		if (!values)
			values = {};
		values.insFlag = this.insFlag;
		if (form.isValid()) {
			form.submit({
				url : form.url,
				type : 'ajax',
				params : values,
				submitEmptyText: false,
				success : function(form, action) {
					this.fireEvent('create', this, action.result);
					this.close();
				},
				failure : mvc.Tools.formFailure(),
				waitTitle : wait_title,
				waitMsg : wait_msg,
				scope : this
			});
		}
	}
});