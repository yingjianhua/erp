Ext.define('mvc.view.gl.GlReport.ListForm', {
	extend : 'Ext.grid.Panel',
	disableSelection : false,
	loadMask : true,
	cellEditing : Ext.create('Ext.grid.plugin.CellEditing', {
				clicksToEdit : 1
			}),
	mainPkey : null,
	initComponent : function() {
		var mainActs = [{
					text : '新增',
					iconCls : 'ins-icon',
					scope : this,
					handler : this.onIns
				}, {
					text : '删除',
					iconCls : 'del-icon',
					scope : this,
					handler : this.onDel
				}];
		this.tbar = mainActs;
		this.columns = [{
					text : '报表',
					dataIndex : 'bean.report',
					hidden : true,
					renderer : mvc.Tools.beanRenderer()
				}, {
					text : '科目',
					width : 200.0,
					dataIndex : 'bean.subject',
					sortable : true,
					renderer : mvc.Tools.beanRenderer(),
					editor : {
						xtype : 'beantrigger',
						beanName : 'bean.subject',
						bean : 'GlSubject',
						beanType : 'gl',
						grid : this,
						emptyText : form_empty_text,
						afterLabelTextTpl : required,
						allowBlank : false,
						onTrigger : function(data, params) {
							this.setValue(data);
							var row = this.grid.getView().getSelectionModel()
									.getSelection()[0];
							row.set(this.beanName, this.getValue());
						}
					}
				}, {
					text : '借贷标志',
					width : 100.0,
					dataIndex : 'bean.direct',
					sortable : true,
					renderer : mvc.Tools.optRenderer('gl', 'Gl', 'ODirect'),
					editor : mvc.Tools.crtComboForm(false, {
								store : Ext.create('mvc.combo.gl.GlODirect'),
								name : 'direct'
							})
				}, {
					text : '加减类型',
					width : 90.0,
					dataIndex : 'bean.symbolType',
					sortable : true,
					renderer : mvc.Tools.optRenderer('gl', 'Gl', 'OSymbolType'),
					editor : mvc.Tools.crtComboForm(false, {
								store : Ext.create('mvc.combo.gl.GlOSymbolType'),
								afterLabelTextTpl : required,
								allowBlank : false,
								name : 'symbolType'
							})
				}];
		this.store = Ext.create('mvc.store.gl.GlReportLine');
		this.store.pageSize = 0;
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
		this.plugins = [this.cellEditing];
		this.doLoad();
		this.callParent(arguments);
	},
	onIns : function() {
		var model = Ext.create('mvc.store.gl.GlReportLine');
		this.store.insert(0, model);
		this.cellEditing.startEditByPosition({
					row : 0,
					column : 0
				});
				row = this.getView().getSelectionModel().getSelection()[0];
				row.set('bean.report',this.mainPkey);
	},
	onDel : function() {
		var selection = this.getView().getSelectionModel().getSelection();
		if (selection) {
			this.getStore().remove(selection);
		}
	},
	doLoad : function() {
		var array = [{
					"property" : "report",
					"value" : this.mainPkey.split('##')[0]
				}];
		this.store.clearFilter(true);
		this.store.filter(array);
	}
});