Ext.define('mvc.view.gl.GlAgeRvaView.List',{
extend : 'Ext.grid.Panel',
oldId : 'btn_GlAgeRvaView',
lock : true,
disableSelection : false,
loadMask : true,
multiSelect : true,
roles : '',
selModel : {selType : 'checkboxmodel'},
viewConfig : {enableTextSelection : true},
initComponent : function(){
var mainActs = [];this.columns = [{text : '部门',width : 100,dataIndex : 'bean.dept',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'sys',mn : 'view.sys.SysDept.List'}
	,{text : '业务员',width : 75,dataIndex : 'bean.businessMember',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'sys',mn : 'view.sys.SysUser.List'}
	,{text : '代码',width : 100,dataIndex : 'bean.code',sortable : true}
	,{text : '名称',width : 100,dataIndex : 'bean.name',sortable : true}
	,{text : '余额',width : 100,dataIndex : 'bean.balance',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '0-30天',width : 100,dataIndex : 'bean.balanceA',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '30-60天',width : 100,dataIndex : 'bean.balanceB',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '60-90天',width : 100,dataIndex : 'bean.balanceC',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '90天以上',width : 100,dataIndex : 'bean.balanceD',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	];
		if (mainActs.length > 0)
			this.tbar=mainActs;
		this.store=Ext.create('mvc.store.gl.GlAgeRvaView'); 
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
		this.on({cellclick:mvc.Tools.onCellclick});
this.dockedItems=[{
		dock : 'top',
		xtype : 'toolbar',
		items : [{
				xtype : 'label',
				text : '机构：'
			},
				mvc.Tools.crtComboTrigger(true,'sys_SysOrg','',{
							name : 'org'
						})
			,'',{
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
				text : '业务员：'
			},{
				xtype : 'beantrigger',
				name : 'businessMember',
				bean : 'SysUser',
				beanType : 'sys',
				emptyText : form_empty_text
			},'',{
				xtype : 'label',
				text : '日期：'
			},{
				xtype : 'datefield',
				name : 'date',
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
		var win = Ext.create('mvc.view.gl.GlAgeRvaView.WinSearch',{
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