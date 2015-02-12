(function(w,d,undefined){
		
	var _ub = w._ub || {},
		barcss = d.createElement('link'),
		barjs = d.createElement('script'),
		scripts = d.getElementsByTagName('script')[0],
		bar = d.createElement('div');
	// add the styles for the brand bar
	
	_ub.color = _ub.color || 'gray';
	_ub.googleCustomSearchCode = _ub.googleCustomSearchCode;
	_ub.placeholder = _ub.placeholder ? decodeURI(_ub.placeholder) : 'search ncsu.edu';

	//Set up contains method on Array

	Array.prototype.contains = function ( needle ) {
		for (var i in this) {
			if (this[i] === needle) {return true;}
		}
		return false;
	};
		
	barcss.type = 'text/css';
	barcss.media = 'all';
	barcss.rel = 'stylesheet';
	barcss.href = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.ncsu.edu/brand-assets/utility-bar/css/' + (['red','black','gray'].contains(_ub.color) ? 'main-' + _ub.color : 'main') +  '.css';
	
	d.head.appendChild(barcss);
	
	// check for maxWidth
	
	if(_ub.maxWidth !== undefined){
	
		var headStyle = d.createElement('style');
		headStyle.type = 'text/css';
		
		if(!!(window.attachEvent && !window.opera)) {
			headStyle.styleSheet.cssText = '.ncstate-utility-bar .ncstate-utility-bar-wrapper{ width: 100% !important; max-width: ' + _ub.maxWidth + 'px !important; }';
		} else {
			var styleText = document.createTextNode('.ncstate-utility-bar .ncstate-utility-bar-wrapper{ width: 100% !important; max-width: ' + _ub.maxWidth + 'px !important; }');
			headStyle.appendChild(styleText);
		}
		
		d.head.appendChild(headStyle);
		
	}
	
	// add the mark up for the brand bar
	
	bar.className = 'ncstate-utility-bar';
	
	w.addEventListener('load', function(){
		
		var markupStr = '<div class="ncstate-utility-bar-tools"><div class="ncstate-utility-bar-wrapper ncstate-utility-bar-wrapper-primary" id="ncstate-utility-bar-wrapper-primary"><div class="ncstate-utility-bar-home"><a href="http://www.ncsu.edu">NC State Home</a></div><div class="ncstate-utility-bar-options"><div class="ncstate-utility-bar-toggle"><a id="ncstate-utility-bar-toggle-link" aria-label="Toggle resources" href="#">Resources</a></div><div class="ncstate-utility-bar-search" role="search" aria-label="' + _ub.placeholder + '"><form action="https://www.ncsu.edu/search" name="navsearchform" class="ncstate-utility-bar-search-form"><input id="navcx" name="cx" type="hidden" value="' + _ub.googleCustomSearchCode + '"><input class="ncstate-utility-bar-search-field" id="search-input" name="q" type="search"placeholder="' + _ub.placeholder + '" aria-label="' + _ub.placeholder + '"><input type="submit" id="search-submit" name="search-submit" value="search"class="ncstate-utility-bar-search-submit"></form></div></div></div></div><div class="ncstate-utility-bar-links is-hidden"><div class="ncstate-utility-bar-wrapper"><ul class="ncstate-utility-bar-primary-util"><li class="ncstate-utility-bar-primary-util ncstate-utility-bar-directory"><a href="http://www.ncsu.edu/directory/" id="ncstate-utility-bar-first-link">Campus Directory</a></li><li class="ncstate-utility-bar-primary-util ncstate-utility-bar-mypack"><a href="http://mypack.ncsu.edu/">MyPack Portal</a></li><li class="ncstate-utility-bar-primary-util ncstate-utility-bar-map"><a href="http://maps.ncsu.edu/">Campus Map</a></li><li class="ncstate-utility-bar-primary-util ncstate-utility-bar-libraries"><a href="http://www.lib.ncsu.edu/">Libraries</a></li></ul><div class="ncstate-utility-bar-sec-util"><dl><dt>Campus Resources</dt><dd><ul><li><a href="http://housing.ncsu.edu/">University Housing</a></li><li><a href="http://www.ncsudining.com/">University Dining</a></li><li><a href="http://shop.bookstore.ncsu.edu/">Bookstores</a></li><li><a href="http://ncsu.transloc.com/">Wolfline Buses</a></li><li><a href="http://www.ncsu.edu/calendars">Calendar</a></li></ul></dd></dl><dl><dt>Academic Resources</dt><dd><ul><li><a href="http://admissions.ncsu.edu/">Undergraduate Admissions</a></li><li><a href="http://www.ncsu.edu/academics/departments-a-z/">Academic Departments</a></li><li><a href="https://wolfware.ncsu.edu/">WolfWare</a></li><li><a href="http://oia.ncsu.edu/">International Affairs</a></li><li><a href="http://distance.ncsu.edu/">Distance Education</a></li></ul></dd></dl><dl><dt>Other Resources</dt><dd><ul><li><a href="http://www.fis.ncsu.edu/cashier/">Cashier\'s Office</a></li><li><a href="http://www.ncsu.edu/registrar/">Registration and Records</a></li><li><a href="http://financialaid.ncsu.edu/">Scholarships and Financial Aid</a></li><li><a href="http://oe.ncsu.edu/">Outreach and Engagement</a></li><li><a href="http://help.ncsu.edu/">NC State Help Desk</a></li></ul></dd></dl><dl><dt>&nbsp;</dt><dd><ul><li><a href="http://giving.ncsu.edu/">Giving</a></li><li><a href="http://news.ncsu.edu/">NC State News</a></li><li><a href="http://www.ncsu.edu/grad/">Graduate School</a></li><li><a href="http://gmail.ncsu.edu/">Gmail Access</a></li></ul></dd></dl></div></div></div>';
		bar.innerHTML = markupStr;
		bar.setAttribute('role','navigation');
		bar.setAttribute('aria-label','NC State Brand Utility Bar');
		
		var parentOfBar = d.getElementsByTagName('body')[0];
		if(d.getElementById('ncstate-utility-bar')){
			parentOfBar = d.getElementById('ncstate-utility-bar');
			d.getElementsByTagName('body')[0].replaceChild(bar, parentOfBar);
		} else {
			parentOfBar.insertBefore(bar, parentOfBar.firstChild);
		}
		
		barjs.type = 'text/javascript';
		barjs.async = true;
		barjs.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.ncsu.edu/brand-assets/utility-bar/js/main.js';
		scripts.parentNode.insertBefore(barjs, scripts);
		
	}, false);

})(window,document);