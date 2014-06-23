// CUSTOM FRAMEWORK ENHANCEMENTS
Alloy.Globals.pWidth = Titanium.Platform.displayCaps.platformWidth;
Alloy.Globals.pHeight = Titanium.Platform.displayCaps.platformHeight;

function setOption(property, dVal) {
	return ( typeof property != 'undefined' ? property : dVal);
}

function sc(px, orientation, element) {
	var cDivide = Alloy.Globals.sBase['width'] / Alloy.Globals.pWidth;
	var cHeight = Alloy.Globals.sBase['height'] / Alloy.Globals.pHeight;
	if (OS_ANDROID) {
		return px / cDivide;
	} else if (OS_IOS) {
		var size;
		if ( typeof orientation != 'undefined') {
			if (orientation == 'w') {
				size = px / cDivide;
			} else if (orientation == 'h') {
				size = px / cHeight;
			} else {
				size = px / cDivide;
			}
		} else {
			size = px / cDivide;
		}
		if ( typeof element != 'undefined') {
		}
		return size.toFixed();
	}
}