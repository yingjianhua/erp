Ext.define('mvc.view.gs.GsPriceCtl.WinSearch',{
extend : 'Ext.window.Window',
oldId : 'GsPriceCtl_searchWin_',
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
			url : base_path+'/gs_GsPriceCtl_list',
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
								text : '对象'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_tbObj',
											width : 80
										})
							,{xtype : 'beantrigger',name : 'tbObj'}
							
						,{
								xtype : 'label',
								text : '定价名称'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_price',
											width : 80,
											value : 3,
											store : outstore
										})
							,
								mvc.Tools.crtComboTrigger(true,'gs_GsPrice','',{
											name : 'price'
										})
							
						,{
								xtype : 'label',
								text : '默认零售价格级别'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_retailLevel',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'retailLevel',allowDecimals : false}
							
						,{
								xtype : 'label',
								text : '默认最低零售价格级别'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_lowestLevel',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'lowestLevel',allowDecimals : false}
							
						,{
								xtype : 'label',
								text : '默认批发价格级别'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_tradeLevel',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'tradeLevel',allowDecimals : false}
							
						,{
								xtype : 'label',
								text : '默认调拨价格级别'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_mvLevel',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'mvLevel',allowDecimals : false}
							
						,{
								xtype : 'label',
								text : '对象类型'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_tbObjType',
											width : 80,
											value : 3,
											store : numstore
										})
							,{xtype : 'numberfield',name : 'tbObjType',allowDecimals : false}
							
						,{
								xtype : 'label',
								text : '机构'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_tbObjOrg',
											width : 80,
											value : 3,
											store : outstore
										})
							,
								mvc.Tools.crtComboTrigger(true,'sys_SysOrg','',{
											name : 'tbObjOrg'
										})
							
						,{
								xtype : 'label',
								text : '核算单元'
							},
								mvc.Tools.crtComboBase(false,{
											name : 'optcht_tbObjCell',
											width : 80,
											value : 3,
											store : outstore
										})
							,
								mvc.Tools.crtComboTrigger(true,'sys_SysCell','',{
											name : 'tbObjCell'
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
			var retailLevel = record.get('bean.retailLevel');
			var lowestLevel = record.get('bean.lowestLevel');
			var tradeLevel = record.get('bean.tradeLevel');
			var mvLevel = record.get('bean.mvLevel');
			this.form.down('[name=bean.retailLevel]').setValue(retailLevel.split(bean_split)[0]);
			this.form.down('[name=bean.lowestLevel]').setValue(lowestLevel.split(bean_split)[0]);
			this.form.down('[name=bean.tradeLevel]').setValue(tradeLevel.split(bean_split)[0]);
			this.form.down('[name=bean.mvLevel]').setValue(mvLevel.split(bean_split)[0]);
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