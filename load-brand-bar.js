(function(w,d,undefined){
		
	var _bb = w._bb || {},
		barcss = d.createElement('link'),
		barjs = d.createElement('script'),
		scripts = d.getElementsByTagName('script')[0],
		bar = d.createElement('div');
	// add the styles for the brand bar
	
	_bb.color = _bb.color || 'red';
	//_bb.searchDomain = _bb.searchDomain || '';
	_bb.googleCustomSearchCode = _bb.googleCustomSearchCode || '005788656502990663686:7aklxhhhqw0';
		
	barcss.type = 'text/css';
	barcss.media = 'all';
	barcss.rel = 'stylesheet';
	barcss.href = 'https://cdn.ncsu.edu/brand-assets/utility-bar/css/' + (['red','black','gray'].indexOf(_bb.color) ? 'main-' + _bb.color : 'main') +  '.css';
	
	d.head.appendChild(barcss);
	
	// check for maxWidth
	
	if(_bb.maxWidth !== undefined){
	
		var headStyle = d.createElement('style');
		headStyle.type = 'text/css';
		
		if(!!(window.attachEvent && !window.opera)) {
			headStyle.styleSheet.cssText = '.ncstate-brand-bar .ncstate-brand-bar-wrapper{ max-width: ' + _bb.maxWidth + 'px !important; }';
		} else {
			var styleText = document.createTextNode('.ncstate-brand-bar .ncstate-brand-bar-wrapper{ max-width: ' + _bb.maxWidth + 'px !important; }');
			headStyle.appendChild(styleText);
		}
		
		d.head.appendChild(headStyle);
		
	}
	
	// add the mark up for the brand bar
	
	bar.className = 'ncstate-brand-bar';
	
	w.addEventListener('load', function(){
		
		var markupStr = '<div class="ncstate-brand-bar-wrapper ncstate-brand-bar-wrapper-primary" id="ncstate-brand-bar-wrapper-primary"><div class="ncstate-brand-bar-home"><a href="http://www.ncsu.edu">NC State Home</a></div><div class="ncstate-brand-bar-options"><div class="ncstate-brand-bar-toggle"><a id="ncstate-brand-bar-toggle-link" href="#">Show/Hide Quicklinks</a></div><div class="ncstate-brand-bar-search" role="search" aria-label="Search www.ncsu.edu"><form action="http://ncsu.thompsonnetnc.org/search" name="navsearchform" class="ncstate-brand-bar-search-form"><input id="navcx" name="cx" type="hidden" value="' + _bb.googleCustomSearchCode + '"><input id="navcof" name="cof" type="hidden" value="FORID:11"><input class="ncstate-brand-bar-search-field" id="search-input" name="q" type="search"placeholder="search ncsu.edu" aria-label="search ncsu.edu"><input type="submit" id="search-submit" name="search-submit" value="search"class="ncstate-brand-bar-search-submit"></form></div></div></div><div class="ncstate-brand-bar-links is-hidden"><div class="ncstate-brand-bar-wrapper"><ul class="ncstate-brand-bar-primary-util"><li class="ncstate-brand-bar-primary-util ncstate-brand-bar-directory"><a href="http://www.ncsu.edu/directory/">Campus Directory</a></li><li class="ncstate-brand-bar-primary-util ncstate-brand-bar-mypack"><a href="http://mypack.ncsu.edu/">MyPack Portal</a></li><li class="ncstate-brand-bar-primary-util ncstate-brand-bar-map"><a href="http://www.ncsu.edu/campus_map/">Campus Map</a></li><li class="ncstate-brand-bar-primary-util ncstate-brand-bar-calendar"><a href="http://www.ncsu.edu/calendar/">Calendar</a></li></ul><dl><dt>Campus Resources</dt><dd><ul><li><a href="http://housing.ncsu.edu/">University Housing</a></li><li><a href="http://www.ncsudining.com/">Univeristy Dining</a></li><li><a href="http://shop.bookstore.ncsu.edu/">Bookstores</a></li><li><a href="http://ncsu.transloc.com/">Wolfline Buses</a></li><li><a href="http://www.lib.ncsu.edu/">Libraries</a></li></ul></dd></dl><dl><dt>Academic Resources</dt><dd><ul><li><a href="http://admissions.ncsu.edu/">Admissions</a></li><li><a href="http://www.ncsu.edu/academics/departments-a-z/">Academic Departments</a></li><li><a href="https://wolfware.ncsu.edu/">Wolfware</a></li><li><a href="http://oia.ncsu.edu/">International Affairs</a></li><li><a href="http://distance.ncsu.edu/">Distance Education</a></li></ul></dd></dl><dl><dt>Other Resources</dt><dd><ul><li><a href="http://www.fis.ncsu.edu/cashier/">Cashier\'s Office</a></li><li><a href="http://www.ncsu.edu/registrar/">Registration and Records</a></li><li><a href="http://www7.acs.ncsu.edu/financial_aid/">Financial Aid &amp;Scholarships</a></li><li><a href="http://www.ncsu.edu/outreach/">Outreach and Engagement</a></li><li><a href="http://help.ncsu.edu/">IT Help Desk</a></li></ul></dd></dl><dl><dt>&nbsp;</dt><dd><ul><li><a href="http://giving.ncsu.edu/">Giving</a></li><li><a href="http://news.ncsu.edu/">NC State News</a></li><li><a href="http://www.ncsu.edu/grad/">Graduate School</a></li><li><a href="http://gmail.ncsu.edu/">Gmail Access</a></li><li><a href="http://twitter.ncsu.edu/about.php">Social Media</a></li></ul></dd></dl></div></div>';
		bar.innerHTML = markupStr;
		bar.setAttribute('role','navigation');
		
		var inputDomain = d.createElement('input');
		inputDomain.type = 'hidden';
		inputDomain.name = '_bb_searchDomain';
		inputDomain.value = _bb.searchDomain;
		
		bar.getElementsByTagName('form')[0].appendChild(inputDomain);
		
		d.getElementsByTagName('body')[0].appendChild(bar);
		
		barjs.type = 'text/javascript';
		barjs.async = true;
		barjs.src = ('https:' === d.location.protocol ? 'http://ssl' : 'http://www') + '.webcommdev.com/utility/js/main.js';
		scripts.parentNode.insertBefore(barjs, scripts);
		
	}, false);

})(window,document);