if (OS_ANDROID) {
	Ti.include('/config.js');
	Alloy.Globals.current_page = 'win_home';
	var tabgroup = new Class_Tabgroup({
		tabgroup : {
			left : sc(0),
			right : sc(0),
			top : sc(0),
			bottom : sc(0),
			backgroundColor : 'transparent'
		},
		bar : {
			height : sc(111),
			left : sc(0),
			right : sc(0),
			bottom : sc(0),
			backgroundImage : '/Bottom_tab.png'
		},
	}, null, Alloy.Globals.current_page, 'navtop');

	tabgroup.closeOtherTabgroup = function() {
		Ti.App.fireEvent('removeTabGroupWindow', {
			tabgroup : 'navbottom',
		});
	};
	tabgroup.addTab({
		o : {
			name : 'win_home',
			title : 'Home',
			off : '/KS_nav_mashup.png',
			on : '/KS_nav_mashup.png',
		},
		active : "true",
		left : sc(0),
		top : sc(0),
		width : sc(96),
		height : sc(111),
		canScale : false,
		enableZoomControls : false,
		orientationModes : [Titanium.UI.PORTRAIT]
	});
	tabgroup.addTab({
		o : {
			name : 'win_gallery',
			title : 'Gallery',
			off : '/KS_nav_phone.png',
			on : '/KS_nav_phone.png',
		},
		active : "false",
		left : sc(95),
		top : sc(0),
		width : sc(96),
		height : sc(111),
		canScale : true,
		enableZoomControls : false,
		orientationModes : [Titanium.UI.PORTRAIT]
	});
	tabgroup.addTab({
		o : {
			name : 'win_fav',
			title : 'Favourite',
			off : '/KS_nav_platform.png',
			on : '/KS_nav_platform.png',
		},
		active : "false",
		left : sc(192),
		top : sc(0),
		width : sc(96),
		height : sc(111),
		canScale : true,
		enableZoomControls : false,
		orientationModes : [Titanium.UI.PORTRAIT]
	});
	tabgroup.addTab({
		o : {
			name : "win_more",
			title : "More",
			off : "/KS_nav_ui.png",
			on : "/KS_nav_ui.png",
			basic_type : Alloy.Globals.checkOS
		},
		active : false,
		left : sc(288),
		top : sc(0),
		width : sc(96),
		height : sc(111),
		canScale : true,
		enableZoomControls : false,
		orientationModes : [Titanium.UI.PORTRAIT]
	});
	tabgroup.create();
	$.container.add(tabgroup.tabgroup);
	$.container.addEventListener('close', function(e) {
		win = null;
	});
}