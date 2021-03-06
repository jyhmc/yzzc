Ext.onReady(function() {
	Ext.BLANK_IMAGE_URL = 'images/default/s.gif';
	Ext.override(Ext.tip.Tip, {
		minWidth : 0
	})
	Manager = Ext.create('Manager');/* 主控制器 */
	Helper = 'Homepage.controller.HomepageController';// 帮助类名，全局变量
	var paths = {
		'Ext' : '../ext',
		'yzzc' : __ctxPath + '/views/app'
	}
	var cpath = __ctxPath.split('/');
	var cpathfrnt = cpath[cpath.length - 1];
	var ManagerConfig = Ext.create('ManagerConfig');/* 主控制器 */
	for ( var ctl in ManagerConfig) {
		var path = ManagerConfig[ctl].path;
		if (ManagerConfig[ctl].controller && ManagerConfig[ctl].path) {
			var nm = "paths." + ManagerConfig[ctl].pathname + '="/' + cpathfrnt
					+ '/views/yzzcapp' + path.substring(1) + '"';
			eval(nm);
		}
	}
	
	//判断session是否过期
	Ext.Ajax.on('requestexception', function(conn, response, options) {
		if (response.status =='500' ) {
			Ext.Msg.alert('提示', '会话失效，请重新登录!', function() {
				window.location.href = __ctxPath + '/login.jsp';
			});
		}
	});
	
	var controllers = [ 'MainCtrl' ];
	Ext.application({
		name : 'yzzc',
		paths : paths,
		launch : function() {
			Application = this;
		},
		controllers : controllers,
		autoCreateViewport : true
	});
});
