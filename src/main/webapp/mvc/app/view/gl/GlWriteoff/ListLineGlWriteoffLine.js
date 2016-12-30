Ext.define('mvc.view.gl.GlWriteoff.ListLineGlWriteoffLine',{
	extend : 'Ext.grid.Panel',
	disableSelection : false,
	loadMask : true,
	multiSelect : true,
	mainTable : null,
	initComponent : function(){
		this.columns = [{text : '凭证',width : 80,dataIndex : 'bean.bill',sortable : true,renderer : mvc.Tools.beanRenderer()}
			, {text : '单据号',width : 120,dataIndex : 'bean.code',sortable : true}
			, {text : '借贷标志',width : 75,dataIndex : 'bean.direct',sortable : true,renderer : mvc.Tools.optRenderer('gl', 'Gl', 'ODirect')}
			, {text : '金额',width : 100,dataIndex : 'bean.amt',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
			, {text : '记账日期',width : 100,dataIndex : 'bean.tallyDate',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d')}
		];
		Ext.define('in.mvc.model.gl.GlWriteoff',{
				extend : 'Ext.data.Model',
				idProperty : 'bean.pkey',
				proxy : {
					type : 'ajax',
					url : base_path+'/gl_GlNote_load'
				},
				fields :[{name : 'bean.pkey',mapping : 'pkey',type : 'int',useNull : true}
						,{name : 'bean.bill',mapping : 'bill',type : 'string',outkey : true}
						,{name : 'bean.code',mapping : 'code',type : 'string'}
						,{name : 'bean.direct',mapping : 'direct',type : 'int',useNull : true}
						,{name : 'bean.amt',mapping : 'amt',type : 'float',useNull : true}
						,{name : 'bean.tallyDate',mapping : 'tallyDate',type : 'date'}
					]
			});
		var me = this;
		this.store = new Ext.data.Store({
			requires : 'in.mvc.model.gl.GlWriteoff',
			model :'in.mvc.model.gl.GlWriteoff',
			pageSize : 20,
			remoteSort : false,
			autoLoad : false,
			proxy : {
				type : 'ajax',
				url : base_path+'/gl_GlNote_list4WriteoffLine?mainTable='+me.mainTable,
				reader : {
					type : 'json',
					root : 'items',
					totalProperty : 'total'
				},
				simpleSortMode : true
			}
		});
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
		this.dockedItems=[{
			dock : 'top',
			xtype : 'toolbar',
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
		this.callParent(arguments);
	},
	onUpdate : function(mainTable) {
		Ext.Ajax.request({
			scope : this,
			url : base_path + '/gl_GlNote_list4WriteoffLine?pkey='+mainTable,
					success : function (response, options) {
						var result = Ext.decode(response.responseText);
						if (result.success){
							this.store.loadData(result.items);
							this.doLayout();
						}else{
							Ext.MessageBox.show({ 
								title : msg_title,
								msg : result.msg,
								buttons : Ext.MessageBox.OK,
								icon : Ext.MessageBox.ERROR
							});
						}
					}
		})
	}
});