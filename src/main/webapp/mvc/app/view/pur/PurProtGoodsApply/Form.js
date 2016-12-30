Ext.define('mvc.view.pur.PurProtGoodsApply.Form',{
	extend : 'Ext.form.Panel',
	requires : ['Ext.ux.DataTip'],
	layout : 'form',
	border : false,
	frame : false,
	insFlag : true,
	frist : true,
	bodyPadding : '5 5 5 5',
	url : base_path+'/pur_PurProtGoodsApply_',
	fieldDefaults : {
		labelWidth : 100,
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
		formFlds.push(mvc.Tools.crtComboTrigger(false,'sys_SysTemplat','type=3',{
				name : 'bean.templat',
				itemId : 'templat',
				fieldLabel : '科目模板',
				listeners :{
					scope : this,
					change : function(field,newv,oldv,opts) {
						this.changSup();
					}
				}
			}),{
			xtype : 'beantrigger',
			name : 'bean.supplier',
			fieldLabel : '供应商',
			itemId : 'supplier',
			bean : 'SysSupplier',
			beanType : 'sys',
			emptyText : form_empty_text,
			listeners :{
				scope : this,
				change : function(field,newv,oldv,opts) {
					this.loadSup(newv);
					this.changSup();
				}
			}
		},{
				xtype : 'textfield',
				name : 'bean.name',
				itemId : 'name',
				afterLabelTextTpl : required,
				allowBlank : false,
				fieldLabel : '供应商名称',
				readOnly : true
			},{
				xtype : 'textareafield',
				name : 'bean.rem',
				fieldLabel : '备注',
				height: 25
			},{
				xtype : 'hiddenfield',
				name : 'bean.pkey'
			},{
				xtype : 'numberfield',
				name : 'bean.rowVersion',
				value : '0',
				afterLabelTextTpl : required,
				allowBlank : false,fieldLabel : '版本',
				hidden : true,allowDecimals : false
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
	loadSup : function(newv){
		if(!newv)
			return;
		var sup = newv.split('##')[0];
		Ext.Ajax.request({
			async : false,
			url : base_path + '/sys_SysSupplier_loadName?pkey='+sup,
			method : 'GET',
			scope : this,
			success : function(response) {
				var rtn = Ext.decode(response.responseText, true);
				this.down('#name').setValue(rtn.name);
			},
			failure : function(response) {
				Ext.example.msg(msg_title, msg_ajax);
			}
		});
	},
	changSup : function(){
		var supAll = this.down('#supplier').getValue();
		var tmp = this.down('#templat').getValue();
		if((!supAll || !tmp) && this.frist)
			return;
		if(!this.frist  || this.insFlag){
			this.up('panel').down('#PurProtGoodsApplyLine').getStore().removeAll();
		}
		this.frist = false;
	}
});
