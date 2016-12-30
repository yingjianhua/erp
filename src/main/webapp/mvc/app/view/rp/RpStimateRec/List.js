Ext.define('mvc.view.rp.RpStimateRec.List',{
extend : 'Ext.panel.Panel',
oldId : 'RpStimateRec_list_',
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
var mainActs = [];		if (this.roles.indexOf('doProc') != -1)
mainActs.push({
		text : '收款',
		iconCls : 'upd-icon',
		itemId : this.oldId+'doProc',
		scope : this,
		handler : this.onDoProc,
		disabled : this.lock
	});
		if (this.roles.indexOf('unProc') != -1)
mainActs.push({
		text : '收款取消',
		iconCls : 'upd-icon',
		itemId : this.oldId+'unProc',
		scope : this,
		handler : this.onUnProc,
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
						text : '名称：'
					},{
						xtype : 'textfield',
						name : 'name'
					},'',{
						xtype : 'label',
						text : '部门：'
					},{
						xtype : 'beantrigger',
						name : 'dept',
						bean : 'SysDept',
						beanType : 'sys',
						emptyText : form_empty_text
					},'',{
						xtype : 'label',
						text : '机构：'
					},
						mvc.Tools.crtComboTrigger(true,'sys_SysOrg','',{
									name : 'org'
								})
					,'',{
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
						title : '待收款登记信息',
						collapsible : true,
						layout : {
							type : 'table',
							columns : 3
						},
						items : [{xtype : 'beantrigger',name : 'bean.origForm',fieldLabel : '源单据'}
							,{xtype : 'textfield',name : 'bean.origFormNum',fieldLabel : '源单据号'}
							,{xtype : 'numberfield',name : 'bean.amt',fieldLabel : '金额',decimalPrecision : 2}
							,{xtype : 'numberfield',name : 'bean.balance',fieldLabel : '余额',decimalPrecision : 2}
							,{xtype : 'datefield',name : 'bean.clearTime',fieldLabel : '结清时间',format : 'Y-m-d H:i:s'}
							,
								mvc.Tools.crtComboTrigger(true,'sys_SysCell','',{
											name : 'bean.cell',
											fieldLabel : '核算单元'
										})
							,
								mvc.Tools.crtComboTrigger(true,'sys_SysOrg','',{
											name : 'bean.org',
											fieldLabel : '机构'
										})
							,{
								xtype : 'beantrigger',
								name : 'bean.createdBy',
								fieldLabel : '建档员',
								bean : 'SysUser',
								beanType : 'sys',
								emptyText : form_empty_text
							},{xtype : 'datefield',name : 'bean.createdTime',fieldLabel : '建档时间',format : 'Y-m-d H:i:s'}
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
				xtype : Ext.create('mvc.view.rp.RpStimateRec.ListMain',{
							title : '待收款登记',
							itemId : this.oldId+'maintable',
							iconCls : 'tab-user-icon',
							roles : this.roles,
							listeners : {
								scope : this,
					           selectionchange: function(model, records) {
					               if (records.length === 1){
					                  this.mdMain.getForm().loadRecord(records[0]);
														this.mdLineTable.store.filter([{'id':'filter', 'property':'bill','value':records[0].get('bean.origForm')}]);
														var amt = records[0].get('bean.amt');
														var balance = records[0].get('bean.balance');
														if (this.roles.indexOf('doProc') != -1 && balance!=0)
															this.down('#'+this.oldId+'doProc').setDisabled(false);
														if (this.roles.indexOf('unProc') != -1 && balance!=amt)
															this.down('#'+this.oldId+'unProc').setDisabled(false);
					               }else{
						               	this.mdMain.getForm().reset();
						               	this.mdLineTable.store.removeAll();
						               	if (this.roles.indexOf('doProc') != -1)
															this.down('#'+this.oldId+'doProc').setDisabled(true);
						               	if (this.roles.indexOf('unProc') != -1)
															this.down('#'+this.oldId+'unProc').setDisabled(true);
					               }
					           }
					       }

						})
			},{
				xtype : Ext.create('mvc.view.rp.RpStimateRec.ListLineGlNoteViewRp',{
							title : '记账条视图',
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
onDoProcRecord : function(form, data){
		var selection = this.mdMainTable.getView().getSelectionModel().getSelection()[0];
		var bean = Ext.create('mvc.model.rp.RpStimateRec', data);
		Ext.apply(selection.data,bean.data);
		selection.commit();
		this.mdMainTable.getSelectionModel().deselectAll();
		this.mdMainTable.getView().select(selection);
		Ext.example.msg(msg_title, msg_text);
},
getStore : function(){
		return this.mdMainTable.store;
},
onDoProc : function(){
		var selection = this.mdMainTable.getView().getSelectionModel().getSelection()[0];
		if (selection){
			var win = Ext.create('mvc.view.rp.RpStimateRec.WinProc',{
				title : this.title+'>收款',
			});
			win.on('create',this.onDoProcRecord,this);
			win.show();
			win.setBalance(selection.get('bean.pkey'),selection.get('bean.balance'));
		}
},
onUnProc : function(){
		var selection = this.mdMainTable.getView().getSelectionModel().getSelection()[0];
		var me = this;
		if (selection){
			Ext.MessageBox.confirm(msg_confirm_title, '收款待处理单据['+selection.get('bean.origFormNum') + '] - 确认取消收款吗？',
				function(btn) {
					if (btn != 'yes')
						return;
					Ext.Ajax.request({
						url : base_path+'/rp_RpStimateRec_unProc?pkey='+selection.get('bean.pkey'),
						success : function (response, options) {
							var result = Ext.decode(response.responseText);
							if (result.success){
								selection.set("bean.balance", selection.get("bean.amt"));
								selection.set("bean.clearTime", null);
								selection.commit();
								me.mdMainTable.getSelectionModel().deselectAll();
								me.mdMainTable.getView().select(selection);
								Ext.example.msg(msg_title, '取消收款--成功');
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
		var win = Ext.create('mvc.view.rp.RpStimateRec.WinSearch',{
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