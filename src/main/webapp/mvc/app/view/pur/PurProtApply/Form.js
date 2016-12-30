Ext.define('mvc.view.pur.PurProtApply.Form',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
first : true,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/pur_PurProtApply_',
fieldDefaults : {
	labelWidth : 120,
	width : 300,
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
				mvc.Tools.crtComboTrigger(false,'sys_SysTemplat','type=3',{
				name : 'bean.templat',
				fieldLabel : '采购模板',
				listeners :{
					scope : this,
					change : function(field,newv,oldv,opts) {
						this.loadSup();
					}
				}
			}) 		

	,{
						xtype : 'beantrigger',
				name : 'bean.supplier',
				fieldLabel : '供应商',
				bean : 'SysSupplier',
				beanType : 'sys',
				emptyText : form_empty_text,
				listeners :{
					scope : this,
					change : function(field,newv,oldv,opts) {
						this.loadSup();
					}
				}
				

	},{xtype : 'textfield',name : 'bean.name',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '供应商名称',readOnly : true}
	,{xtype : 'textfield',name : 'bean.rem',fieldLabel : '备注'}
	,{xtype : 'textfield',name : 'bean.settle',fieldLabel : '结算方式',readOnly : true}
	,{xtype : 'textfield',name : 'bean.aftSettle',fieldLabel : '变更后结算方式',readOnly : true}
	,
		mvc.Tools.crtComboForm(true,{
					name : 'bean.settleMonth',
					fieldLabel : '是否月结',
					store : Ext.create('mvc.combo.sys.SysOYn'),
					value : null,
					readOnly : true
				})
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.aftSettleMonth',
					fieldLabel : '变更后是否月结',
					store : Ext.create('mvc.combo.sys.SysOYn'),
					value : 1,
					readOnly : true
				})
	,{xtype : 'numberfield',name : 'bean.settleNextDay',value : null,fieldLabel : '次月天数',readOnly : true,allowDecimals : false}
	,{xtype : 'numberfield',name : 'bean.aftSettleNextDay',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '变更后次月天数',readOnly : true,allowDecimals : false}
	,
		mvc.Tools.crtComboForm(true,{
					name : 'bean.creditLevel',
					fieldLabel : '信用等级',
					store : Ext.create('mvc.combo.sal.SalOCreditLevel'),
					value : null,
					readOnly : true
				})
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.aftCreditLevel',
					fieldLabel : '变更后信用等级',
					store : Ext.create('mvc.combo.sal.SalOCreditLevel'),
					value : 1,
					readOnly : true
				})
	,{xtype : 'numberfield',name : 'bean.creditLimit',value : 'null',fieldLabel : '信用额度',readOnly : true,decimalPrecision : 2}
	,{xtype : 'numberfield',name : 'bean.aftCreditLimit',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '变更后信用额度',readOnly : true,decimalPrecision : 2}
	,{xtype : 'numberfield',name : 'bean.creditOther',value : 'null',fieldLabel : '押抵金额',readOnly : true,decimalPrecision : 2}
	,{xtype : 'numberfield',name : 'bean.aftCreditOther',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '变更后押抵金额',readOnly : true,decimalPrecision : 2}
	,{xtype : 'numberfield',name : 'bean.taxRate',value : 'null',fieldLabel : '税点(%)',readOnly : true,decimalPrecision : 4}
	,{xtype : 'numberfield',name : 'bean.aftTaxRate',value : 0,afterLabelTextTpl : required,allowBlank : false,fieldLabel : '变更后税点(%)',readOnly : true,decimalPrecision : 4}
	,{xtype : 'textfield',name : 'bean.descKind',fieldLabel : '产品质量',readOnly : true}
	,{xtype : 'textfield',name : 'bean.aftDescKind',fieldLabel : '变更后产品质量',readOnly : true}
	,{xtype : 'textfield',name : 'bean.descSal',fieldLabel : '年承诺销售数量',readOnly : true}
	,{xtype : 'textfield',name : 'bean.aftDescSal',fieldLabel : '变更后年承诺销售数量',readOnly : true}
	,{xtype : 'textfield',name : 'bean.packDemand',fieldLabel : '包装要求',readOnly : true}
	,{xtype : 'textfield',name : 'bean.aftPackDemand',fieldLabel : '变更后包装要求',readOnly : true}
	,
		mvc.Tools.crtComboForm(true,{
					name : 'bean.shipType',
					fieldLabel : '费用承担方式',
					store : Ext.create('mvc.combo.sal.SalOShipType'),
					value : null,
					readOnly : true
				})
	,
		mvc.Tools.crtComboForm(false,{
					name : 'bean.aftShipType',
					fieldLabel : '变更后费用承担方式',
					store : Ext.create('mvc.combo.sal.SalOShipType'),
					value : 3,
					readOnly : true
				})
	,{xtype : 'datefield',name : 'bean.dateProt',fieldLabel : '协议签订日期',readOnly : true,format : 'Y-m-d'}
	,{xtype : 'datefield',name : 'bean.aftDateProt',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '变更后协议签订日期',readOnly : true,format : 'Y-m-d'}
	,{xtype : 'datefield',name : 'bean.dateStart',fieldLabel : '启用日期',readOnly : true,format : 'Y-m-d'}
	,{xtype : 'datefield',name : 'bean.aftDateStart',afterLabelTextTpl : required,allowBlank : false,fieldLabel : '变更后启用日期',readOnly : true,format : 'Y-m-d'}
	,{xtype : 'datefield',name : 'bean.dateEnd',fieldLabel : '到期日期',readOnly : true,format : 'Y-m-d'}
	,{xtype : 'datefield',name : 'bean.aftDateEnd',fieldLabel : '变更后到期日期',readOnly : true,format : 'Y-m-d'}
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
loadSup : function(){
		var supAll = this.down('[name=bean.supplier]').getValue();
		var tmp = this.down('[name=bean.templat]').getValue();
		var rv = this.down('[name=bean.rowVersion]').getValue();
		var pkey = this.down('[name=bean.pkey]').getValue();
		if(!supAll || !tmp)
			return;
		var sup = supAll.split('##')[0];
		Ext.Ajax.request({
			async : false,
			url : base_path + '/pur_PurProtApply_init?supId='+sup +'&temId='+tmp,
			method : 'GET',
			scope : this,
			success : function(response) {
				var rtn = Ext.decode(response.responseText, true);
				this.down('[name=bean.name]').setValue(rtn.name);
				var formRecord = Ext.create("mvc.model.pur.PurProtApply");
				formRecord.data = Ext.decode(response.responseText);
				this.getForm().loadRecord(formRecord);
				if(rtn.success == '0'){
					this.down('[name=bean.aftSettleMonth]').setValue(1);
					this.down('[name=bean.aftSettleNextDay]').setValue(0);
					this.down('[name=bean.aftCreditLevel]').setValue(1);
					this.down('[name=bean.aftCreditLimit]').setValue(0);
					this.down('[name=bean.aftCreditOther]').setValue(0);
					this.down('[name=bean.aftTaxRate]').setValue(0);
					this.down('[name=bean.aftShipType]').setValue(3);
				}
				this.onUpdApp();
				this.down('[name=bean.rowVersion]').setValue(rv);
				this.down('[name=bean.pkey]').setValue(pkey);
			},
			failure : function(response) {
				Ext.example.msg(msg_title, msg_ajax);
			}
		});
	
},
onNewApp : function(){
			
		this.down('[name=bean.settle]').setReadOnly(false);
		this.down('[name=bean.settleMonth]').setReadOnly(false);
		this.down('[name=bean.settleNextDay]').setReadOnly(false);
		this.down('[name=bean.creditLevel]').setReadOnly(false);
		this.down('[name=bean.creditLimit]').setReadOnly(false);
		this.down('[name=bean.creditOther]').setReadOnly(false);
		this.down('[name=bean.taxRate]').setReadOnly(false);
		this.down('[name=bean.descKind]').setReadOnly(false);
		this.down('[name=bean.descSal]').setReadOnly(false);
		this.down('[name=bean.packDemand]').setReadOnly(false);
		this.down('[name=bean.shipType]').setReadOnly(false);
		this.down('[name=bean.dateProt]').setReadOnly(false);
		this.down('[name=bean.dateStart]').setReadOnly(false);
		this.down('[name=bean.dateEnd]').setReadOnly(false);
		
		
		this.down('[name=bean.aftSettle]').setReadOnly(true);
		this.down('[name=bean.aftSettleMonth]').setReadOnly(true);
		this.down('[name=bean.aftSettleNextDay]').setReadOnly(true);
		this.down('[name=bean.aftCreditLevel]').setReadOnly(true);
		this.down('[name=bean.aftCreditLimit]').setReadOnly(true);
		this.down('[name=bean.aftCreditOther]').setReadOnly(true);
		this.down('[name=bean.aftTaxRate]').setReadOnly(true);
		this.down('[name=bean.aftDescKind]').setReadOnly(true);
		this.down('[name=bean.aftDescSal]').setReadOnly(true);
		this.down('[name=bean.aftPackDemand]').setReadOnly(true);
		this.down('[name=bean.aftShipType]').setReadOnly(true);
		this.down('[name=bean.aftDateProt]').setReadOnly(true);
		this.down('[name=bean.aftDateStart]').setReadOnly(true);
		this.down('[name=bean.aftDateEnd]').setReadOnly(true);
	
},
onUpdApp : function(){

		this.down('[name=bean.settle]').setReadOnly(true);
		this.down('[name=bean.settleMonth]').setReadOnly(true);
		this.down('[name=bean.settleNextDay]').setReadOnly(true);
		this.down('[name=bean.creditLevel]').setReadOnly(true);
		this.down('[name=bean.creditLimit]').setReadOnly(true);
		this.down('[name=bean.creditOther]').setReadOnly(true);
		this.down('[name=bean.taxRate]').setReadOnly(true);
		this.down('[name=bean.descKind]').setReadOnly(true);
		this.down('[name=bean.descSal]').setReadOnly(true);
		this.down('[name=bean.packDemand]').setReadOnly(true);
		this.down('[name=bean.shipType]').setReadOnly(true);
		this.down('[name=bean.dateProt]').setReadOnly(true);
		this.down('[name=bean.dateStart]').setReadOnly(true);
		this.down('[name=bean.dateEnd]').setReadOnly(true);
		
		this.down('[name=bean.aftSettle]').setReadOnly(false);
		this.down('[name=bean.aftSettleMonth]').setReadOnly(false);
		this.down('[name=bean.aftSettleNextDay]').setReadOnly(false);
		this.down('[name=bean.aftCreditLevel]').setReadOnly(false);
		this.down('[name=bean.aftCreditLimit]').setReadOnly(false);
		this.down('[name=bean.aftCreditOther]').setReadOnly(false);
		this.down('[name=bean.aftTaxRate]').setReadOnly(false);
		this.down('[name=bean.aftDescKind]').setReadOnly(false);
		this.down('[name=bean.aftDescSal]').setReadOnly(false);
		this.down('[name=bean.aftPackDemand]').setReadOnly(false);
		this.down('[name=bean.aftShipType]').setReadOnly(false);
		this.down('[name=bean.aftDateProt]').setReadOnly(false);
		this.down('[name=bean.aftDateStart]').setReadOnly(false);
		this.down('[name=bean.aftDateEnd]').setReadOnly(false);
	
}
});