Ext.define('mvc.view.gs.GsPhyinv.InvWin', {
	extend : 'Ext.window.Window',
	width : 720,
	resizable : false,
	modal : true,
	iconCls : 'app-icon',
	pkeyFlag : true,
	pkey : null,
	initComponent : function() {
		this.items = [{
			anchor : '100%',
			plain : true,
			xtype : Ext.create('mvc.view.gs.GsPhyinv.InvForm',{
				pkey : this.pkey
			})
		},{
			xtype : Ext.create('mvc.view.gs.GsPhyinv.InvListForm',{
				minHeight : 300,
				border : false
//				,
//				mainPkey : this.pkey
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
				params : this.storeValues(this.lineTable.store,{insFlag : this.insFlag}),
				success : function(form, action) {
					me.fireEvent('create', me, action.result);
					me.onClose();
					Ext.example.msg(msg_title, '盘点登记--成功');
				},
				failure : mvc.Tools.formFailure(),
				waitTitle : wait_title,
				waitMsg : wait_msg,
				scope : this
			});
		}
	},
	storeValues : function(store, params) {
    	var fields = store.model.getFields(),
    		fLen    = fields.length,
    		i = 0,
    		value
    		values = {};
    	store.each(function(record) {
    		for (f = 0; f < fLen; f++) {
    			if (fields[f].name.indexOf('link.') != -1) //过滤关联带出的字段
    				continue;
    			value = record.get(fields[f].name);
    			if (value || value===0){
        			if (typeof fields[f].outkey != 'undefined' || 
        					typeof fields[f].optCust != 'undefined')
    					value = value.split(bean_split)[0];
    				else if (typeof fields[f].isPct != 'undefined')
    					value = value / fields[f].isPct;
	        		values['batchListLine'+'['+i+'].'+fields[f].mapping] = value;
    			}
        	}
        	i++;
    	});
    	Ext.apply(values, params);
    	return values;
    }
});
