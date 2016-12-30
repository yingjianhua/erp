Ext.define('mvc.view.gl.GlNote.TriggerList', {
			extend : 'mvc.tools.RowexpanderGridForNote',
			disableSelection : false,
			loadMask : true,
			selModel : {
				selType : 'checkboxmodel'
			},
			viewConfig : {
				trackOver : false,
				stripeRows : true
			},
			searchField : null,
			initComponent : function() {
				this.columns = [{
							text : '分户账',
							width : 100,
							dataIndex : 'bean.journal',
							sortable : true,
							renderer : mvc.Tools.beanRenderer()
						}, {
							text : '借贷标志',
							width : 70,
							dataIndex : 'bean.direct',
							sortable : true,
							renderer : mvc.Tools.optRenderer('gl', 'Gl',
									'ODirect')
						}, {
							text : '金额',
							width : 100,
							dataIndex : 'bean.amt',
							sortable : true,
							renderer : mvc.Tools.numberRenderer(),
							align : 'right'
						}, {
							text : '票据号',
							width : 100,
							dataIndex : 'bean.docNum',
							sortable : true
						}, {
							text : '摘要',
							width : 100,
							dataIndex : 'bean.summary',
							sortable : true
						}, {
							text : '扩展属性表',
							width : 100,
							dataIndex : 'bean.extTable',
							sortable : true,
							renderer : mvc.Tools.beanRenderer()
						}, {
							text : '备注',
							width : 100,
							dataIndex : 'bean.rem',
							sortable : true
						}, {
							text : '扩展属性',
							width : 100,
							dataIndex : 'extContent',
							sortable : true,
							expandCol : true,
							hidden : true
						}];
				this.store = Ext.create('mvc.store.gl.GlNote');
				this.store.proxy.url = base_path + '/gl_GlNote_listByTb';
				this.dockedItems = [{
							dock : 'top',
							xtype : 'toolbar',
							items : ["搜索：", {
										xtype : 'combo',
										mode : 'local',
										valueField : 'value',
										triggerAction : 'all',
										forceSelection : true,
										typeAhead : true,
										editable : false,
										width : 100,
										value : 'code',
										store : Ext.create('Ext.data.Store', {
													fields : ['value', 'text'],
													data : [{
																value : 'code',
																text : '代码'
															}, {
																value : 'name',
																text : '名称'
															}]
												}),
										listeners : {
											scope : this,
											change : function(field, newv,
													oldv, opts) {
												this.searchField.flds = newv;
											}
										}
									}, '=', {
										width : 250,
										xtype : 'irilleSearchfield',
										flds : 'code',
										store : this.store
									}, '->', {
										xtype : 'button',
										text : '确定',
										scope : this,
										iconCls : 'win-ok-icon',
										handler : this.onTrigger
									}]
						}, {
							xtype : 'pagingtoolbar',
							store : this.store,
							dock : 'bottom',
							displayInfo : true,
							displayMsg : '显示 {0} - {1} 条，共计 {2} 条',
							emptyMsg : '没有数据',
							items : [{
										xtype : Ext.create(
												'mvc.tools.ComboxPaging', {
													myList : this
												})
									}]
						}];
				this.callParent(arguments);
				this.searchField = this.down('irilleSearchfield');
			},
			listeners : {
				itemdblclick : function() {
					this.onTrigger();
				}
			},
			onTrigger : function() {
				var selection = this.getView().getSelectionModel()
						.getSelection()[0];
				if (selection) {
					this.fireEvent('trigger', selection.get('bean.pkey')
									+ bean_split + selection.get('bean.journal').split(bean_split)[1] + ",￥"+ selection.get('bean.amt'),
							null);
				}
			}
		});