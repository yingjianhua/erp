Ext.define('mvc.view.gl.GlNote.FormNote',{
extend : 'Ext.form.Panel',
requires : ['Ext.ux.DataTip'],
layout : 'form',
border : false,
frame : false,
insFlag : true,
bodyPadding : '5 5 5 5',
url : base_path+'/gl_GlNoteView_iuByOther',
fieldDefaults : {
	labelWidth : 110,
	width : 275,
	labelStyle : 'font-weight : bold'
},
plugins : {
	ptype : 'datatip'
},
initComponent : function(){
			var formFlds = [];
			formFlds.push(
				{xtype : 'textfield',name : 'bean.code',fieldLabel : '单据号',readOnly : true},
				mvc.Tools.crtComboTrigger(true,'sys_SysOrg','',{
							name : 'bean.org',
							fieldLabel : '机构',
							readOnly : true
						}),
				mvc.Tools.crtComboTrigger(true,'sys_SysDept','',{
							name : 'bean.dept',
							fieldLabel : '部门',
							readOnly : true
						})
				,{
					xtype : 'hiddenfield',
					name : 'bean.pkey'
				});
	this.items = [{
		layout : {
			type : 'table',
			columns : 3,
			itemCls : 'x-layout-table-items-form'
		},
		border : false,
		items : formFlds
	}];
	this.callParent(arguments);
}
});