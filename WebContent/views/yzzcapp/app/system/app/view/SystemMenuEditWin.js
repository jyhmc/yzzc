Ext.define('System.view.SystemMenuEditWin', {
	extend : 'yzzc.core.CEWindow',
	alias : 'widget.SystemMenuEditWin',
	title : '权限修改',
	width : 620,
	height : 400,
	autoSubmit : true,
	url : __ctxPath + "/sys/menuEdit",
	form : [ {
		fieldLabel : MustVal("父节点", true),
		name : "pid",
		itemId : "MenuEditPname",
		allowBlank : false,
		hidden : true,
		readOnly : true
	}, {
		fieldLabel : MustVal("id", true),
		name : "id",
		hidden : true,
		allowBlank : false,
		readOnly : true
	}, {
		fieldLabel : MustVal("名称", true),
		name : "text",
		allowBlank : false
	}, {
		fieldLabel : MustVal("类型", true),
		name : "type",
		xtype : "combo",
		mode : "local",
		editable : false,
		allowBlank : false,
		triggerAction : "all",
		store : [ [ "0", "菜單" ], [ "1", "按鈕" ] ],
		blankText : "不能为空",
		allowBlank : false
	}, {
		fieldLabel : MustVal("地址", false),
		name : "url",
		maxLengthText : "输入超过最大长度",
		maxLength : 50
	}, {
		fieldLabel : MustVal("排序", false),
		name : "orders",
		maxLengthText : "输入超过最大长度",
		maxLength : 20
	}, {
		xtype : 'textarea',
		fieldLabel : MustVal("备注", false),
		name : "remark",
		maxLengthText : "输入超过最大长度",
		maxLength : 100
	} ]
})