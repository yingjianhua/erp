Ext.define('mvc.view.pur.PurOrderDirect.WinSearch',{
extend : 'Ext.window.Window',
oldId : 'PurOrderDirect_searchWin_',
width : 680,
layout : 'fit',
resizable : true,
iconCls : 'app-icon',
listCmp : null,
initComponent : function(){
	var strstore = Ext.create('mvc.combo.sys.SysOOptCht');
	var datestore = Ext.create('mvc.combo.sys.SysOOptCht');
	var numstore = Ext.create('mvc.combo.sys.SysOOptCht');
	var outstore = Ext.create('mvc.combo.sys.SysOOptCht');
	strstore.filter('value', new RegExp('^([1-4|9]|[1][0])$'));
	datestore.filter('value', new RegExp('^([3-9]|[1][0-1])$'));
	numstore.filter('value', new RegExp('^([3-9]|[1][0])$'));
	outstore.filter('value', new RegExp('^([3|4|9]|[1][0])$'));
	this.items ={
	anchor : '100%',
	plain : true,
	items : [{
			xtype : 'panel',
			layout : 'form',
			border : false,
			frame : false,
			bodyPadding : '5 5 5 5',
			url : base_path+'/pur_PurOrderDirect_list',
			fieldDefaults : {
				labelWidth : 100,
				labelStyle : 'font-weight : bold'
			},
			items : [{
					xtype : 'form',
					border : false,
					layout : {
						type : 'table',
						columns : 6,
						itemCls : 'x-layout-table-items-form'
					},
					items : [{
								xtype : 'label',
								text : '单据号'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_code',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'code'}
							
						,{
								xtype : 'label',
								text : '核算单元'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_cell',
											width : 80,
											value : 3,
											store : outstore
										})
							,
								mvc.Tools.crtComboTrigger(true,'sys_SysCell','',{
											name : 'cell'
										})
							
						,{
								xtype : 'label',
								text : '源单据'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_origForm',
											width : 80
										})
							,{xtype : 'beantrigger',name : 'origForm'}
							
						,{
								xtype : 'label',
								text : '源单据号'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_origFormNum',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'origFormNum'}
							
						,{
								xtype : 'label',
								text : '供应商'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_supplier',
											width : 80,
											value : 3,
											store : outstore
										})
							,
								mvc.Tools.crtComboTrigger(true,'sys_SysSupplier','',{
											name : 'supplier'
										})
							
						,{
								xtype : 'label',
								text : '供应商名称'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_supname',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'supname'}
							
						,{
								xtype : 'label',
								text : '金额'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_amt',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'amt',decimalPrecision : 2}
							
						,{
								xtype : 'label',
								text : '费用合计'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_amtCost',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'amtCost',decimalPrecision : 2}
							
						,{
								xtype : 'label',
								text : '现付金额'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_amtXf',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'amtXf',decimalPrecision : 2}
							
						,{
								xtype : 'label',
								text : '挂帐金额'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_amtGz',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'amtGz',decimalPrecision : 2}
							
						,{
								xtype : 'label',
								text : '采购员'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_buyer',
											width : 80,
											value : 3,
											store : outstore
										})
							,{
								xtype : 'beantrigger',
								name : 'buyer',
								bean : 'SysUser',
								beanType : 'sys',
								emptyText : form_empty_text
							}
						,{
								xtype : 'label',
								text : '收货地址'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_revAddr',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'revAddr'}
							
						,{
								xtype : 'label',
								text : '开票标准'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_billFlag',
											width : 80,
											value : 3,
											store : numstore
										})
							,mvc.Tools.crtComboForm(true,{
											name : 'billFlag',
											store : Ext.create('mvc.combo.sys.SysOBillFlag')
										})
							
						,{
								xtype : 'label',
								text : '运输方式'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_shipingMode',
											width : 80,
											value : 3,
											store : numstore
										})
							,mvc.Tools.crtComboForm(true,{
											name : 'shipingMode',
											store : Ext.create('mvc.combo.sys.SysOShipingMode')
										})
							
						,{
								xtype : 'label',
								text : '发货信息'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_shiping',
											width : 80,
											value : 3,
											store : outstore
										})
							,
								mvc.Tools.crtComboTrigger(true,'sys_SysShiping','',{
											name : 'shiping'
										})
							
						,{
								xtype : 'label',
								text : '计划发货时间'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_timeShipPlan',
											width : 80,
											value : 7,
											store : datestore,
											listeners : {
												scope : this,
												change : function(field,newv,oldv,opts){
this.onBetween(newv,this.oldId + 'timeShipPlan',this.oldId + 'timeShipPlanEd',this.oldId + 'timeShipPlan_empty');this.doLayout();											}
											}
										})
							,{
									xtype : 'datefield',
									name : 'timeShipPlan',
									format : 'Y-m-d H:i:s',
									itemId : this.oldId + 'timeShipPlan'
								},{
									xtype : 'datefieldexp',
									name : 'timeShipPlanEd',
									format : 'Y-m-d',
									hidden : true,
									itemId : this.oldId + 'timeShipPlanEd'
								}
							
						,{
								xtype : 'label',
								text : '预计到货时间'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_timeArrPlan',
											width : 80,
											value : 7,
											store : datestore,
											listeners : {
												scope : this,
												change : function(field,newv,oldv,opts){
this.onBetween(newv,this.oldId + 'timeArrPlan',this.oldId + 'timeArrPlanEd',this.oldId + 'timeArrPlan_empty');this.doLayout();											}
											}
										})
							,{
									xtype : 'datefield',
									name : 'timeArrPlan',
									format : 'Y-m-d H:i:s',
									itemId : this.oldId + 'timeArrPlan'
								},{
									xtype : 'datefieldexp',
									name : 'timeArrPlanEd',
									format : 'Y-m-d',
									hidden : true,
									itemId : this.oldId + 'timeArrPlanEd'
								}
							
						,{
								xtype : 'label',
								text : '发货人名称'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_name',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'name'}
							
						,{
								xtype : 'label',
								text : '发货地址'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_addr',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'addr'}
							
						,{
								xtype : 'label',
								text : '发货人手机'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_mobile',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'mobile'}
							
						,{
								xtype : 'label',
								text : '发货人电话'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_tel',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'tel'}
							
						,{
								xtype : 'label',
								text : '状态'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_status',
											width : 80,
											value : 3,
											store : numstore
										})
							,mvc.Tools.crtComboForm(true,{
											name : 'status',
											store : Ext.create('mvc.combo.sys.SysOBillStatus')
										})
							
						,{
								xtype : 'label',
								text : '机构'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_org',
											width : 80,
											value : 3,
											store : outstore
										})
							,
								mvc.Tools.crtComboTrigger(true,'sys_SysOrg','',{
											name : 'org'
										})
							
						,{
								xtype : 'label',
								text : '部门'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_dept',
											width : 80,
											value : 3,
											store : outstore
										})
							,{
								xtype : 'beantrigger',
								name : 'dept',
								bean : 'SysDept',
								beanType : 'sys',
								emptyText : form_empty_text
							}
						,{
								xtype : 'label',
								text : '建档员'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_createdBy',
											width : 80,
											value : 3,
											store : outstore
										})
							,{
								xtype : 'beantrigger',
								name : 'createdBy',
								bean : 'SysUser',
								beanType : 'sys',
								emptyText : form_empty_text
							}
						,{
								xtype : 'label',
								text : '建档时间'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_createdTime',
											width : 80,
											value : 7,
											store : datestore,
											listeners : {
												scope : this,
												change : function(field,newv,oldv,opts){
this.onBetween(newv,this.oldId + 'createdTime',this.oldId + 'createdTimeEd',this.oldId + 'createdTime_empty');this.doLayout();											}
											}
										})
							,{
									xtype : 'datefield',
									name : 'createdTime',
									format : 'Y-m-d H:i:s',
									itemId : this.oldId + 'createdTime'
								},{
									xtype : 'datefieldexp',
									name : 'createdTimeEd',
									format : 'Y-m-d',
									hidden : true,
									itemId : this.oldId + 'createdTimeEd'
								}
							
						,{
								xtype : 'label',
								text : '审核员'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_apprBy',
											width : 80,
											value : 3,
											store : outstore
										})
							,{
								xtype : 'beantrigger',
								name : 'apprBy',
								bean : 'SysUser',
								beanType : 'sys',
								emptyText : form_empty_text
							}
						,{
								xtype : 'label',
								text : '审核时间'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_apprTime',
											width : 80,
											value : 7,
											store : datestore,
											listeners : {
												scope : this,
												change : function(field,newv,oldv,opts){
this.onBetween(newv,this.oldId + 'apprTime',this.oldId + 'apprTimeEd',this.oldId + 'apprTime_empty');this.doLayout();											}
											}
										})
							,{
									xtype : 'datefield',
									name : 'apprTime',
									format : 'Y-m-d H:i:s',
									itemId : this.oldId + 'apprTime'
								},{
									xtype : 'datefieldexp',
									name : 'apprTimeEd',
									format : 'Y-m-d',
									hidden : true,
									itemId : this.oldId + 'apprTimeEd'
								}
							
						,{
								xtype : 'label',
								text : '记账员'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_tallyBy',
											width : 80,
											value : 3,
											store : outstore
										})
							,{
								xtype : 'beantrigger',
								name : 'tallyBy',
								bean : 'SysUser',
								beanType : 'sys',
								emptyText : form_empty_text
							}
						,{
								xtype : 'label',
								text : '记账日期'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_tallyTime',
											width : 80,
											value : 7,
											store : datestore,
											listeners : {
												scope : this,
												change : function(field,newv,oldv,opts){
this.onBetween(newv,this.oldId + 'tallyTime',this.oldId + 'tallyTimeEd',this.oldId + 'tallyTime_empty');this.doLayout();											}
											}
										})
							,{
									xtype : 'datefield',
									name : 'tallyTime',
									format : 'Y-m-d',
									itemId : this.oldId + 'tallyTime'
								},{
									xtype : 'datefieldexp',
									name : 'tallyTimeEd',
									format : 'Y-m-d',
									hidden : true,
									itemId : this.oldId + 'tallyTimeEd'
								}
							
						,{
								xtype : 'label',
								text : '备注'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_rem',
											width : 80,
											value : 1,
											store : strstore
										})
							,{xtype : 'textfield',name : 'rem'}
							
						,{
							xtype : 'label',
							text : '',
							colspan : 3
						}]
				}]
		}]
};
	this.buttonAlign = 'right',
	this.buttons =[{
		text : '重置',
		scope : this,
		iconCls : 'win-refresh-icon',
		handler : this.onReset
	},{
		text : '关闭',
		scope : this,
		iconCls : 'win-close-icon',
		handler : this.onClose
	},{
		text : '搜索',
		scope : this,
		iconCls : 'win-ok-icon',
		handler : this.onSearchAdv
	}];
		this.callParent(arguments);
		this.addEvents('create');
		this.form = this.items.items[0];
},
setActiveRecord : function(record){
		this.form.activeRecord = record;
		if (record || this.form.activeRecord) {
			this.form.getForm().loadRecord(record);
			if(!this.checkPrice){
				this.lineTable.store.filter([{'id':'filter','property':'pkey','value':record.get('bean.pkey')}]);
			}else{
				this.lineTable.store.setProxy({
					type : 'ajax',
					url : base_path+'/pur_PurOrderDirectLine_listForPrice',
					reader : {
						type : 'json',
						root : 'items',
						totalProperty : 'total'
					},
					simpleSortMode : true
				});
				this.lineTable.store.load({
					params : {pkey:record.get('bean.pkey')},
					callback:function(){
						var amt=0;
						this.lineTable.store.each(function(line){
							//line.set('bean.price',10);
							amt = amt + Number(line.get('bean.amt'));
						});
						this.down('#amt').setValue(amt);
					},scope:this});
			}
		} else {
			this.form.getForm().reset();
			this.lineTable.store.removeAll();
		}
},
onBetween : function(newv,label,dateEd){
	if(newv == 11) {
		this.down('#'+label).hide();
		this.down('#'+label).setValue(null);
		this.down('#'+dateEd).show();
	} else {
		this.down('#'+label).show();
		this.down('#'+dateEd).hide();
		this.down('#'+dateEd).setValue(null);
	}
},
onReset : function(){
		this.setActiveRecord(this.form.activeRecord);
},
onClose : function(){
		this.close();
},
onSearchAdv : function(){
	var array = mvc.Tools.advancedSearchValues(this.down('form'));
	this.listCmp.onSearchDo(array);
	this.close();
}
});