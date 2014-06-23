var currentActiveTab = null;
var isactive = "true";
var activetimeout = 500;
var time = 250;
var tabGroupWindows = {
	navtop : [],
	navbottom : []
};
Ti.App.addEventListener('addTabGroupWindow', function(e) {
	try {
		var windowobj = {
			window : e.window,
			name : e.name
		};
		if ( typeof e.data != 'undefined') {
			windowobj.data = e.data;
			e.window.data = e.data;
		} else {
			windowobj.data = false;
			e.window.data = false;
		}
		Ti.fireEvent("setlabeltitle", {
			title : e.title
		});
		e.window.open();
		e.window.show();
		tabGroupWindows[e.tabgroup].push(windowobj);
	} catch(ex) {
	}
});
Ti.App.addEventListener('removeTabGroupWindow', function(e) {
	var windows = tabGroupWindows[e.tabgroup];
	for (var win in windows) {
		windows[win].window.hide();
		windows[win].window.close();
	}
	tabGroupWindows[e.tabgroup] = [];
});
Titanium.App.addEventListener('closewindow', function(e) {
	if (tabGroupWindows[e.tabgroup].length > 1) {
		var index = tabGroupWindows[e.tabgroup].length - 1;
		var wintoclose = tabGroupWindows[e.tabgroup][index].window;

		if (wintoclose != null) {
			wintoclose.hide();
			wintoclose.close();
			tabGroupWindows[e.tabgroup].pop();
		}
	}
});
var that = null;
var flg = true;
var Class_Tabgroup = function(o, pages, initialTab, name) {
	that = this;
	this.tabgroup
	this.name = name;
	this.bar
	this.view
	this.tabs = [];
	this.tabInfo
	this.isSwitching = false;
	this.page
	currentActiveTab = initialTab;
	this.bar = Ti.UI.createView(o.bar);
	this.view
	this.tabgroup = Ti.UI.createView(o.tabgroup);
	this.addTab = function(tab) {
		tab.image = tab.o.off;
		var btTab = Ti.UI.createImageView(tab);
		btTab.addEventListener('touchstart', function(e) {
			if (isactive == "true") {
				isactive = "false";
				time = 0;
				if (currentActiveTab != e.source.o.name) {
					that.setActive(e.source.o.name, e.source.o.title);
				}
				currentActiveTab = e.source.o.name;
				clearTimeout(activetimeout);
				activetimeout = setTimeout(function() {
					isactive = "true";
				}, activetimeout);
			}
		});
		this.tabs.push(btTab);
	}, this.setActive = function(aTab) {
		this.tabInfo.prev = this.tabInfo.next;
		for (var tab in this.tabs) {
			if (this.tabs[tab].o.name == aTab) {
				this.tabInfo.next = tab;
			}
		}
		if (this.tabInfo.prev != null) {
			this.tabs[this.tabInfo.prev].image = this.tabs[this.tabInfo.prev].o.off;
			this.removeContent(this.tabs[this.tabInfo.prev].o.name);
		}
		if (this.tabInfo.next != null) {
			this.tabs[this.tabInfo.next].image = this.tabs[this.tabInfo.next].o.on;
			this.loadContent(this.tabs[this.tabInfo.next].o.name, this.tabs[this.tabInfo.next].o.title);
		}
	};
	this.removeContent = function(name) {
		Ti.App.fireEvent('removeTabGroupWindow', {
			tabgroup : this.name,
		});
		this.isSwitching = false;
	};
	this.loadContent = function(name, title) {
		setTimeout(function(e) {
			if (that.isSwitching == true) {
				return false;
			}
			that.isSwitching = true;
			var jsobj = Alloy.createController(name).getView();
			that.view = jsobj;
			Ti.App.currentpage_title = title;
			that.view.title = title;
			that.view.o = o;
			Ti.App.fireEvent('addTabGroupWindow', {
				tabgroup : that.name,
				window : that.view,
				name : name,
			});
			if ( typeof that.closeOtherTabgroup != 'undefined') {
				that.closeOtherTabgroup();
			}
			that.isSwitching = false;
		}, time);

	};
	this.create = function() {
		setTimeout(function(e) {
			for (var tab in that.tabs) {
				that.bar.add(that.tabs[tab]);
				if (that.tabs[tab].o.name == initialTab) {
					that.tabInfo = {
						prev : tab,
						next : null
					};
				}
			}
			that.setActive(initialTab);
			that.tabgroup.add(that.bar);
		}, time);

	};
	var setHome = function(evt) {
		isactive = "false";
		time = 0;
		that.setActive("Classified", "Classifieds");
		currentActiveTab = "Classified";
		clearTimeout(activetimeout);
		activetimeout = setTimeout(function() {
			isactive = "true";
		}, 100);
	};
	Ti.App.addEventListener('SetNewHome', setHome);
};
