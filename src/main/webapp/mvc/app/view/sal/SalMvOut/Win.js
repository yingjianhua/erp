Ext.define('mvc.view.sal.SalMvOut.Win',{
insFd : false,
chkFlag : false,
wsql : '',
extend : 'Ext.window.Window',
width : 780,
resizable : false,
modal : true,
iconCls : 'app-icon',
pkeyFlag : true,
insFlag : true,
initComponent : function(){
		this.items =[{
		anchor : '100%',
		plain : true,
		xtype : Ext.create('mvc.view.sal.SalMvOut.Form',{	insFlag : this.insFlag,insFd:this.insFd,chkFlag:this.chkFlag,wsql:this.wsql})
	},{
		xtype : Ext.create('mvc.view.sal.SalMvOut.ListForm',{minHeight : 300,border : false,insFd:this.insFd,chkFlag:this.chkFlag })
	}];
		this.buttonAlign = 'right',
this.buttons =[{xtype : 'label',itemId : 'cqty'},'->',{
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
setActiveRecordIns : function(warehouse,lines){
	var dpkeys=[];
	Ext.each(lines,function(dm,index){
		dpkeys.push(dm.get('bean.pkey'));
	});
	Ext.Ajax.request({
			async : false,
			scope : this,
			url : base_path + '/sal_SalMvOut_init',
			params:{whsId:warehouse,dlines:dpkeys.join(',')},
			method : 'GET',
			success : function(response) {
				var rtn = Ext.JSON.decode(response.responseText, true);
				var mvOut  = Ext.create('mvc.model.sal.SalMvOut');
				Ext.apply(mvOut.data,rtn.mvOut);
				this.form.getForm().loadRecord(mvOut);
				this.lineTable.store.loadData(rtn.lines);
			},
			failure : function(response) {
				Ext.example.msg(msg_title, msg_ajax);
			}
	});

},
setActiveRecord : function(record){
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