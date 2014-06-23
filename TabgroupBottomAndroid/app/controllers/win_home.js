var btn = Titanium.UI.createButton({
	top : 10,
	left : 10,
	title : 'Open new'
});
btn.addEventListener('click', function(e) {
	var DetailWindow = Alloy.createController('win_details').getView();
	DetailWindow.o = $.win_home.o;
	Ti.App.fireEvent('addTabGroupWindow', {
		tabgroup : 'navtop',
		window : DetailWindow,
		name : 'win_details.js'
	});
});
$.win_home.add(btn);
