Ext.define('mvc.view.gl.GlSubjectMap.List',{
extend : 'Ext.grid.Panel',
oldId : 'btn_GlSubjectMap',
lock : true,
disableSelection : false,
loadMask : true,
multiSelect : true,
roles : '',
selModel : {selType : 'checkboxmodel'},
viewConfig : {enableTextSelection : true},
initComponent : function(){
var mainActs = [];		if (this.roles.indexOf('upd') != -1)
mainActs.push({
		text : '修改',
		iconCls : 'upd-icon',
		itemId : this.oldId+'upd',
		scope : this,
		handler : this.onUpd,
		disabled : this.lock
	});
		if (this.roles.indexOf('refresh') != -1)
mainActs.push({
		text : '刷新别名',
		iconCls : 'ins-icon',
		itemId : this.oldId+'refresh',
		scope : this,
		handler : this.onRefresh,
		disabled : this.lock
	});
this.columns = [{text : '编号',width : 150,dataIndex : 'bean.pkey',sortable : true}
	,{text : '财务模板',width : 100,dataIndex : 'bean.templat',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'sys',mn : 'view.sys.SysTemplat.List'}
	,{text : '源别名或科目号',width : 120,dataIndex : 'bean.aliasSource',sortable : true}
	,{text : '目标别名',width : 100,dataIndex : 'bean.aliasTarget',sortable : true}
	,{text : '名称',width : 160,dataIndex : 'bean.name',sortable : true}
	,{text : '科目字典',width : 150,dataIndex : 'bean.subject',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'gl',mn : 'view.gl.GlSubject.List'}
	];
		if (mainActs.length > 0)
			this.tbar=mainActs;
		this.store=Ext.create('mvc.store.gl.GlSubjectMap'); 
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
		this.on({cellclick:mvc.Tools.onCellclick});
this.dockedItems=[{
		dock : 'top',
		xtype : 'toolbar',
		items : [{
				xtype : 'label',
				text : '财务模板：'
			},
				mvc.Tools.crtComboTrigger(true,'sys_SysTemplat','type=1',{
							name : 'templat'
						})
			,'',{
				xtype : 'label',
				text : '名称：'
			},{
				xtype : 'textfield',
				name : 'name'
			},'',{
				xtype : 'label',
				text : '源别名或科目号：'
			},{
				xtype : 'textfield',
				name : 'aliasSource'
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
		this.callParent(arguments);		mvc.Tools.onENTER2SearchBar(this.down('[dock=top]'),this);},
listeners : {
	selectionchange : function(selModel, selected){
		if (this.roles.indexOf('upd') != -1)
			this.down('#'+this.oldId+'upd').setDisabled(selected.length === 0);	
		if (this.roles.indexOf('refresh') != -1)
			this.down('#'+this.oldId+'refresh').setDisabled(selected.length === 0);	
}
},
onUpdateRecord : function(form, data){
		var selection = this.getView().getSelectionModel().getSelection()[0];
		var bean = Ext.create('mvc.model.gl.GlSubjectMap', data);
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
			var win = Ext.create('mvc.view.gl.GlSubjectMap.Win',{
				title : this.title+'>修改',
				insFlag : false
			});
			win.on('create',this.onUpdateRecord,this);
			win.show();
			win.setActiveRecord(selection);
		}			
},
onRefresh : function(){
		var me = this;
		Ext.MessageBox.confirm(msg_confirm_title, '您确认要刷新科目别名吗？',
			function(btn) {
				if (btn != 'yes')
					return;
				Ext.Ajax.request({
					url : base_path+'/gl_GlSubjectMap_refresh',
					success : function (response, options) {
						var result = Ext.decode(response.responseText);
						if (result.success){
							me.getStore().load();
							Ext.example.msg(msg_title, '科目别名刷新成功!');
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
		var array = mvc.Tools.searchValues(this.down('toolbar'));
		this.onSearchDo(array);
},
onSearchAdv : function(){
		var win = Ext.create('mvc.view.gl.GlSubjectMap.WinSearch',{
			title : this.title+'>高级搜索',
			listCmp : this
		});
		win.show();
},
onSearchDo : function(array){
		this.getSelectionModel().deselectAll();
		if (array.length == 0){
			this.store.clearFilter();
			return;
		}
		this.store.clearFilter(true);
		this.store.filter(array);
}
});