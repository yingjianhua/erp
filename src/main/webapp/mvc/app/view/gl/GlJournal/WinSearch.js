Ext.define('mvc.view.gl.GlJournal.WinSearch',{
extend : 'Ext.window.Window',
oldId : 'GlJournal_searchWin_',
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
			url : base_path+'/gl_GlJournal_list',
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
								text : '代码'
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
								text : '名称'
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
								text : '科目字典'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_subject',
											width : 80,
											value : 3,
											store : outstore
										})
							,{
								xtype : 'beantrigger',
								name : 'subject',
								bean : 'GlSubject',
								beanType : 'gl',
								emptyText : form_empty_text
							}
						,{
								xtype : 'label',
								text : '币种'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_currency',
											width : 80,
											value : 3,
											store : numstore
										})
							,mvc.Tools.crtComboForm(true,{
											name : 'currency',
											store : Ext.create('mvc.combo.sys.SysOCurrency')
										})
							
						,{
								xtype : 'label',
								text : '余额'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_balance',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'balance',decimalPrecision : 2}
							
						,{
								xtype : 'label',
								text : '可用余额'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_balanceUse',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'balanceUse',decimalPrecision : 2}
							
						,{
								xtype : 'label',
								text : '状态'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_state',
											width : 80,
											value : 3,
											store : numstore
										})
							,mvc.Tools.crtComboForm(true,{
											name : 'state',
											store : Ext.create('mvc.combo.gl.GlOJlState')
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
								text : '计息标志'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_interestAccrual',
											width : 80,
											value : 3,
											store : numstore
										})
							,mvc.Tools.crtComboForm(true,{
											name : 'interestAccrual',
											store : Ext.create('mvc.combo.gl.GlOInterestAccrual')
										})
							
						,{
								xtype : 'label',
								text : '冻结标志'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_frostFlag',
											width : 80,
											value : 3,
											store : numstore
										})
							,mvc.Tools.crtComboForm(true,{
											name : 'frostFlag',
											store : Ext.create('mvc.combo.gl.GlOFrostFlag')
										})
							
						,{
								xtype : 'label',
								text : '账户类型'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_accType',
											width : 80,
											value : 3,
											store : numstore
										})
							,mvc.Tools.crtComboForm(true,{
											name : 'accType',
											store : Ext.create('mvc.combo.gl.GlOAccType')
										})
							
						,{
								xtype : 'label',
								text : '对象'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_objPkey',
											width : 80
										})
							,{xtype : 'beantrigger',name : 'objPkey'}
							
						,{
								xtype : 'label',
								text : '表内标志'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_inFlag',
											width : 80,
											value : 3,
											store : numstore
										})
							,mvc.Tools.crtComboForm(true,{
											name : 'inFlag',
											store : Ext.create('mvc.combo.sys.SysOYn')
										})
							
						,{
								xtype : 'label',
								text : '借贷标志'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_direct',
											width : 80,
											value : 3,
											store : numstore
										})
							,mvc.Tools.crtComboForm(true,{
											name : 'direct',
											store : Ext.create('mvc.combo.gl.GlODirect')
										})
							
						,{
								xtype : 'label',
								text : '明细账金额类型'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_accJournalType',
											width : 80,
											value : 3,
											store : numstore
										})
							,mvc.Tools.crtComboForm(true,{
											name : 'accJournalType',
											store : Ext.create('mvc.combo.gl.GlOAccJournalType')
										})
							
						,{
								xtype : 'label',
								text : '记明细汇总标志'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_tallyFlag',
											width : 80,
											value : 3,
											store : numstore
										})
							,mvc.Tools.crtComboForm(true,{
											name : 'tallyFlag',
											store : Ext.create('mvc.combo.gl.GlOTallyFlag')
										})
							
						,{
								xtype : 'label',
								text : '扩展属性表'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_extTable',
											width : 80,
											value : 3,
											store : outstore
										})
							,
								mvc.Tools.crtComboTrigger(true,'sys_SysTable','',{
											name : 'extTable'
										})
							
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
			if(record.get('bean.accType')!='1') {
				var v = record.get('bean.objPkey');
				if(record.get('bean.accType')!='2') {
					args = v.split(bean_split);
					v = String((Number(args[0])/100000).toFixed(0))+bean_split+args[1];						
				}
				this.form.down('[itemId='+record.get('bean.accType')+']').setValue(v);	
			}
		} else {
			this.form.getForm().reset();
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