Ext.define('mvc.view.gl.GlRate.List',{
extend : 'Ext.grid.Panel',
oldId : 'btn_GlRate',
lock : true,
disableSelection : false,
loadMask : true,
multiSelect : true,
roles : '',
selModel : {selType : 'checkboxmodel'},
initComponent : function(){
var mainActs = [];		if (this.roles.indexOf('ins') != -1)
mainActs.push({
		text : '新增',
		iconCls : 'ins-icon',
		itemId : this.oldId+'ins',
		scope : this,
		handler : this.onIns
	});
		if (this.roles.indexOf('upd') != -1)
mainActs.push({
		text : '修改',
		iconCls : 'upd-icon',
		itemId : this.oldId+'upd',
		scope : this,
		handler : this.onUpd,
		disabled : this.lock
	});
		if (this.roles.indexOf('del') != -1)
mainActs.push({
		text : '删除',
		iconCls : 'del-icon',
		itemId : this.oldId+'del',
		scope : this,
		handler : this.onDel,
		disabled : this.lock
	});
this.columns = [{text : '利率类型',width : 100.0,dataIndex : 'bean.rateType',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '启用日期',width : 100.0,dataIndex : 'bean.bdate',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d')}
	,{text : '基准利率',width : 100.0,dataIndex : 'bean.baseRate',sortable : true,align : 'right'}
	,{text : '最大上浮幅度',width : 100.0,dataIndex : 'bean.floatUp',sortable : true,align : 'right'}
	,{text : '最大下浮幅度',width : 100.0,dataIndex : 'bean.floatDown',sortable : true,align : 'right'}
	,{text : '启用标志',width : 100.0,dataIndex : 'bean.enabled',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OEnabled')}
	,{text : '罚息利率',width : 100.0,dataIndex : 'bean.interestRate',sortable : true,align : 'right'}
	,{text : '罚息最大上浮幅度',width : 100.0,dataIndex : 'bean.irFloatUp',sortable : true,align : 'right'}
	,{text : '罚息最大下浮幅度',width : 100.0,dataIndex : 'bean.irFloatDown',sortable : true,align : 'right'}
	,{text : '备注',width : 100.0,dataIndex : 'bean.rem',sortable : true}
	,{text : '建档员',width : 100.0,dataIndex : 'bean.createdBy',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '建档时间',width : 140.0,dataIndex : 'bean.createdTime',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s')}
	];
		this.tbar=mainActs;
		this.store=Ext.create('mvc.store.gl.GlRate'); 
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
this.dockedItems=[{
		dock : 'top',
		xtype : 'toolbar',
		items : [{
				xtype : 'label',
				text : '利率类型：'
			},
				mvc.Tools.crtComboTrigger(true,'gl_GlRateType','',{
							name : 'rateType'
						})
			,'',{
				xtype : 'label',
				text : '启用标志：'
			},{
				xtype : 'combo',
				name : 'enabled',
				mode : 'local',
				valueField : 'value',
				triggerAction : 'all',
				forceSelection : true,
				typeAhead : true,
				editable : false,
				emptyText : form_empty_text,
				store : Ext.create('mvc.combo.sys.SysOEnabled')
			},'',{
				xtype : 'button',
				text : '撤销',
				scope : this,
				iconCls : 'win-close-icon',
				handler : this.onSearchCancel
			},{
				xtype : 'splitbutton',
				text : '搜索',
				scope : this,
				iconCls : 'win-ok-icon',
				handler : this.onSearch,
				menu : [{text:'高级搜索',iconCls : 'win-ok-icon', scope : this,handler: this.onSearchAdv}]
			}]
	},{
		xtype : 'pagingtoolbar',
		store : this.store,
		dock : 'bottom',
		displayInfo : true,
		displayMsg : '显示 {0} - {1} 条，共计 {2} 条',
		emptyMsg : '没有数据',
		items : [{
				xtype : Ext.create('mvc.tools.ComboxPaging',{myList : this})
			}]
	}];
		this.callParent(arguments);},
listeners : {
	selectionchange : function(selModel, selected){
		if (this.roles.indexOf('upd') != -1)
			this.down('#'+this.oldId+'upd').setDisabled(selected.length === 0);	
		if (this.roles.indexOf('del') != -1)
			this.down('#'+this.oldId+'del').setDisabled(selected.length === 0);	
}
},
onSaveRecord : function(form, data){
		this.store.insert(0,data);
		this.getView().select(0);
		Ext.example.msg(msg_title, msg_text);	
},
onIns : function(){
		var win = Ext.create('mvc.view.gl.GlRate.Win',{
			title : this.title+'>新增'
		});
		win.on('create',this.onSaveRecord,this);
		win.show();		
},
onUpdateRecord : function(form, data){
		var selection = this.getView().getSelectionModel().getSelection()[0];
		var bean = Ext.create('mvc.model.gl.GlRate', data);
		Ext.apply(selection.data,bean.data);
		selection.commit();
		this.getView().select(selection);
		Ext.example.msg(msg_title, msg_text);			
},
onUpd : function(){
		var selection = this.getView().getSelectionModel().getSelection()[0];
		this.onUpdWin(selection);
},
onUpdRow : function(grid, rowIndex){
		var selection = this.getStore().getAt(rowIndex);
		this.getView().deselect(this.getView().getSelectionModel().getSelection());
		this.getView().select(selection);
		this.onUpdWin(selection);			
},
onUpdWin : function(selection){
		if (selection){
			mvc.model.gl.GlRate.load(selection.get('bean.pkey'), {
				scope : this,
				failure : function(response, operation) {
					Ext.example.msg(msg_title,msg_ajax);
				},
				success : function(response, operation) {
					Ext.apply(selection.data,response.data);
					var win = Ext.create('mvc.view.gl.GlRate.Win',{
						title : this.title+'>修改',
						insFlag : false
					});
					win.on('create',this.onUpdateRecord,this);
					win.show();
					win.setActiveRecord(selection);
				}
			});
		}			
},
onDel : function(){
		var selection = this.getView().getSelectionModel().getSelection();
		if (selection){
			var me = this;
			Ext.MessageBox.confirm(msg_confirm_title, msg_confirm_msg, 
				function(btn) {
					if (btn != 'yes')
						return;
					var arr=new Array();
					for(var i = 0; i < selection.length; i++){
						arr.push(selection[i].get('bean.pkey'));
					}
					Ext.Ajax.request({
						url : base_path+'/gl_GlRate_delMulti',
						params : { pkeys : arr.toString() },
						success : function (response, options) {
							var result = Ext.decode(response.responseText);
							if (result.success){
								me.getStore().remove(selection);
								Ext.example.msg(msg_title, msg_del);
							}else{
								Ext.MessageBox.show({
									title : msg_title, 
									msg : result.msg,
									buttons : Ext.MessageBox.OK,
									icon : Ext.MessageBox.ERROR
								});
							}
						}
					});
				}
			);
		}
},
onDelRow : function(grid, rowIndex){
		var me = this;
		Ext.MessageBox.confirm(msg_confirm_title, msg_confirm_msg,
			function(btn) {
				if (btn != 'yes')
					return;
				Ext.Ajax.request({
					url : base_path+'/gl_GlRate_del?pkey='+me.getStore().getAt(rowIndex).get('bean.pkey'),
					success : function (response, options) {
						var result = Ext.decode(response.responseText);
						if (result.success){
							me.getStore().removeAt(rowIndex);
							Ext.example.msg(msg_title, msg_del);
						}else{
							Ext.MessageBox.show({ 
								title : msg_title,
								msg : result.msg,
								buttons : Ext.MessageBox.OK,
								icon : Ext.MessageBox.ERROR
							});
						}
					}
				});
			}
		);
},
onSearchCancel : function(){
	this.getSelectionModel().deselectAll();

		mvc.Tools.searchClear(this.down('toolbar'));
		this.store.clearFilter();
},
onSearch : function(){
	this.getSelectionModel().deselectAll();

		var array = mvc.Tools.searchValues(this.down('toolbar'));
		if (array.length == 0){
			this.store.clearFilter();
			return;
		}
		this.store.clearFilter(true);
		this.store.filter(array);
},
onSearchAdv : function(){
		var win = Ext.create('mvc.view.gl.GlRate.WinSearch',{
			title : this.title+'>高级搜索',
			listStore : this.store
		});
		win.show();
}
});