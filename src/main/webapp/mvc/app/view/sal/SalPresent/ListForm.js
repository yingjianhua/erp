Ext.define('mvc.view.sal.SalPresent.ListForm', {
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
					text : '货物',
					width : 120,
					dataIndex : 'bean.goods',
					sortable : true,
					renderer : mvc.Tools.beanRenderer(),
					editor : {
						xtype : 'comboautocell',
						listConfig : {minWidth:250},
						fields : ['pkey', 'code','name','spec'],// 查询返回信息model
						valueField : ['pkey'],// 提交值
						textField : 'code', // 显示信息
						queryParam : 'code',// 搜索使用
						name : 'goods', // 提交使用
						url : base_path + '/gs_GsGoods_autoComplete',
						urlExt : 'gs.GsGoods',
						hasBlur : false,
						grid : this,
						onTrigger : function(data, params) {
							this.grid.onLoadInfoPrice(data, null);
						}
					}
				}, {
					text : '数量',
					width : 100,
					dataIndex : 'bean.qty',
					sortable : true,
					align : 'right',
					renderer : mvc.Tools.numberRenderer(4),
					editor : {
						xtype : 'numberfield',
						decimalPrecision : 4
					}
				}, {
					text : '计量单位',
					width : 80,
					dataIndex : 'bean.uom',
					sortable : true,
					renderer : mvc.Tools.beanRenderer(),
					editor : {
						xtype : 'beantriggercell',
						bean : 'GsUom',
						beanType : 'gs',
						beanName : 'bean.uom',
						grid : this,
						emptyText : form_empty_text,
						onTrigger : function(data, params) {
							this.setValue(data);
							var row = this.grid.getView().getSelectionModel()
									.getSelection()[0];
							row.set(this.beanName, this.getValue());
							var cust = this.grid.up('window').down('form')
									.down('[name=bean.cust]').getValue();
							var goodsCode = row.get('bean.goods')
									.split(bean_split)[1];
							var uom = row.get('bean.uom').split(bean_split)[0];
							this.grid.doLoadPrice(row, cust, goodsCode, uom);
						}
					}
				}, {
					text : '单价',
					width : 100,
					dataIndex : 'bean.price',
					sortable : true,
					align : 'right',
					renderer : mvc.Tools.numberRenderer(4),
					editor : {
						xtype : 'numberfield',
						decimalPrecision : 4
					}
				}, {
					text : '金额',
					width : 120,
					dataIndex : 'bean.amt',
					sortable : true,
					renderer : mvc.Tools.numberRenderer(),
					align : 'right'
				}];
		mvc.Tools.doGoodsLine(this.columns, 1);
		this.store = Ext.create('mvc.store.sal.SalPresentLine');
		this.store.pageSize = 0;
		this.store.remoteFilter = true;
		this.store.proxy.filterParam = 'filter';
		this.plugins = [this.cellEditing];
		mvc.Tools.addCountAmtListener(this);
		this.on('beforeedit', function(editor, e) {
			this.diySql = null;
			if (e.field == 'bean.goods')
				this.oldGoods = e.value;
			else if (e.field == 'bean.uom' && e.value) {// CELL-EDITOR对象找不到，暂只能把参数存储到GRID中
				var s = e.record.get('bean.uom').split(bean_split);
				this.diySql = 'uom_type = (select uom_type from gs_uom where pkey='
						+ s[0] + ')';
			}
		});
		this.listeners = {
			scope : this,
			selectionchange : function(model, records) {
				mvc.Tools.doLoadStock(this);
			}
		}
		this.callParent(arguments);
	},
	onIns : function() {
		var model = Ext.create('mvc.store.sal.SalPresentLine');
		this.store.insert(0, model);
		this.cellEditing.startEditByPosition({
					row : 0,
					column : 0
				});
	},
	onDel : function() {
		var selection = this.getView().getSelectionModel().getSelection();
		if (selection) {
			this.getStore().remove(selection);
		}
	},
	onLoadInfoPrice : function(newv, row) {
		if (row == null)
			row = this.getView().getSelectionModel().getSelection()[0];
		var cust = this.up('window').down('form').down('[name=bean.cust]')
				.getValue();
		if (!cust) {
			row.set('link.goods', null);
			row.set('link.goodsName', null);
			row.set('link.goodsSpec', null);
			row.set('bean.uom', null);
			row.set('bean.qty', null);
			row.set('bean.price', null);
			Ext.example.msg(msg_title, '请先选择客户!');
			return;
		}
		if (!newv) {
			row.set('link.goodsName', null);
			row.set('link.goodsSpec', null);
			row.set('bean.uom', null);
			row.set('bean.qty', null);
			row.set('bean.price', null);
			return;
		}
		if (newv.toString().indexOf(bean_split) != -1) // 两种情况：手动输入代码 或 选择器带回
			newv = newv.split(bean_split)[1];
		this.doLoadPrice(row, cust, newv, null);
	},
	doLoadPrice : function(row, cust, goodsCode, uom) {
		var me = this;
		var urlGoods = base_path + '/sal_SalPriceProt_loadInfoPrice?cust='
				+ cust + '&goods=' + goodsCode;
		if (uom)
			urlGoods += '&uom=' + uom;
		Ext.Ajax.request({
					// async : false, //加上同步限制后，单元格之间切换会中断
					url : urlGoods,
					method : 'GET',
					success : function(response) {
						rtn = Ext.JSON.decode(response.responseText, true);
						if (rtn.success) {
							row.set('bean.goods', rtn.goods);
							row.set('link.goodsName', rtn.goodsName);
							row.set('link.goodsSpec', rtn.goodsSpec);
							row.set('bean.uom', rtn.uom);
							row.set('bean.price', rtn.price);
							mvc.Tools.doLoadStock(me);
						} else {
							Ext.MessageBox.show({
										title : msg_title,
										msg : rtn.msg,
										buttons : Ext.MessageBox.OK,
										icon : Ext.MessageBox.ERROR
									});
						}
					},
					failure : function(response) {
						Ext.example.msg(msg_title, msg_ajax);
					}
				});
	}
});