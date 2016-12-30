Ext.define('mvc.view.pur.PurProtGoodsApplyLine.Form',{
	extend : 'Ext.form.Panel',
	requires : ['Ext.ux.DataTip'],
	layout : 'form',
	border : false,
	frame : false,
	frist : true,
	insFlag : true,
	parent : null,
	bodyPadding : '5 5 5 5',
	url : base_path+'/pur_PurProtGoodsApplyLine_',
	fieldDefaults : {
		labelWidth : 110, 
		width : 275, 
		labelStyle : 'font-weight : bold'
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
		formFlds.push({
				xtype : 'comboauto',
				listConfig : {minWidth:250},
				fieldLabel : '货物',
				fields : ['pkey','code','name','spec'],//查询返回信息model
				valueField : ['pkey'],//提交值
				textField : 'code', //显示信息
				queryParam : 'code',//搜索使用
				name : 'bean.goods', //提交使用
				url : base_path + '/gs_GsGoods_autoComplete',
				urlExt : 'gs.GsGoods',
				hasBlur : false,
				afterLabelTextTpl : required,
				allowBlank : false,
				listeners : {
					scope : this,
					blur : function(field){
						this.onLoadGoodsForm(field.getRawValue(),this);
						this.onLoadProtGoods(field.value,this);
						
					}
				}
			},{xtype : 'textfield',name : 'link.goodsName',fieldLabel : '货物名称',readOnly : true,disabled : true,disabledCls : ''}
			,{xtype : 'textfield',name : 'link.goodsSpec',fieldLabel : '货物规格',readOnly : true,disabled : true,disabledCls : ''}
			,{xtype : 'beantrigger',bean : 'GsUom',beanType : 'gs',name : 'bean.uom',fieldLabel : '计量单位',readOnly : true,disabled : true,disabledCls : ''}
			,{
				xtype : 'textfield',
				name : 'bean.vendorGoodsName',
				itemId : 'vendorGoodsName',
				fieldLabel : '他方品名',
				readOnly : true
			},{
				xtype : 'textfield',
				name : 'bean.aftVendorGoodsName',
				itemId : 'aftVendorGoodsName',
				fieldLabel : '变更后他方品名'
			},{
				xtype : 'textfield',
				name : 'bean.vendorNum',
				itemId : 'vendorNum',
				fieldLabel : '他方代码',
				readOnly : true
			},{
				xtype : 'textfield',
				name : 'bean.aftVendorNum',
				itemId : 'aftVendorNum',
				fieldLabel : '变更后他方代码'
			},{
				xtype : 'textfield',
				name : 'bean.vendorSpec',
				itemId : 'vendorSpec',
				fieldLabel : '他方规格',
				readOnly : true
			},{
				xtype : 'textfield',
				name : 'bean.aftVendorSpec',
				itemId : 'aftVendorSpec',
				fieldLabel : '变更后他方规格'
			},{
				xtype : 'numberfield',
				name : 'bean.price',
				itemId : 'price',
				fieldLabel : '协议价',decimalPrecision : 4,
				readOnly : true
			},{
				xtype : 'numberfield',
				name : 'bean.aftPrice',
				afterLabelTextTpl : required,
				allowBlank : false,
				itemId : 'aftPrice',
				fieldLabel : '变更后协议价',decimalPrecision : 4
			},{
				xtype : 'hiddenfield',
				name : 'bean.pkey'
			});
		this.items = [{
			layout : {
				type : 'table', 
				columns: 2, 
				itemCls : 'x-layout-table-items-form' 
			},
			border : false,
			items : formFlds
		}];
		this.callParent(arguments);
},
onNewApp : function(){
		this.down('#vendorGoodsName').setReadOnly(false);
		this.down('#vendorNum').setReadOnly(false);
		this.down('#vendorSpec').setReadOnly(false);
		this.down('#price').setReadOnly(false);
		
		
		this.down('#aftVendorGoodsName').setReadOnly(true);
		this.down('#aftVendorNum').setReadOnly(true);
		this.down('#aftVendorSpec').setReadOnly(true);
		this.down('#aftPrice').setReadOnly(true);

},
onUpdApp : function(){
		this.down('#vendorGoodsName').setReadOnly(true);
		this.down('#vendorNum').setReadOnly(true);
		this.down('#vendorSpec').setReadOnly(true);
		this.down('#price').setReadOnly(true);
		
		
		this.down('#aftVendorGoodsName').setReadOnly(false);
		this.down('#aftVendorNum').setReadOnly(false);
		this.down('#aftVendorSpec').setReadOnly(false);
		this.down('#aftPrice').setReadOnly(false);
},
onLoadGoodsForm : function(goodsCode,form){
    		if (!goodsCode)
    			return null;
    		if (goodsCode.indexOf(bean_split) != -1) //两种情况：手动输入代码 或 选择器带回
    			goodsCode = goodsCode.split(bean_split)[1]
    		var urlGoods = base_path+ '/loadInfo?sarg1=' + goodsCode;
    		var rtn = null;
    		Ext.Ajax.request({
    			async : true,
    			url : urlGoods,
    			method : 'GET',
    			success : function(response) {
	    			rtn = Ext.JSON.decode(response.responseText, true);
    				if (!rtn) {
							form.down('[name=bean.goods]')
									.setValue(null);
							form.down('[name=link.goodsName]')
							.setValue(null);
							form.down('[name=link.goodsSpec]')
									.setValue(null);
							form.down('[name=bean.uom]')
									.setValue(null);
						} else {
							form.down('[name=bean.goods]')
							.setValue(rtn.goods);
							form.down('[name=link.goodsName]')
									.setValue(rtn.goodsName);
							form.down('[name=link.goodsSpec]')
									.setValue(rtn.goodsSpec);
							form.down('[name=bean.uom]')
									.setValue(rtn.uom);
						}    				
    			},
    			failure : function(response) {
    				Ext.example.msg(msg_title, msg_ajax);
    			}
    		});
    	},
onLoadProtGoods : function(newv, form) {
	var supAll = this.parent.down('#supplier').getValue();
		var tmp = this.parent.down('#templat').getValue();
		if(!supAll || !tmp || !newv)
			return;
		var sup = supAll.split('##')[0];
		if(!this.frist  || this.insFlag){
			Ext.Ajax.request({
				async : false,
				url : base_path + '/pur_PurProtGoodsApply_init?supId='+sup +'&temId='+tmp +'&goodsId='+newv,
				method : 'GET',
				scope : this,
				success : function(response) {
					var rtn = Ext.decode(response.responseText, true);
					var formRecord = Ext.create("mvc.model.pur.PurProtGoodsApplyLine");
					formRecord.data = Ext.decode(response.responseText);
					this.down("#vendorGoodsName").setValue(formRecord.get("bean.vendorGoodsName"));
					this.down("#vendorNum").setValue(formRecord.get("bean.vendorNum"));
					this.down("#vendorSpec").setValue(formRecord.get("bean.vendorSpec"));
					this.down("#price").setValue(formRecord.get("bean.price"));
				},
				failure : function(response) {
					Ext.example.msg(msg_title, msg_ajax);
				}
			});
			
		}
		this.frist = false;
}
	/*loadSupGoods : function(newv){
		var supAll = this.parent.down('#supplier').getValue();
		var tmp = this.parent.down('#templat').getValue();
		if(!supAll || !tmp || !newv)
			return;
		var sup = supAll.split('##')[0];
		if(!this.frist  || this.insFlag){
			Ext.Ajax.request({
				async : false,
				url : base_path + '/pur_PurProtGoodsApply_init?supId='+sup +'&temId='+tmp +'&goodsId='+newv,
				method : 'GET',
				scope : this,
				success : function(response) {
					var rtn = Ext.decode(response.responseText, true);
					var formRecord = Ext.create("mvc.model.pur.PurProtGoodsApplyLine");
					formRecord.data = Ext.decode(response.responseText);
					this.getForm().loadRecord(formRecord);
					if(rtn.success == '0'){
						this.onNewApp();
					}else{
						this.onUpdApp();
					}
				},
				failure : function(response) {
					Ext.example.msg(msg_title, msg_ajax);
				}
			});
			
		}
		this.frist = false;
	}*/
});
