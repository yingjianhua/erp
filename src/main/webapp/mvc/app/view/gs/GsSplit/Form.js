Ext.define('mvc.view.gs.GsSplit.Form',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/gs_GsSplit_',
fieldDefaults : {
	labelWidth : 100,
	width : 275,
	labelStyle : 'font-weight : bold'
},
initComponent : function(){
			if (this.insFlag)
				this.url = this.url + 'ins';
			else
				this.url = this.url + 'upd';
			var formFlds = [];
			formFlds.push
(
		mvc.Tools.crtComboTrigger(false,'gs_GsWarehouse','',{
					name : 'bean.warehouse',
					fieldLabel : '仓库'
				})
	,{
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
      }
    }

	},{xtype : 'textfield',name : 'link.goodsName',fieldLabel : '货物名称',readOnly : true,disabled : true,disabledCls : ''}
	,{xtype : 'textfield',name : 'link.goodsSpec',fieldLabel : '货物规格',readOnly : true,disabled : true,disabledCls : ''}
	,{
		    xtype : 'beantrigger',
    name : 'bean.uom',
    fieldLabel : '计量单位',
    bean : 'GsUom',
    beanType : 'gs',
    emptyText : form_empty_text,
    afterLabelTextTpl : required,
    allowBlank : false,
    listeners : {
      scope : this,
      change : function(field, newv, oldv, eOpt){
        console.log("newv:"+newv);
        console.log("oldv:"+oldv);
        if(newv!=oldv) {
          field.diySql = 'uom_type = (select uom_type from gs_uom where pkey='+newv.split(bean_split)[0]+')';
        }
      }
    }

	},{xtype : 'numberfield',name : 'bean.qty',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '数量',decimalPrecision : 4}
	,{xtype : 'textfield',name : 'bean.rem',fieldLabel : '备注'}
	,{xtype : 'numberfield',name : 'bean.rowVersion',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '版本',hidden : true,allowDecimals : false}
	,{
		xtype : 'hiddenfield',
		name : 'bean.pkey'
	});
	this.items = [{
		layout : {
			type : 'table',
			columns : 2,
			itemCls : 'x-layout-table-items-form'
		},
		border : false,
		items : formFlds
	}];
	this.callParent(arguments);
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
}
});