Ext.define('mvc.view.gs.GsPriceGoodsKindCell.Form',{
	extend : 'Ext.form.Panel',
	requires : ['Ext.ux.DataTip'],
	layout : 'form',
	border : false,
	frame : false,
	insFlag : true,
	bodyPadding : '5 5 5 5',
	url : base_path+'/gs_GsPriceGoodsKindCell_',
	fieldDefaults : {
		labelWidth : 80,
		labelStyle : 'font-weight : bold',
		maxWidth : 350,
	},
	plugins : {
		ptype : 'datatip'
	},
	initComponent : function(){
		if (this.insFlag)
			this.url = this.url + 'ins';
		else
			this.url = this.url + 'upd';
		var formFlds = [];
		formFlds.push(mvc.Tools.crtComboTrigger(false,'sys_SysCell','',{
			name : 'bean.cell',
			fieldLabel : '核算单元',
			readOnly : !this.insFlag,
			listeners : {
				scope : this,
				change : function(field,newv,oldv,opts) {
					var listGrid = this.up('window').down('grid')
					var listStore = listGrid.getStore();//store
					if(newv != '' && newv != null) {
						var array = [];
						array.push({
				        	id:'flds',
				            property: 'param',
				            value: newv
				        });
				    	array.push({
				        	id:'diy',
				            property: 'diy',
				            value: 'price_kind=' + newv
				        });
				    	listStore.filter(array);
				    	var me = this;
				    	listGrid.store.onload;
					}
				}
			}
		})
,
mvc.Tools.crtComboTrigger(false,'gs_GsPriceGoodsKind','',{
			name : 'bean.priceKind',
			fieldLabel : '基础价格分类',
			readOnly : !this.insFlag,
			listeners : {
				scope : this,
				change : function(field,newv,oldv,opts) {
					if(this.insFlag){
						if(this.down("[name=bean.cell]").getValue()==null){
							Ext.MessageBox.show({
									title : "提示",
									msg : "请先选择【核算单元】",
									buttons : Ext.MessageBox.OK,
									icon : Ext.MessageBox.ERROR
								})
						}else{
							var listGrid = this.up('window').down('grid')
							var listStore = listGrid.getStore();//store
							if(newv != '' && newv != null) {
								var array = [];
								array.push({
						        	id:'flds',
						            property: 'param',
						            value: newv
						        });
						    	array.push({
						        	id:'diy',
						            property: 'diy',
						            value: 'price_kind=' + newv
						        });
						    	listStore.filter(array);
						    	var me = this;
						    	listGrid.store.onload;
							}
						}
					}
				}
			}
		})
		,{xtype : 'numberfield',name : 'bean.rowVersion',value : '0',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '版本',hidden : true,allowDecimals : false}
		,{
				xtype : 'hiddenfield',
				name : 'bean.pkey'
			});
		this.items = [{
			layout : {
				type : 'vbox',
				align : 'stretch'
			},
			border : false,
			items : formFlds
		}];
		this.callParent(arguments);
	},
	onload:function(){//动态加载store的情况的勾选需要在这里面
    	alert("11");
    		if(!this.insFlag) {
	    		var result;
	    		var i = 0;
	    		var cellv = me.down('[name=bean.cell]').getValue();
	    		Ext.Ajax.request({
	    			async : false,
					url : base_path+'/gs_GsPriceGoodsCell_listSelectedPriceGoods',
					params : { cell : cellv, priceKind: newv },
					success : function (response, options) {
						result = response.responseText.split(bean_split);
					}
				});
	    		listStore.each(function(record){
    				for (var j = 0; j < result.length; j++) {
    					if (record.get('bean.pkey') == parseInt(result[j])) {
    						listGrid.getSelectionModel().select(i,true,false);//勾选默认选中行
    					}
    				}
    				i++;
	    		});
    		}
    	}
});
