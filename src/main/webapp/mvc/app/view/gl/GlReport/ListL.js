Ext.define('mvc.view.gl.GlReport.ListL', {
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
							width : 400,
							border : '10 10 0 10',
							layout : { type : 'hbox',pack: 'end', align : 'bottom'},
							items : [{
								html : '<div style="margin-right:10px;margin-bottom:5px">单位：元</div>'
							}]

						}, {
							region : 'center',
							xtype : 'panel',
							border : '10',
							autoScroll : true,
							tabBar : {
								style : 'background:#fff'
							},
							items : [{
								xtype : Ext.create(
										'mvc.view.gl.GlReport.ListMainL', {
											//title : '利润表',
											//iconCls : 'tab-user-icon',
											itemId : this.oldId + 'maintableLR',
											roles : this.roles
										})
							}]
						}];
				this.callParent(arguments);
				this.freshTable('LR');
			},
			getStore : function() {
				return this.mdMainTable.store;
			},
			freshTable : function(type) {
				this.mdMainTable = this.down('#' + this.oldId + 'maintable'
						+ type);
				this.mdMainTable.store.proxy.url = base_path+'/gl_GlReport_list'+type;
				this.mdMainTable.store.load();

			}
		});