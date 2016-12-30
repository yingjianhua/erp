Ext.define('mvc.view.gs.GsGoods.Form',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/gs_GsGoods_',
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
			formFlds.push
({xtype : 'textfield',name : 'bean.code',fieldLabel : '代码',emptyText:'为空表示由系统自动产生'}
	,{
		xtype : 'beantrigger',
		name : 'bean.kind',
		fieldLabel : '货物类别',
		bean : 'GsGoodsKind',
		beanType : 'gs',
		emptyText : form_empty_text,
		afterLabelTextTpl : required,
		allowBlank : false,
		listeners : {
			scope : this,
			change : function(field,newv,oldv,opts) {
				var me = this;
				var fld;
				if (!newv){
					me.down('[name=bean.spec]').setValue(null);
					me.down('[name=bean.spec]').hide();
					for (var i=1; i<=5; i++){
						fld = me.down('[name=bean.cust'+i+']');
						fld.setValue(null);
						fld.hide();
					}
					me.doLayout();
					return;
				}
				var urlCust = base_path+ '/gs_GsGoodsKind_loadCust?sarg1=' + newv;
    		Ext.Ajax.request({
    			url : urlCust,
    			method : 'GET',
    			success : function(response) {
    				rtn = Ext.JSON.decode(response.responseText, true);
    				if (rtn.success){
    					if (rtn.cust1){
    						me.down('[name=bean.spec]').setValue(null);
    						me.down('[name=bean.spec]').hide();
    						fld = me.down('[name=bean.cust1]');
    						fld.setFieldLabel(rtn.cust1);
    						fld.show();
    						fld = me.down('[name=bean.cust2]');
    						if (rtn.cust2){
        						fld.setFieldLabel(rtn.cust2);
        						fld.show();
    						}else{
    							fld.setValue(null);
    							fld.hide();
    						}
    						fld = me.down('[name=bean.cust3]');
    						if (rtn.cust3){
        						fld.setFieldLabel(rtn.cust3);
        						fld.show();
    						}else{
    							fld.setValue(null);
    							fld.hide();
    						}
    						fld = me.down('[name=bean.cust4]');
    						if (rtn.cust4){
        						fld.setFieldLabel(rtn.cust4);
        						fld.show();
    						}else{
    							fld.setValue(null);
    							fld.hide();
    						}
    						fld = me.down('[name=bean.cust5]');
    						if (rtn.cust5){
        						fld.setFieldLabel(rtn.cust5);
        						fld.show();
    						}else{
    							fld.setValue(null);
    							fld.hide();
    						}
    					}else{	//无自定义属性的情况
    						me.down('[name=bean.spec]').setValue(null);
    						me.down('[name=bean.spec]').show();
    						for (var i=1; i<=5; i++){
    							fld = me.down('[name=bean.cust'+i+']');
    							fld.setValue(null);
    							fld.hide();
    						}
    					}
	    				me.doLayout();
    				}else{
    					Ext.MessageBox.show({
								title : msg_title, 
								msg : rtn.msg,
								buttons : Ext.MessageBox.OK,
								icon : Ext.MessageBox.ERROR
							});
    				}
    			}
    		});
			}
		}
	},{xtype : 'textfield',name : 'bean.codeOld',fieldLabel : '原代码'}
	,{xtype : 'textfield',name : 'bean.name',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '名称'}
	,{
		xtype : 'beantrigger',
		name : 'bean.uom',
		fieldLabel : '计量单位',
		bean : 'GsUom',
		beanType : 'gs',
		emptyText : form_empty_text,
		afterLabelTextTpl : required,
		allowBlank : false,
		readOnly : !this.insFlag
	},{xtype : 'textfield',name : 'bean.spec',fieldLabel : '规格', hidden:true}
	,{xtype : 'textfield',name : 'bean.cust1',fieldLabel : '属性名称1', hidden:true}
	,{xtype : 'textfield',name : 'bean.cust2',fieldLabel : '属性名称2', hidden:true}
	,{xtype : 'textfield',name : 'bean.cust3',fieldLabel : '属性名称3', hidden:true}
	,{xtype : 'textfield',name : 'bean.cust4',fieldLabel : '属性名称4', hidden:true}
	,{xtype : 'textfield',name : 'bean.cust5',fieldLabel : '属性名称5', hidden:true}
	,{xtype : 'numberfield',name : 'bean.weightRate',value : 0,fieldLabel : '单位重量',decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.valumeRate',value : 0,fieldLabel : '单位体积',decimalPrecision : 4}
	,{xtype : 'textfield',name : 'bean.descrip',fieldLabel : '描述'}
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.zeroOutFlag',
					fieldLabel : '可否零库存出库',
					store : Ext.create('mvc.combo.sys.SysOYn'),
					value : 0
				})
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.batchType',
					fieldLabel : '批次管理类型',
					store : Ext.create('mvc.combo.gs.GsOBatchType'),
					value : 0
				})
	,{xtype : 'numberfield',name : 'bean.economicQty',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '经济批量',decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.purLeadDays',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '采购提前天数',allowDecimals : false}
	,
		mvc.Tools.crtComboTrigger(true,'sys_SysOrg','',{
					name : 'bean.org',
					fieldLabel : '机构'
				})
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
}
});