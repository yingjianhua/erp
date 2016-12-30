Ext.define('mvc.view.gl.GlReport.ListMainZ', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.xxjxx',
	disableSelection : false,
	columnLines : true,//添加了表格列之间的分隔线
	loadMask : true,
	multiSelect : true,
	stripeRows:true,
	roles : '',
	initComponent : function() {
		this.columns = [{
					text : '项目',
					width : '40%',
					dataIndex : 'bean.name',
					sortable : false,
					renderer: function(value, cellmeta, record) { 
						var display = "";
						if(record.get('bean.valueType')==4) {
							display = "&nbsp"+value+"";
						} else if(record.get('bean.valueType')==1){
							display = '<div onmouseout=\'lastChild.src="#"\' onmouseover=\'lastChild.src="../extfile/images/mvc/page_edit.gif"\'>'
							+"&nbsp&nbsp&nbsp&nbsp&nbsp"+value+'<input id="update" class="update" type="image" data-qtip="设置" alt="&nbsp&nbsp&nbsp"></div>';
							//var display = '<input type="image" src="../extfile/images/mvc/page_edit.gif" class="update" data-qtip="修改"/>'+before+value;
						} else {
							display = "&nbsp&nbsp&nbsp&nbsp&nbsp"+value+"";
						}
						return display;
					},
					listeners:{ 
						mouseout: function(e, t, eOpts) {
							//Ext.example.msg(""+e.getX(), "mouseout");
						},
						mouseover: function(e, t, eOpts) {
							//Ext.example.msg(""+e.getTarget, "mouseover");
						},
						mouseenter:function(e, t, eOpts) {
							//Ext.example.msg("title", "mouseenter");
						},
						mouseleave:function(e, t, eOpts) {
							//Ext.example.msg("title", "mouseleave");
						}
					}
				}, {
					text : '行次',
					width : '10%',
					dataIndex : 'bean.keyValue',
					sortable : false
				}, {
					text : '期初数',
					width : '25%',
					sortable : false
				}, {
					text : '期末数',
					width : '25%',
					sortable : false
				}
				
				/* ,{text : '代码',width : 120.0,dataIndex : 'bean.code',sortable :
				 * true} ,{text : '上级',width : 100.0,dataIndex :
				 * 'bean.parent',sortable : true ,renderer :
				 * mvc.Tools.beanRenderer()} ,{text : '表类型',width :
				 * 100.0,dataIndex : 'bean.tableType',sortable : true,renderer :
				 * mvc.Tools.optRenderer('gl','Gl','OTableType')} ,{text :
				 * '值类型',width : 100.0,dataIndex : 'bean.valueType',sortable :
				 * true,renderer :
				 * mvc.Tools.optRenderer('gl','Gl','OValueType')} ,{text :
				 * '加减类型',width : 100.0,dataIndex : 'bean.symbolType',sortable :
				 * true,renderer :
				 * mvc.Tools.optRenderer('gl','Gl','OSymbolType')} ,{text :
				 * '顺序号',width : 100.0,dataIndex : 'bean.orderId',sortable :
				 * true}*/
				
				];
		this.store = Ext.create('mvc.store.gl.GlReport');
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
		this.callParent(arguments);
		//Ext.example.msg("itemId:",""+this.itemId);
	},
	onUpdRow : function(grid, rowIndex, record) {
		/*var selection = this.getStore().getAt(rowIndex);
		this.getView().deselect(this.getView().getSelectionModel().getSelection());
		this.getView().select(selection);*/
		this.onUpdWin(record);
	},
	onUpdWin : function(selection) {
		if (selection) {
			mvc.model.gl.GlReport.load(selection.get('bean.pkey'), {
						scope : this,
						failure : function(response, operation) {
							Ext.example.msg(msg_title, msg_ajax);
						},
						success : function(response, operation) {
							Ext.apply(selection.data, response.data);
							/*Ext.example.msg(selection.get('bean.pkey')
												+ '##'
												+ selection.get('bean.name'), "mouseout")*/
							var win = Ext.create('mvc.view.gl.GlReport.Win', {
										title : selection.get('bean.name')
												+ '>修改',
										insFlag : false,
										reportPkey : selection.get('bean.pkey')
												+ '##'
												+ selection.get('bean.name')
									});
							win.show();
						}
					});
		}
	}
});