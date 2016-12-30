Ext.define('mvc.view.gl.GlReportAsset.ListMain',{
extend : 'Ext.grid.Panel',
disableSelection : false,
loadMask : true,
multiSelect : true,
roles : '',
selModel : {selType : 'checkboxmodel'},
initComponent : function(){
this.columns =[{text : '机构',width : 100.0,dataIndex : 'bean.org',sortable : true,renderer : mvc.Tools.beanRenderer()}
	,{text : '起始日期',width : 85.0,dataIndex : 'bean.beginDate',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d')}
	,{text : '结束日期',width : 85.0,dataIndex : 'bean.endDate',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d')}
	];
		this.store=Ext.create('mvc.store.gl.GlReportAsset');
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
		this.callParent(arguments);},
onDelRow : function(grid, rowIndex){
		var me = this;
		Ext.MessageBox.confirm(msg_confirm_title, msg_confirm_msg,
			function(btn) {
				if (btn != 'yes')
					return;
				var row = me.getStore().getAt(rowIndex);
				Ext.Ajax.request({
					url : '/gl_GlReportAsset_del?pkey='+row.get('bean.pkey')+'&rowVersion='+row.get(BEAN_VERSION),
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
}
});