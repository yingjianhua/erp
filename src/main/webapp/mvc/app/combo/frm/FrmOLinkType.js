Ext.define('mvc.combo.frm.FrmOLinkType',{
extend : 'Ext.data.Store',
fields : ['value','text'],
data : [{value : 1,text : '源--目的'}
	,{value : 2,text : '主--明细'}
	,{value : 3,text : '关联'}
	]
});