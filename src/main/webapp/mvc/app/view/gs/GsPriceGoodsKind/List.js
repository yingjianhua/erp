Ext.define('mvc.view.gs.GsPriceGoodsKind.List',{
extend : 'Ext.grid.Panel',
oldId : 'btn_GsPriceGoodsKind',
lock : true,
disableSelection : false,
loadMask : true,
multiSelect : true,
roles : '',
selModel : {selType : 'checkboxmodel'},
viewConfig : {enableTextSelection : true},
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
		if (this.roles.indexOf('doEnabled') != -1)
mainActs.push({
		text : '启用',
		iconCls : 'doEnabled-icon',
		itemId : this.oldId+'doEnabled',
		scope : this,
		handler : this.onDoEnabled,
		disabled : this.lock
	});
		if (this.roles.indexOf('unEnabled') != -1)
mainActs.push({
		text : '停用',
		iconCls : 'unEnabled-icon',
		itemId : this.oldId+'unEnabled',
		scope : this,
		handler : this.onUnEnabled,
		disabled : this.lock
	});
this.columns = [{text : '代码',width : 100,dataIndex : 'bean.code',sortable : true}
	,{text : '名称',width : 100,dataIndex : 'bean.name',sortable : true}
	,{text : '定价名称',width : 100,dataIndex : 'bean.price',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'goods',mn : 'view.gs.GsPrice.List'}
	,{text : '利润率1(%)',width : 100,dataIndex : 'bean.rate1',sortable : true,align : 'right'}
	,{text : '利润率2(%)',width : 100,dataIndex : 'bean.rate2',sortable : true,align : 'right'}
	,{text : '利润率3(%)',width : 100,dataIndex : 'bean.rate3',sortable : true,align : 'right'}
	,{text : '利润率4(%)',width : 100,dataIndex : 'bean.rate4',sortable : true,align : 'right'}
	,{text : '利润率5(%)',width : 100,dataIndex : 'bean.rate5',sortable : true,align : 'right'}
	,{text : '利润率6(%)',width : 100,dataIndex : 'bean.rate6',sortable : true,align : 'right'}
	,{text : '利润率7(%)',width : 100,dataIndex : 'bean.rate7',sortable : true,align : 'right'}
	,{text : '利润率8(%)',width : 100,dataIndex : 'bean.rate8',sortable : true,align : 'right'}
	,{text : '利润率9(%)',width : 100,dataIndex : 'bean.rate9',sortable : true,align : 'right'}
	,{text : '利润率10(%)',width : 100,dataIndex : 'bean.rate10',sortable : true,align : 'right'}
	,{text : '利润率11(%)',width : 100,dataIndex : 'bean.rate11',sortable : true,align : 'right'}
	,{text : '利润率12(%)',width : 100,dataIndex : 'bean.rate12',sortable : true,align : 'right'}
	,{text : '可视范围',width : 100,dataIndex : 'bean.rangeType',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','ORangeType')}
	,{text : '可用对象主键值',width : 80,dataIndex : 'bean.rangePkey',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '管理核算单元',width : 100,dataIndex : 'bean.cell',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'sys',mn : 'view.sys.SysCell.List'}
	,{text : '定价基数来源',width : 100,dataIndex : 'bean.priceOrig',sortable : true,renderer : mvc.Tools.optRenderer('gs','Gs','OPriceOrig')}
	,{text : '启用标志',width : 75,dataIndex : 'bean.enabled',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OEnabled')}
	];
					if (mainActs.length > 0)
						this.tbar=mainActs;
					this.store=Ext.create('mvc.store.gs.GsPriceGoodsKind'); 
					this.store.remoteFilter = true;
					this.store.proxy.filterParam = 'filter';
					this.dockedItems = [{
					dock : 'top',
					xtype : 'toolbar',
					items : [{
								xtype : 'label',
								text : '定价名称：'
							}, mvc.Tools.crtComboTrigger(true, 'gs_GsPrice', '', {
								name : 'price',
								listeners : {
									afterrender : function() {
										var keys = '';
										Ext.Ajax.request({
											async : false,
											url : base_path + 'gs_GsPrice_getComboTrigger',
											method : 'POST',
											success : function(response) {
												keys = Ext.JSON.decode(response.responseText).items[0].value;
												keys += '##'+ Ext.JSON.decode(response.responseText).items[0].text;
											}
										});
										this.setValue(keys);
									}
								}
							}), '', {
								xtype : 'label',
								text : '代码：'
							},{
								xtype : 'textfield',
								name : 'code'
							},'',{
								xtype : 'label',
								text : '名称：'
							},{
								xtype : 'textfield',
								name : 'name'
							}, '', {
								xtype : 'button',
								text : '撤销',
								scope : this,
								iconCls : 'win-close-icon',
								handler : this.onSearchCancel
							}, {
								xtype : 'splitbutton',
								text : '搜索',
								scope : this,
								iconCls : 'win-ok-icon',
								handler : this.onSearch,
								menu : [{
											text : '高级搜索',
											iconCls : 'win-ok-icon',
											scope : this,
											handler : this.onSearchAdv
										}]
							}]
				}, {
					xtype : 'pagingtoolbar',
					store : this.store,
					dock : 'bottom',
					displayInfo : true,
					displayMsg : '显示 {0} - {1} 条，共计 {2} 条',
					emptyMsg : '没有数据',
					items : [{
								xtype : Ext.create('mvc.tools.ComboxPaging', {
											myList : this
										})
							}]
				}];
		this.callParent(arguments);		mvc.Tools.onENTER2SearchBar(this.down('[dock=top]'),this);},
listeners : {
	selectionchange : function(selModel, selected){
		if (this.roles.indexOf('upd') != -1)
			this.down('#'+this.oldId+'upd').setDisabled(selected.length === 0);	
		if (this.roles.indexOf('del') != -1)
			this.down('#'+this.oldId+'del').setDisabled(selected.length === 0);	
		if (this.roles.indexOf('doEnabled') != -1)
			this.down('#'+this.oldId+'doEnabled').setDisabled(selected.length === 0);	
		if (this.roles.indexOf('unEnabled') != -1)
			this.down('#'+this.oldId+'unEnabled').setDisabled(selected.length === 0);	
}
},
onSaveRecord : function(form, data){
		this.store.insert(0,data);
		this.getView().select(0);
		Ext.example.msg(msg_title, msg_text);	
},
onIns : function(){
		var win = Ext.create('mvc.view.gs.GsPriceGoodsKind.Win',{
			title : this.title+'>新增'
		});
		win.on('create',this.onSaveRecord,this);
		win.show();		
},
onUpdateRecord : function(form, data){
		var selection = this.getView().getSelectionModel().getSelection()[0];
		var bean = Ext.create('mvc.model.gs.GsPriceGoodsKind', data);
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
			var win = Ext.create('mvc.view.gs.GsPriceGoodsKind.Win',{
				title : this.title+'>修改',
				insFlag : false
			});
			win.on('create',this.onUpdateRecord,this);
			win.show();
			win.setActiveRecord(selection);
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
					var arrv = new Array();
					for(var i = 0; i < selection.length; i++){
						arr.push(selection[i].get('bean.pkey'));
						arrv.push(selection[i].get(BEAN_VERSION));
					}
					Ext.Ajax.request({
						url : base_path+'/gs_GsPriceGoodsKind_delMulti?pkeys='+arr.toString()+'&rowVersions='+arrv.toString(),
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
		var row = me.getStore().getAt(rowIndex);
		Ext.MessageBox.confirm(msg_confirm_title, msg_confirm_msg,
			function(btn) {
				if (btn != 'yes')
					return;
				Ext.Ajax.request({
					url : base_path+'/gs_GsPriceGoodsKind_del?pkey='+row.get('bean.pkey')+'&rowVersion='+row.get(BEAN_VERSION),
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
onDoEnabled : function(){
		var selection = this.getView().getSelectionModel().getSelection();
		if (selection) {
			var me = this;
			Ext.MessageBox.confirm(msg_confirm_title, '您确认要启用所选的记录吗?',
					function(btn) {
						if (btn != 'yes')
							return;
						var arr = new Array();
						var arrv = new Array();
						for (var i = 0; i < selection.length; i++) {
							arr.push(selection[i].get('bean.pkey'));
							arrv.push(selection[i].get(BEAN_VERSION));
						}
						Ext.Ajax.request({
							url : base_path + '/gs_GsPriceGoodsKind_doEnabled?pkeys='+arr.toString()+'&rowVersions='+arrv.toString(),
							success : function(response, options) {
								var result = Ext.decode(response.responseText);
								if (result.success) {
									me.getStore().reload();
									me.getView().deselect(me.getView().getSelectionModel().getSelection());
									Ext.example.msg(msg_title, msg_submit);
								} else {
									Ext.MessageBox.show({
										title : msg_title,
										msg : result.msg,
										buttons : Ext.MessageBox.OK,
										icon : Ext.MessageBox.ERROR
									});
								}
							}
						});
					});
		}
},
onUnEnabled : function(){
		var selection = this.getView().getSelectionModel().getSelection();
		if (selection) {
			var me = this;
			Ext.MessageBox.confirm(msg_confirm_title, '您确认要停用所选的记录吗?',
					function(btn) {
						if (btn != 'yes')
							return;
						var arr = new Array();
						var arrv = new Array();
						for (var i = 0; i < selection.length; i++) {
							arr.push(selection[i].get('bean.pkey'));
							arrv.push(selection[i].get(BEAN_VERSION));
						}
						Ext.Ajax.request({
							url : base_path + '/gs_GsPriceGoodsKind_unEnabled?pkeys='+arr.toString()+'&rowVersions='+arrv.toString(),
							success : function(response, options) {
								var result = Ext.decode(response.responseText);
								if (result.success) {
									me.getStore().reload();
									me.getView().deselect(me.getView().getSelectionModel().getSelection());
									Ext.example.msg(msg_title, msg_submit);
								} else {
									Ext.MessageBox.show({
										title : msg_title,
										msg : result.msg,
										buttons : Ext.MessageBox.OK,
										icon : Ext.MessageBox.ERROR
									});
								}
							}
						});
					});
		}
},
onSearchCancel : function(){
			this.getSelectionModel().deselectAll();
			mvc.Tools.searchClear(this.down('toolbar'));
},
onSearch : function(){
		var array = mvc.Tools.searchValues(this.down('toolbar'));
		this.onSearchDo(array);
},
onSearchAdv : function(){
		var win = Ext.create('mvc.view.gs.GsPriceGoodsKind.WinSearch',{
			title : this.title+'>高级搜索',
			listCmp : this
		});
		win.show();
},
onSearchDo : function(array){
		var price = this.down('[name=price]').getValue();
				this.getSelectionModel().deselectAll();
				if (array.length == 0||price==null){
					Ext.MessageBox.show({
						title : "错误",
						msg : "搜索时必须填写【定价名称】",
						buttons : Ext.MessageBox.OK,
						icon : Ext.MessageBox.ERROR
					})
				} else {
					this.store.clearFilter(true);
					this.store.filter(array);
					this.onGetPriceNames(array[0].value);
				}
},
onGetPriceNames : function(newv){
	var me = this;
	Ext.Ajax.request({
				async : false,
				url : base_path + '/gs_GsPrice_getPriceNames?pkey=' + newv,
				method : 'GET',
				success : function(response, options) {
					var nameslength = response.responseText.lastIndexOf("-");
					var names = response.responseText.substring(0,nameslength).split('-');
					for (var i = 0; i < 12; i++) {
						var fld = me.down('[dataIndex=bean.rate' + (i + 1) + ']');
						if (i < names.length) {
							fld.setText(names[i] + '利润率(%)');
							fld.show();
						} else {
							fld.hide();
						}
					}
				}
			})
},
onSearchDo : function(array){
		var price = this.down('[name=price]').getValue();
				this.getSelectionModel().deselectAll();
				if (array.length == 0||price==null){
					Ext.MessageBox.show({
						title : "错误",
						msg : "搜索时必须填写【定价名称】",
						buttons : Ext.MessageBox.OK,
						icon : Ext.MessageBox.ERROR
					})
				} else {
					this.store.clearFilter(true);
					this.store.filter(array);
					this.onGetPriceNames(array[0].value);
				}
}
});