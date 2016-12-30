Ext.define('mvc.view.gl.GlReport.ListZ', {
			extend : 'Ext.panel.Panel',
			oldId : 'GlReport_list_',
			loadMask : true,
			multiSelect : true,
			roles : '',
			layout : 'border',
			lock : true,
			mdMainTable : null,
			initComponent : function() {
				this.items = [{
							region : 'north',
							xtype : 'panel',
							height : 50,
							border : '5',
							layout : { type : 'hbox',pack: 'end', align : 'bottom'},
							items : [{
								html : '<p style="margin-right:10px;margin-bottom:5px">单位：元</p>'
							}]

						}, {
							region : 'center',
							xtype : 'panel',
							autoScroll : true,
							defaults : {
								border : '1'
							},
							layout : {
								type : 'hbox',
								pack : 'start',
								align : 'stretchmax'
							},
							tabBar : {
								style : 'background:#fff'
							},
							items : [{
								xtype : 'panel',
								width : '50%',
								items : [{
									xtype : Ext.create(
											'mvc.view.gl.GlReport.ListMainZ', {
												// title : '资产表',
												// iconCls : 'tab-user-icon',
												itemId : this.oldId
														+ 'maintableZC',
												roles : this.roles
											})
								}]
							}, {
								xtype : 'panel',
								width : '50%',
								items : [{
									xtype : Ext.create(
											'mvc.view.gl.GlReport.ListMainZ', {
												// title : '资产表',
												// iconCls : 'tab-user-icon',
												itemId : this.oldId
														+ 'maintableFS',
												roles : this.roles
											})
								}]
							}]
						}];

				this.callParent(arguments);
				this.freshTable('ZC');
				this.freshTable('FS');
			},
			getStore : function() {
				return this.mdMainTable.store;
			},
			freshTable : function(type) {
				var mdMainTable = this.down('#' + this.oldId + 'maintable'
						+ type);
				mdMainTable.store.proxy.url = base_path+'/gl_GlReport_list'+type;
				mdMainTable.store.load();
			}
		});