Ext.define('mvc.view.gl.SysOrg.List',{
extend : 'mvc.tools.RowexpanderGrid',
oldId : 'btn_SysOrg',
lock : true,
disableSelection : false,
loadMask : true,
multiSelect : true,
roles : '',
selModel : {selType : 'checkboxmodel'}
,
initComponent : function(){
	var mainActs = [];
	if (this.roles.indexOf('ded') != -1)
	mainActs.push({
		text : '日终处理',
		iconCls : 'ins-icon',
		itemId : this.oldId+'ded',
		scope : this,
		handler : this.onDed
	});
	this.columns = [{text : '代码',width : 100,dataIndex : 'bean.code',sortable : true}
		,{text : '机构名称',width : 100,dataIndex : 'bean.name',sortable : true}
		,{text : '机构简称',width : 100,dataIndex : 'bean.shortName',sortable : true}
		,{text : '启用标志',width : 100,dataIndex : 'bean.enabled',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OEnabled')}
		,{text : '上级机构',width : 100,dataIndex : 'bean.orgUp',sortable : true,renderer : mvc.Tools.beanRenderer(),expandCol : true,hidden : true}
		,{text : '工作日期',width : 100,dataIndex : 'bean.workDate',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d')}
		,{text : '机构状态',width : 100,dataIndex : 'bean.state',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OOrgState')}
		,{text : '科目模板',width : 100,dataIndex : 'bean.templat',sortable : true,renderer : mvc.Tools.beanRenderer(),expandCol : true,hidden : true}
		,{text : '存货计价方式',width : 100,dataIndex : 'bean.valuationMethods',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OValuationMethods'),expandCol : true,hidden : true}
		,{text : '是否有国际贸易',width : 100,dataIndex : 'bean.internationTrade',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OYn'),expandCol : true,hidden : true}
		,{text : '币种',width : 100,dataIndex : 'bean.currency',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OCurrency'),expandCol : true,hidden : true}
		,{text : '电话1',width : 100,dataIndex : 'one.tel1',sortable : true}
		,{text : '电话2',width : 100,dataIndex : 'one.tel2',sortable : true,expandCol : true,hidden : true}
		,{text : '传真',width : 100,dataIndex : 'one.fax',sortable : true}
		,{text : '网址',width : 100,dataIndex : 'one.website',sortable : true,expandCol : true,hidden : true}
		,{text : '地址',width : 100,dataIndex : 'one.addr',sortable : true,expandCol : true,hidden : true}
		,{text : '邮编',width : 100,dataIndex : 'one.zipCode',sortable : true,expandCol : true,hidden : true}
		,{text : '备注',width : 100,dataIndex : 'one.rem',sortable : true,expandCol : true,hidden : true}
		,{text : '更新员',width : 100,dataIndex : 'one.updatedBy',sortable : true,renderer : mvc.Tools.beanRenderer(),expandCol : true,hidden : true}
		,{text : '更新时间',width : 140,dataIndex : 'one.updatedDateTime',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s'),expandCol : true,hidden : true}
		,{text : '建档员',width : 100,dataIndex : 'one.createdBy',sortable : true,renderer : mvc.Tools.beanRenderer(),expandCol : true,hidden : true}
		,{text : '建档时间',width : 140,dataIndex : 'one.createdDateTime',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d H:i:s'),expandCol : true,hidden : true}
		];
	this.tbar=mainActs;
	this.store=Ext.create('mvc.store.sys.SysOrg'); 
	this.store.remoteFilter = true;
	this.store.proxy.filterParam = 'filter';
	this.dockedItems=[{
		dock : 'top',
		xtype : 'toolbar',
		items : [{
				xtype : 'label',
				text : '代码：'
			},{
				xtype : 'textfield',
				name : 'code'
			},'',{
				xtype : 'label',
				text : '机构名称：'
			},{
				xtype : 'textfield',
				name : 'name'
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
	this.callParent(arguments);		mvc.Tools.onENTER2SearchBar(this.down('[dock=top]'),this);
},
listeners : {
	selectionchange : function(selModel, selected){
		if (selected.length === 1) {
			var state = selected[0].get('bean.state'); // 根据单据状态判断
			// DAY_END:1,日终处理结束
			// OPENING:2,营业中
			// DAY_END_DOING:3,日终处理中...
			if (state == 2) {
				if (this.roles.indexOf('ded') != -1) this.down('#' + this.oldId + 'ded').setDisabled(false);
			} else {
				if (this.roles.indexOf('ded') != -1) this.down('#' + this.oldId + 'ded').setDisabled(true);
			}
		} else {
			if (this.roles.indexOf('ded') != -1) this.down('#' + this.oldId + 'ded').setDisabled(true);
		}
	}
},
onSaveRecord : function(form, data){
		this.store.insert(0,data);
		this.getView().select(0);
		Ext.example.msg(msg_title, msg_text);	
},
onDed : function() {
	var selection = this.getView().getSelectionModel().getSelection()[0];
	var me = this;
	if (selection){
		Ext.MessageBox.confirm(msg_confirm_title, '机构['+selection.get('bean.name') + '] - 日终处理确认吗？',
			function(btn) {
				if (btn != 'yes')
					return;
				Ext.Ajax.request({
					url : base_path+'/sys_SysOrg_ded?pkey='+selection.get('bean.pkey')+'&rowVersion='+selection.get(BEAN_VERSION),
					success : function (response, options) {
						var result = Ext.decode(response.responseText);
						if (result.success){
							var bean  = Ext.create('mvc.model.sys.SysOrg',result);
							Ext.apply(selection.data, bean.data);
							selection.commit();
							me.getSelectionModel().deselectAll();
							me.getView().select(selection);
							Ext.example.msg(msg_title, '日终处理--成功!');
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
		this.getSelectionModel().deselectAll();
		mvc.Tools.searchClear(this.down('toolbar'));
		this.store.clearFilter();
},
onSearch : function(){
	var array = mvc.Tools.searchValues(this.down('toolbar'));
	this.onSearchDo(array);
},
onSearchAdv : function(){
	var win = Ext.create('mvc.view.sys.SysOrg.WinSearch',{
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