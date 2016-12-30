Ext.define('mvc.view.gs.GsPriceGoodsKindCell.Form',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/gs_GsPriceGoodsKindCell_',
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
			formFlds.push
(
		mvc.Tools.crtComboTrigger(false,'sys_SysCell','',{
					name : 'bean.cell',
					fieldLabel : '核算单元'
				})
	,
		mvc.Tools.crtComboTrigger(false,'gs_GsPriceGoodsKind','',{
					name : 'bean.priceKind',
					fieldLabel : '基础价格分类'
				})
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