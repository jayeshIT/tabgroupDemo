if (OS_ANDROID) {
	Titanium.include('/config.js');
	Alloy.Globals.current_page = 'win_home';
	alert(Titanium.Platform.displayCaps.platformWidth);
	var tabgroup = new Class_Tabgroup({
		tabgroup : {
			left : 0,
			right : 0,
			top : 0,
			bottom : 0,
			backgroundColor : 'transparent'
		},
		bar : {
			height : 49,
			left : 0,
			right : 0,
			bottom : 0,
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
		left : 0,
		top : 0,
		width : 65,
		height : 49,
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
		left : 65,
		top : 0,
		width : 65,
		height : 49,
		canScale : true,
		enableZoomControls : false,
		orientationModes : [Titanium.UI.PORTRAIT]
	});
	tabgroup.addTab({
		o : {
			name : 'win_fav',
			title : 'Favourite',
			off : '/KS_nav_mashup.png',
			on : '/KS_nav_mashup.png',
		},
		active : "false",
		left : 130,
		top : 0,
		width : 65,
		height : 49,
		canScale : true,
		enableZoomControls : false,
		orientationModes : [Titanium.UI.PORTRAIT]
	});
	tabgroup.addTab({
		o : {
			name : 'win_setting',
			title : 'Setting',
			off : '/KS_nav_phone.png',
			on : '/KS_nav_phone.png',
		},
		active : false,
		left : 195,
		top : 0,
		width : 65,
		height : 49,
		canScale : true,
		enableZoomControls : false,
		orientationModes : [Titanium.UI.PORTRAIT]
	});
	tabgroup.addTab({
		o : {
			name : "win_more",
			title : "More",
			off : "/KS_nav_ui.png",
			on : "/KS_nav_ui.png"
		},
		active : "false",
		left : 260,
		top : 0,
		width : 60,
		height : 49,
		canScale : false,
		enableZoomControls : false,
		orientationModes : [Titanium.UI.PORTRAIT]
	});

	tabgroup.create();
	$.container.add(tabgroup.tabgroup);
	$.container.addEventListener('close', function(e) {
		win = null;
	});
}