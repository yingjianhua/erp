Ext.define('mvc.view.pur.PurMvIn.ListForm',{
insFd : false,
chkFlag : false,
extend : 'Ext.grid.Panel',
disableSelection : false,
loadMask : true,
cellEditing : Ext.create('Ext.grid.plugin.CellEditing', { clicksToEdit: 1 }),
mainPkey : null,
initComponent : function(){
	if(!this.insFd && !this.chkFlag){		
		var mainActs = [{
			text : '新增',
			iconCls : 'ins-icon',
			scope : this,
			handler : this.onIns
		},{
			text : '删除',
			iconCls : 'del-icon',
			scope : this,
			handler : this.onDel
		}];
		this.tbar = mainActs;
		this.columns =[		
		{text : '货物', width : 100, dataIndex : 'bean.goods', sortable : true, renderer : mvc.Tools.beanRenderer(), 
				editor: {
					xtype : 'comboautocell',
					listConfig : {minWidth:250},
					fields : ['pkey','code','name'],//查询返回信息model
					valueField : ['pkey'],//提交值
					textField : 'code', //显示信息
					queryParam : 'code',//搜索使用
					name : 'goods', //提交使用
					url : base_path + '/gs_GsGoods_autoComplete',
					urlExt : 'gs.GsGoods',
					hasBlur : false,
					grid : this
		}}
		,{text : '数量',width : 100,dataIndex : 'bean.qty',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right',editor : {xtype : 'numberfield',decimalPrecision : 4}}
		,{text : '单位',width : 50,dataIndex : 'bean.uom',sortable : true,renderer : mvc.Tools.beanRenderer(),editor : {xtype : 'beantriggercell',bean : 'GsUom',beanType : 'gs',beanName : 'bean.uom',grid : this,emptyText : form_empty_text}}
		,{text : '单价',width : 100,dataIndex : 'bean.price',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right',editor : {xtype : 'numberfield',decimalPrecision : 4}}
		,{text : '金额',width : 100,dataIndex : 'bean.amt',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right',editor : {xtype : 'numberfield',decimalPrecision : 2}}
		];
	}else{
		this.columns =[		
		{text : '货物', width : 100, dataIndex : 'bean.goods', sortable : true, renderer : mvc.Tools.beanRenderer()}
		,{text : '数量',width : 100,dataIndex : 'bean.qty',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'}
		,{text : '单位',width : 50,dataIndex : 'bean.uom',sortable : true,renderer : mvc.Tools.beanRenderer()}
		,{text : '单价',width : 100,dataIndex : 'bean.price',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right',editor : {xtype : 'numberfield',decimalPrecision : 4}}
		,{text : '金额',width : 100,dataIndex : 'bean.amt',sortable : true,renderer : mvc.Tools.numberRenderer(4),align : 'right'	}
		];
	}
	
	mvc.Tools.doGoodsLine(this.columns, 1);				
	this.store=Ext.create('mvc.store.pur.PurMvInLine');
				this.store.pageSize = 0;
				this.store.remoteFilter = true;
				this.store.proxy.filterParam = 'filter';
				this.plugins = [this.cellEditing];
				this.on('edit', function(editor, e) {
					if (e.field == 'bean.goods'){
						if (this.oldGoods != e.value){ //值变更后触发
							mvc.Tools.onLoadInfo(e.value, e.record, this);
						}
					}
					if (e.field == 'bean.price'){
						var price = Number(e.value);
						var num = Number(e.record.get('bean.qty'));
						var amt = price * num;
						e.record.set('bean.amt',amt);
						var amtAll=0;
						this.store.each(function(recode){
							amtAll = amtAll + Number(recode.get('bean.amt'));
						});
						this.up('panel').down('[name=bean.amt]').setValue(amtAll);
					}
					if (e.field == 'bean.qty'){
						var num = Number(e.value);
						var price = Number(e.record.get('bean.price'));
						var amt = price * num;
						e.record.set('bean.amt',amt);
						var amtAll=0;
						this.store.each(function(recode){
							amtAll = amtAll + Number(recode.get('bean.amt'));
						});
						this.up('panel').down('[name=bean.amt]').setValue(amtAll);
					}
				});
				this.on('beforeedit', function(editor, e) {
					this.diySql = null;
					if (e.field == 'bean.goods')
						this.oldGoods = e.value;
					else if (e.field == 'bean.uom' && e.value){//CELL-EDITOR对象找不到，暂只能把参数存储到GRID中
						var s = e.record.get('bean.uom').split(bean_split);
						this.diySql = 'uom_type = (select uom_type from gs_uom where pkey='+s[0]+')';
					}
				});
				this.callParent(arguments);	
},
onIns : function(){
		var model = Ext.create('mvc.store.pur.PurMvInLine');
        this.store.insert(0, model);
        this.cellEditing.startEditByPosition({row: 0, column: 0});
},
onDel : function(){
		var selection = this.getView().getSelectionModel().getSelection();
		if (selection){
			this.getStore().remove(selection);
		}
}
});