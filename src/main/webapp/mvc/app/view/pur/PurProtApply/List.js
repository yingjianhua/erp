Ext.define('mvc.view.pur.PurProtApply.List',{
extend : 'mvc.tools.RowexpanderGrid',
oldId : 'btn_PurProtApply',
lock : true,
disableSelection : false,
loadMask : true,
multiSelect : true,
roles : '',
selModel : {selType : 'checkboxmodel'},
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
		if (this.roles.indexOf('doAppr') != -1)
mainActs.push({
		text : '审核',
		iconCls : 'doAppr-icon',
		itemId : this.oldId+'doAppr',
		scope : this,
		handler : this.onDoAppr,
		disabled : this.lock
	});
this.columns = [{text : '单据号',width : 135,dataIndex : 'bean.code',sortable : true}
	,{text : '状态',width : 60,dataIndex : 'bean.status',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OBillStatus')}
	,{text : '供应商',width : 100,dataIndex : 'bean.supplier',sortable : true,renderer : mvc.Tools.beanRendererHref(),md : 'sys',mn : 'view.sys.SysSupplier.List'}
	,{text : '供应商名称',width : 100,dataIndex : 'bean.name',sortable : true}
	,{text : '结算方式',width : 100,dataIndex : 'bean.settle',sortable : true,expandCol : true,hidden : true}
	,{text : '是否月结',width : 100,dataIndex : 'bean.settleMonth',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OYn'),expandCol : true,hidden : true}
	,{text : '次月天数',width : 100,dataIndex : 'bean.settleNextDay',sortable : true,expandCol : true,hidden : true}
	,{text : '信用等级',width : 100,dataIndex : 'bean.creditLevel',sortable : true,renderer : mvc.Tools.optRenderer('sal','Sal','OCreditLevel'),expandCol : true,hidden : true}
	,{text : '信用额度',width : 100,dataIndex : 'bean.creditLimit',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right',expandCol : true,hidden : true}
	,{text : '押抵金额',width : 100,dataIndex : 'bean.creditOther',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right',expandCol : true,hidden : true}
	,{text : '税点(%)',width : 100,dataIndex : 'bean.taxRate',sortable : true,align : 'right',expandCol : true,hidden : true}
	,{text : '产品质量',width : 100,dataIndex : 'bean.descKind',sortable : true,expandCol : true,hidden : true}
	,{text : '年承诺销售数量',width : 100,dataIndex : 'bean.descSal',sortable : true,expandCol : true,hidden : true}
	,{text : '包装要求',width : 100,dataIndex : 'bean.packDemand',sortable : true,expandCol : true,hidden : true}
	,{text : '费用承担方式',width : 100,dataIndex : 'bean.shipType',sortable : true,renderer : mvc.Tools.optRenderer('sal','Sal','OShipType'),expandCol : true,hidden : true}
	,{text : '协议签订日期',width : 100,dataIndex : 'bean.dateProt',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d'),expandCol : true,hidden : true}
	,{text : '启用日期',width : 100,dataIndex : 'bean.dateStart',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d'),expandCol : true,hidden : true}
	,{text : '到期日期',width : 100,dataIndex : 'bean.dateEnd',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d'),expandCol : true,hidden : true}
	,{text : '变更后结算方式',width : 100,dataIndex : 'bean.aftSettle',sortable : true}
	,{text : '变更后是否月结',width : 100,dataIndex : 'bean.aftSettleMonth',sortable : true,renderer : mvc.Tools.optRenderer('sys','Sys','OYn')}
	,{text : '变更后次月天数',width : 100,dataIndex : 'bean.aftSettleNextDay',sortable : true}
	,{text : '变更后信用等级',width : 100,dataIndex : 'bean.aftCreditLevel',sortable : true,renderer : mvc.Tools.optRenderer('sal','Sal','OCreditLevel')}
	,{text : '变更后信用额度',width : 100,dataIndex : 'bean.aftCreditLimit',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '变更后押抵金额',width : 100,dataIndex : 'bean.aftCreditOther',sortable : true,renderer : mvc.Tools.numberRenderer(),align : 'right'}
	,{text : '变更后税点(%)',width : 100,dataIndex : 'bean.aftTaxRate',sortable : true,align : 'right'}
	,{text : '变更后产品质量',width : 100,dataIndex : 'bean.aftDescKind',sortable : true}
	,{text : '变更后年承诺销售数量',width : 100,dataIndex : 'bean.aftDescSal',sortable : true}
	,{text : '变更后包装要求',width : 100,dataIndex : 'bean.aftPackDemand',sortable : true}
	,{text : '变更后费用承担方式',width : 100,dataIndex : 'bean.aftShipType',sortable : true,renderer : mvc.Tools.optRenderer('sal','Sal','OShipType')}
	,{text : '变更后协议签订日期',width : 100,dataIndex : 'bean.aftDateProt',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d')}
	,{text : '变更后启用日期',width : 100,dataIndex : 'bean.aftDateStart',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d')}
	,{text : '变更后到期日期',width : 100,dataIndex : 'bean.aftDateEnd',sortable : true,renderer : Ext.util.Format.dateRenderer('Y-m-d')}
	,{text : '备注',width : 100,dataIndex : 'bean.rem',sortable : true}
	];
		if (mainActs.length > 0)
			this.tbar=mainActs;
		this.store=Ext.create('mvc.store.pur.PurProtApply'); 
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
		this.on({cellclick:mvc.Tools.onCellclick});
this.dockedItems=[{
		dock : 'top',
		xtype : 'toolbar',
		items : [{
				xtype : 'label',
				text : '供应商：'
			},
				mvc.Tools.crtComboTrigger(true,'sys_SysSupplier','',{
							name : 'supplier'
						})
			,'',{
				xtype : 'label',
				text : '名称：'
			},{
				xtype : 'textfield',
				name : 'name'
			},'',{
				xtype : 'label',
				text : '状态：'
			},{
				xtype : 'combo',
				name : 'status',
				mode : 'local',
				valueField : 'value',
				triggerAction : 'all',
				forceSelection : true,
				typeAhead : true,
				editable : false,
				emptyText : form_empty_text,
				store : Ext.create('mvc.combo.sys.SysOBillStatus')
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
	selectionchange : 		   	function(selModel, records) {
            if (records.length === 1){
				var status = records[0].get('bean.status'); //根据单据状态判断
				//初始状态
				if (status==STATUS_INIT){
					if (this.roles.indexOf('upd') != -1)
						this.down('#'+this.oldId+'upd').setDisabled(false);
					if (this.roles.indexOf('del') != -1)
						this.down('#'+this.oldId+'del').setDisabled(false);
					if (this.roles.indexOf('doAppr') != -1)
						this.down('#'+this.oldId+'doAppr').setDisabled(false);
				}else if (status==STATUS_APPROVE){
					if (this.roles.indexOf('upd') != -1)
						this.down('#'+this.oldId+'upd').setDisabled(true);
					if (this.roles.indexOf('del') != -1)
						this.down('#'+this.oldId+'del').setDisabled(true);
					if (this.roles.indexOf('doAppr') != -1)
						this.down('#'+this.oldId+'doAppr').setDisabled(true);
				}
            }else{
            	if (this.roles.indexOf('upd') != -1)
					this.down('#'+this.oldId+'upd').setDisabled(true);
				if (this.roles.indexOf('del') != -1)
					this.down('#'+this.oldId+'del').setDisabled(true);
				if (this.roles.indexOf('doAppr') != -1)
					this.down('#'+this.oldId+'doAppr').setDisabled(true);
            }
        }

},
onSaveRecord : function(form, data){
		this.store.insert(0,data);
		this.getView().select(0);
		Ext.example.msg(msg_title, msg_text);	
},
onIns : function(){
		var win = Ext.create('mvc.view.pur.PurProtApply.Win',{
			title : this.title+'>新增'
		});
		win.on('create',this.onSaveRecord,this);
		win.show();		
},
onUpdateRecord : function(form, data){
		var selection = this.getView().getSelectionModel().getSelection()[0];
		var bean = Ext.create('mvc.model.pur.PurProtApply', data);
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
			var win = Ext.create('mvc.view.pur.PurProtApply.Win',{
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
						url : base_path+'/pur_PurProtApply_delMulti?pkeys='+arr.toString()+'&rowVersions='+arrv.toString(),
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
					url : base_path+'/pur_PurProtApply_del?pkey='+row.get('bean.pkey')+'&rowVersion='+row.get(BEAN_VERSION),
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
onDoAppr : function(){
			var selection = this.getView().getSelectionModel().getSelection()[0];
			var me = this;
			if (selection){
				Ext.MessageBox.confirm(msg_confirm_title, '申请单['+selection.get('bean.code') + '] - 审核确认吗？',
					function(btn) {
						if (btn != 'yes')
							return;
						Ext.Ajax.request({
							url : base_path+'/pur_PurProtApply_approve?pkey='+selection.get('bean.pkey')+'&rowVersion='+selection.get(BEAN_VERSION),
							success : function (response, options) {
								var result = Ext.decode(response.responseText);
								if (result.success){
									var bean  = Ext.create('mvc.model.pur.PurMvIn',result);
									Ext.apply(selection.data, bean.data);
									selection.commit();
									me.getView().select(selection);
									Ext.example.msg(msg_title, '审核--成功');
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
		var win = Ext.create('mvc.view.pur.PurProtApply.WinSearch',{
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