Ext.define('mvc.view.gl.GlDaybook.List',{
extend : 'Ext.panel.Panel',
oldId : 'GlDaybook_list_',
loadMask : true,
multiSelect : true,
roles : '',
layout : 'border',
lock : true,
mdSearch : null,
mdAct : null,
mdMain : null,
mdMainTable : null,
mdLineTable : null,
initComponent : function(){
var mainActs = [];		if (this.roles.indexOf('doTally') != -1)
mainActs.push({
		text : '记账',
		iconCls : 'doTally-icon',
		itemId : this.oldId+'doTally',
		scope : this,
		handler : this.onDoTally
	});
		if (this.roles.indexOf('unTally') != -1)
mainActs.push({
		text : '记账取消',
		iconCls : 'unTally-icon',
		itemId : this.oldId+'unTally',
		scope : this,
		handler : this.onUnTally,
		disabled : this.lock
	});
		this.items =[{
		region : 'north',
		xtype : 'panel',
		border : false,
		items : [{
				xtype : 'toolbar',
				itemId : this.oldId+'search',
				items : [{
						xtype : 'label',
						text : '代码：'
					},{
						xtype : 'textfield',
						name : 'code'
					},'',{
						xtype : 'label',
						text : '机构：'
					},
						mvc.Tools.crtComboTrigger(true,'sys_SysOrg','',{
									name : 'org'
								})
					,'',{
						xtype : 'label',
						text : '工作日期：'
					},{
						xtype : 'datefield',
						name : 'workDate',
						format : 'Y-m-d'
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
				xtype : 'toolbar',
				itemId : this.oldId+'act',
				items : mainActs
			},{
				xtype : 'form',
				itemId :  this.oldId+'main',
				bodyPadding : '5 5 0 5',
				fieldDefaults : {
					anchor : '100%',
					labelWidth : 100,
					width : 275,
					labelAlign : 'right',
					readOnly : true
				},
				items : [{
						xtype : 'fieldset',
						title : '流水账信息',
						collapsible : true,
						layout : {
							type : 'table',
							columns : 3
						},
						items : [{xtype : 'textfield',name : 'bean.code',fieldLabel : '代码'}
							,{xtype : 'beantrigger',name : 'bean.bill',fieldLabel : '凭证'}
							,{xtype : 'datefield',name : 'bean.workDate',fieldLabel : '工作日期',format : 'Y-m-d'}
							,{xtype : 'datefield',name : 'bean.createTime',fieldLabel : '建档时间',format : 'Y-m-d H:i:s'}
							,{
								xtype : 'beantrigger',
								name : 'bean.tallyBy',
								fieldLabel : '记账员',
								bean : 'SysUser',
								beanType : 'sys',
								emptyText : form_empty_text
							},
								mvc.Tools.crtComboTrigger(true,'sys_SysOrg','',{
											name : 'bean.org',
											fieldLabel : '机构'
										})
							]
					}]
			}]
	},{
		region : 'center',
		xtype : 'tabpanel',
		tabBar : {
			style : 'background:#fff'
		},
		items : [{
				xtype : Ext.create('mvc.view.gl.GlDaybook.ListMain',{
							title : '流水账',
							itemId : this.oldId+'maintable',
							iconCls : 'tab-user-icon',
							roles : this.roles,
							listeners : {
			 scope : this,
			 selectionchange: function(model, records) {
				 if (records.length === 1){
				    this.mdMain.getForm().loadRecord(records[0]);
						this.mdLineTable.store.filter([{'id':'filter', 'property':'pkey','value':records[0].get('bean.pkey')}]);
						if (this.roles.indexOf('unTally') != -1)
							this.down('#'+this.oldId+'unTally').setDisabled(false);
				 }else {
				   	this.mdMain.getForm().reset();
				   	this.mdLineTable.store.removeAll();
				   	if(records.length === 0) {
				   		if(this.roles.indexOf('unTally') != -1)
				   			this.down('#'+this.oldId+'unTally').setDisabled(true);
				   	}else {
							if (this.roles.indexOf('del') != -1)
								this.down('#'+this.oldId+'unTally').setDisabled(false);
						}
				 }
			 }
}

						})
			},{
				xtype : Ext.create('mvc.view.gl.GlDaybook.ListLineGlDaybookLine',{
							title : '流水明细',
							itemId : this.oldId+'linetable',
							iconCls : 'tab-user-icon'
						})
			}]
	}];
		this.callParent(arguments);
		this.mdSearch = this.down('#'+this.oldId+'search');
		this.mdAct = this.down('#'+this.oldId+'act');
		this.mdMain = this.down('#'+this.oldId+'main');
		this.mdMainTable = this.down('#'+this.oldId+'maintable');
		this.mdLineTable = this.down('#'+this.oldId+'linetable');
		mvc.Tools.onENTER2SearchBar(this.mdSearch,this);
		if (mainActs.length == 0)
			this.down('[region=north]').remove(this.mdAct);
},
onSaveRecord : function(form, data){
	console.log(data);
	this.mdMainTable.store.load();
	//this.mdMainTable.store.insert(0,data);
	//this.mdMainTable.getView().select(0);
	//Ext.example.msg(msg_title, msg_text);
},
getStore : function(){
		return this.mdMainTable.store;
},
onDoTally : function(){
	var win = Ext.create('mvc.view.gl.GlDaybook.Win',{
		title : this.title+'>记账统一入口',
		descUrl : 'gl_GlDaybook_tally',
		descType : 2203, //目标单据类型
	});
	win.on('create',this.onSaveRecord,this);
	win.show();
},
onUnTally : function(){
var selections = this.mdMainTable.getView().getSelectionModel().getSelection();
var me = this;
if (selections.length > 0){
	Ext.MessageBox.confirm(msg_confirm_title, '确定取消记账吗？',
		function(btn) {
			if (btn != 'yes')
				return;
			var arr = new Array(),formv;
			for (var i=0; i<selections.length; i++){
				formv = selections[i].get('bean.pkey').toString();
				console.log(formv);
				arr.push(formv.split(bean_split)[0]);
			}
			console.log(arr);
			Ext.Ajax.request({
				url : base_path+'/gl_GlDaybook_untally?pkeys='+arr.toString(),
				success : function (response, options) {
					var result = Ext.decode(response.responseText);
					if (result.success){
						me.mdMainTable.getStore().remove(selections);
						Ext.example.msg(msg_title, '记账取消--成功');
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
onSearchCancel : function(){
		this.mdMainTable.getSelectionModel().deselectAll();
		mvc.Tools.searchClear(this.mdSearch);
		this.mdMainTable.store.clearFilter();
},
onSearch : function(){
		var array = mvc.Tools.searchValues(this.mdSearch);
		this.onSearchDo(array);
},
onSearchAdv : function(){
		var win = Ext.create('mvc.view.gl.GlDaybook.WinSearch',{
			title : this.title+'>高级搜索',
			listCmp : this
		});
		win.show();
},
onSearchDo : function(array){
		this.mdMainTable.getSelectionModel().deselectAll();
		if (array.length == 0){
			this.mdMainTable.store.clearFilter();
			return;
		}
		this.mdMainTable.store.clearFilter(true);
		this.mdMainTable.store.filter(array);
}
});