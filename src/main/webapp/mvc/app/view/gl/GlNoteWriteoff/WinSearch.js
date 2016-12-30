Ext.define('mvc.view.gl.GlNoteWriteoff.WinSearch',{
extend : 'Ext.window.Window',
oldId : 'GlNoteWriteoff_searchWin_',
width : 680,
layout : 'fit',
resizable : true,
iconCls : 'app-icon',
listStore : null,
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
			url : base_path+'/gl_GlNoteWriteoff_list',
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
								text : '编号'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_pkey',
											width : 80
										})
							,{xtype : 'numberfield',name : 'pkey'}
							
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
											store : Ext.create('mvc.combo.gl.GlNoteWriteoffOState')
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
								text : '起始日期'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_dateStart',
											width : 80,
											value : 11,
											store : datestore,
											listeners : {
												scope : this,
												change : function(field,newv,oldv,opts){
this.onBetween(newv,this.oldId + 'dateStart_label',this.oldId + 'dateStartEd',this.oldId + 'dateStart_empty');this.doLayout();											}
											}
										})
							,{
									xtype : 'datefield',
									name : 'dateStart',
									format : 'Y-m-d'
								},{
									xtype : 'label',
									text : '至',
									itemId : this.oldId + 'dateStart_label'
								},{
									xtype : 'datefield',
									name : 'dateStartEd',
									format : 'Y-m-d',
									colspan : 2,
									itemId : this.oldId + 'dateStartEd'
								},{
									xtype : 'label',
									text : '',
									colspan : 3,
									hidden : true,
									itemId : this.oldId + 'dateStart_empty'
								}
							
						,{
								xtype : 'label',
								text : '到期日期'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_dateDue',
											width : 80,
											value : 11,
											store : datestore,
											listeners : {
												scope : this,
												change : function(field,newv,oldv,opts){
this.onBetween(newv,this.oldId + 'dateDue_label',this.oldId + 'dateDueEd',this.oldId + 'dateDue_empty');this.doLayout();											}
											}
										})
							,{
									xtype : 'datefield',
									name : 'dateDue',
									format : 'Y-m-d'
								},{
									xtype : 'label',
									text : '至',
									itemId : this.oldId + 'dateDue_label'
								},{
									xtype : 'datefield',
									name : 'dateDueEd',
									format : 'Y-m-d',
									colspan : 2,
									itemId : this.oldId + 'dateDueEd'
								},{
									xtype : 'label',
									text : '',
									colspan : 3,
									hidden : true,
									itemId : this.oldId + 'dateDue_empty'
								}
							
						,{
								xtype : 'label',
								text : '记账日期'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_tallyDate',
											width : 80,
											value : 11,
											store : datestore,
											listeners : {
												scope : this,
												change : function(field,newv,oldv,opts){
this.onBetween(newv,this.oldId + 'tallyDate_label',this.oldId + 'tallyDateEd',this.oldId + 'tallyDate_empty');this.doLayout();											}
											}
										})
							,{
									xtype : 'datefield',
									name : 'tallyDate',
									format : 'Y-m-d'
								},{
									xtype : 'label',
									text : '至',
									itemId : this.oldId + 'tallyDate_label'
								},{
									xtype : 'datefield',
									name : 'tallyDateEd',
									format : 'Y-m-d',
									colspan : 2,
									itemId : this.oldId + 'tallyDateEd'
								},{
									xtype : 'label',
									text : '',
									colspan : 3,
									hidden : true,
									itemId : this.oldId + 'tallyDate_empty'
								}
							
						]
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
		handler : this.onSearch
	}];
		this.callParent(arguments);
		this.addEvents('create');
		this.form = this.items.items[0];
},
setActiveRecord : function(record){
		this.form.activeRecord = record;
		if (record || this.form.activeRecord) {
			this.form.getForm().loadRecord(record);
		} else {
			this.form.getForm().reset();
		}
},
onBetween : function(newv,label,dateEd,empty){
	if(newv == 11) {
		this.down('#'+label).show();
		this.down('#'+dateEd).show();
		this.down('#'+empty).hide();
	} else {
		this.down('#'+label).hide();
		this.down('#'+dateEd).hide();
		this.down('#'+empty).show();
	}
},
onReset : function(){
		this.setActiveRecord(this.form.activeRecord);
},
onClose : function(){
		this.close();
},
onSearch : function(){
	var array = mvc.Tools.advancedSearchValues(this.down('form'));
	if (array.length == 0){
		this.listStore.clearFilter();
		this.close();
		return;
	}
	this.listStore.clearFilter(true);
	this.listStore.filter(array);
	this.close();
}
});