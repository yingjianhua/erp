Ext.define('mvc.view.gs.GsStock.List',{
extend : 'Ext.panel.Panel',
oldId : 'GsStock_list_',
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
		if (this.roles.indexOf('print') != -1)
mainActs.push({
		text : '打印',
		iconCls : 'print-icon',
		itemId : this.oldId+'print',
		scope : this,
		handler : this.onPrint,
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
						text : '仓库：'
					},
						mvc.Tools.crtComboTrigger(true,'gs_GsWarehouse','',{
									name : 'warehouse'
								})
					,'',{
						xtype : 'label',
						text : '货物：'
					},{
						xtype : 'comboauto',
						name : 'goods',
						listConfig : {minWidth:250},
						fields : ['pkey','code','name','spec'],
						valueField : ['pkey'],
						textField : 'code',
						queryParam : 'code',
						name : 'goods',
						url : base_path + '/gs_GsGoods_autoComplete',
						urlExt : 'gs.GsGoods',
						hasBlur : false
					},'',{
						xtype : 'label',
						text : '货位：'
					},{
						xtype : 'beantrigger',
						name : 'location',
						bean : 'GsLocation',
						beanType : 'gs',
						emptyText : form_empty_text
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
						title : '存货信息',
						collapsible : true,
						layout : {
							type : 'table',
							columns : 3
						},
						items : [
								mvc.Tools.crtComboTrigger(true,'gs_GsWarehouse','',{
											name : 'bean.warehouse',
											fieldLabel : '仓库'
										})
							,{
								xtype : 'beantrigger',
								name : 'bean.goods',
								fieldLabel : '货物',
								bean : 'GsGoods',
								beanType : 'gs',
								emptyText : form_empty_text
							},{
								xtype : 'beantrigger',
								name : 'bean.location',
								fieldLabel : '货位',
								bean : 'GsLocation',
								beanType : 'gs',
								emptyText : form_empty_text
							},{xtype : 'numberfield',name : 'bean.qty',fieldLabel : '库存数量',decimalPrecision : 4}
							,{xtype : 'numberfield',name : 'bean.enrouteQty',fieldLabel : '在途数量',decimalPrecision : 4}
							,{xtype : 'numberfield',name : 'bean.lockedQty',fieldLabel : '存货锁定数量',decimalPrecision : 4}
							,{xtype : 'textfield',name : 'link.goodsName',fieldLabel : '名称'}
							,{xtype : 'textfield',name : 'link.goodsSpec',fieldLabel : '规格'}
							,{
								xtype : 'beantrigger',
								name : 'bean.uom',
								fieldLabel : '计量单位',
								bean : 'GsUom',
								beanType : 'gs',
								emptyText : form_empty_text
							}]
					}]
			}]
	},{
		region : 'center',
		xtype : 'tabpanel',
		tabBar : {
			style : 'background:#fff'
		},
		items : [{
				xtype : Ext.create('mvc.view.gs.GsStock.ListMain',{
							title : '存货',
							itemId : this.oldId+'maintable',
							iconCls : 'tab-user-icon',
							roles : this.roles,
							listeners : 		 {
			scope : this,
             selectionchange: function(model, records) {
                 if (records.length === 1){
                     this.mdMain.getForm().loadRecord(records[0]);
							this.mdLineTable.store.filter([{'id':'filter', 'property':'stock','value':records[0].get('bean.pkey')}]);
						if (this.roles.indexOf('upd') != -1)
						this.down('#'+this.oldId+'upd').setDisabled(false);
					if (this.roles.indexOf('del') != -1)
						this.down('#'+this.oldId+'del').setDisabled(false);
					if (this.roles.indexOf('print') != -1)
						this.down('#'+this.oldId+'print').setDisabled(false);
                 }else{
                 	this.mdMain.getForm().reset();
                 	this.mdLineTable.store.removeAll();
                 	if (this.roles.indexOf('upd') != -1)
						this.down('#'+this.oldId+'upd').setDisabled(true);
					if (this.roles.indexOf('del') != -1)
						this.down('#'+this.oldId+'del').setDisabled(true);
					if (this.roles.indexOf('print') != -1)
						this.down('#'+this.oldId+'print').setDisabled(true);
                 }
             }
           }

						})
			},{
				xtype : Ext.create('mvc.view.gs.GsStock.ListLineGsStockLine',{
							title : '存货行',
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
getStore : function(){
		return this.mdMainTable.store;
},
onSaveRecord : function(form, data){
		this.mdMainTable.store.insert(0,data);
		this.mdMainTable.getView().select(0);
		Ext.example.msg(msg_title, msg_text);
},
onIns : function(){
		var win = Ext.create('mvc.view.gs.GsStock.Win',{
			title : this.title+'>新增'
		});
		win.on('create',this.onSaveRecord,this);
		win.show();
},
onUpd : function(){
		var selection = this.mdMainTable.getView().getSelectionModel().getSelection()[0];
		this.mdMainTable.onUpdWin(selection);
},
onPrint : function(){
		var selection = this.mdMainTable.getView().getSelectionModel().getSelection()[0];
		var key = selection.get('bean.pkey');
		var win = Ext.create('mvc.view.gs.GsStock.Search',{
			title: '存货出入库明细时间段选择',
		    titleAlign:'center',
		    pkey : key
		});
		win.show();		 
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
		var win = Ext.create('mvc.view.gs.GsStock.WinSearch',{
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