Ext.define('mvc.view.gs.GsGoodsKind.Form',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/gs_GsGoodsKind_',
fieldDefaults : {
	labelWidth : 100,
	labelStyle : 'font-weight : bold'
},
initComponent : function(){
			if (this.insFlag)
				this.url = this.url + 'ins';
			else
				this.url = this.url + 'upd';
			var formFlds = [];
			formFlds.push
({xtype : 'textfield',name : 'bean.code',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '代码',readOnly : !this.insFlag}
	,{
		 		xtype : 'beantrigger',
		name : 'bean.parent',
		fieldLabel : '上级类别',
		bean : 'GsGoodsKind',
		beanType : 'gs',
		emptyText : form_empty_text,
		readOnly : !this.insFlag,
		listeners : {
			scope : this,
			change : function(field,newv,oldv,opts) {
				var me = this;
				if (!newv){
					me.down('[name=bean.cust1]').setValue(null);
					me.down('[name=bean.cust2]').setValue(null);
					me.down('[name=bean.cust3]').setValue(null);
					me.down('[name=bean.cust4]').setValue(null);
					me.down('[name=bean.cust5]').setValue(null);
					return;
				}
				if(me.insFlag){ 
				var urlCust = base_path+ '/gs_GsGoodsKind_loadCust?sarg1=' + newv;
    		Ext.Ajax.request({
    			url : urlCust,
    			method : 'GET',
    			success : function(response) {
    				rtn = Ext.JSON.decode(response.responseText, true);
    				if (rtn.success){
	    				me.down('[name=bean.cust1]').setValue(rtn.cust1);
	    				me.down('[name=bean.cust2]').setValue(rtn.cust2);
	    				me.down('[name=bean.cust3]').setValue(rtn.cust3);
	    				me.down('[name=bean.cust4]').setValue(rtn.cust4);
	    				me.down('[name=bean.cust5]').setValue(rtn.cust5);
    				}else{
    					Ext.MessageBox.show({
								title : msg_title, 
								msg : rtn.msg,
								buttons : Ext.MessageBox.OK,
								icon : Ext.MessageBox.ERROR
							});
    				}
    			}
    		})
    		};
			}
		}

	},
		mvc.Tools.crtComboForm(false,{
					name : 'bean.type',
					fieldLabel : '类型',
					store : Ext.create('mvc.combo.gs.GsOType'),
					value : 1
				})
	,{xtype : 'textfield',name : 'bean.name',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '名称'}
	,{xtype : 'textfield',name : 'bean.cust1',fieldLabel : '属性名称1'}
	,{xtype : 'textfield',name : 'bean.cust2',fieldLabel : '属性名称2'}
	,{xtype : 'textfield',name : 'bean.cust3',fieldLabel : '属性名称3'}
	,{xtype : 'textfield',name : 'bean.cust4',fieldLabel : '属性名称4'}
	,{xtype : 'textfield',name : 'bean.cust5',fieldLabel : '属性名称5'}
	,{xtype : 'textfield',name : 'bean.subjectAlias',emptyText : '为空表示取上级分类的"存货科目别名"',fieldLabel : '存货科目别名'}
	,{xtype : 'numberfield',name : 'bean.rowVersion',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '版本',hidden : true,allowDecimals : false}
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
}
});