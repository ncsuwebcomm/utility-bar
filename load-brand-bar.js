(function(w,d,undefined){
		
	var _bb = w._bb || {},
		barcss = d.createElement('link'),
		barjs = d.createElement('script'),
		scripts = d.getElementsByTagName('script')[0],
		bar = d.createElement('div');
	// add the styles for the brand bar
	
	_bb.color = _bb.color || 'red';
	_bb.searchDomain = _bb.searchDomain || '';
		
	barcss.type = 'text/css';
	barcss.media = 'all';
	barcss.rel = 'stylesheet';
	barcss.href = ('https:' === d.location.protocol ? 'http://ssl' : 'http://www') + '.webcommdev.com/utility/css/' + (['red','black','gray'].indexOf(_bb.color) ? 'main-' + _bb.color : 'main') +  '.css';
	
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
		
		var markupStr = '<div class="ncstate-brand-bar-wrapper ncstate-brand-bar-wrapper-primary" id="ncstate-brand-bar-wrapper-primary"><div class="ncstate-brand-bar-home"><a href="http://www.ncsu.edu">ncsu.edu</a></div><div class="ncstate-brand-bar-options"><div class="ncstate-brand-bar-toggle"><a id="ncstate-brand-bar-toggle-link" href="#">Show/Hide Quicklinks</a></div><div class="ncstate-brand-bar-search" role="search" aria-label="Search www.ncsu.edu"><form action="http://search.ncsu.edu/" name="navsearchform" class="ncstate-brand-bar-search-form" /> <input id="navcx" name="cx" type="hidden" value="015938034614832269431:v_-81jqd7vq" /> <input id="navcof" name="cof" type="hidden" value="FORID:11" /> <input class="ncstate-brand-bar-search-field" id="search-input" name="q" type="search" placeholder="search ncsu.edu" aria-label="search ncsu.edu" /> <input type="submit" id="search-submit" name="search-submit" value="search" class="ncstate-brand-bar-search-submit" /></form></div></div><!-- end options --></div><!-- end util wrapper --><div class="ncstate-brand-bar-links is-hidden"><div class="ncstate-brand-bar-wrapper"><dl><dt>Campus Resources:</dt><dd><ul><li><a href="#">Campus Recreation</a></li><li><a href="#">University Housing</a></li><li><a href="#">NC State Bookstores</a></li><li><a href="#">Campus Police</a></li><li><a href="#">University Dining</a></li><li><a href="#">Health Services</a></li><li><a href="#">Calendar</a></li><li><a href="#">Campus Map</a></li><li><a href="#">Directory</a></li><li><a href="#">Libraries</a></li></ul></dd></dl><dl><dt>Academic Resources:</dt><dd><ul><li><a href="#">Distance Education</a></li><li><a href="#">International Affairs</a></li><li><a href="#">Undergraduate Admissions</a></li><li><a href="#">Moodle</a></li><li><a href="#">Wolfware</a></li><li><a href="#">Academic Departments</a></li><li><a href="#">Student Organizations</a></li><li><a href="#">Accredidation</a></li></ul></dd></dl><dl><dt>Other Resources:</dt><dd><ul><li><a href="#">Cashier\'s Office</a></li><li><a href="#">Centennial Campus</a></li><li><a href="#">Financial Aid &amp; Scholarships</a></li><li><a href="#">OIT</a></li><li><a href="#">Registration &amp; Records</a></li><li><a href="#">Gmail</a></li><li><a href="#">E-PACK</a></li><li><a href="#">MyPack Portal</a></li><li><a href="#">Directory</a></li><li><a href="#">Giving</a></li><li><a href="#">Outreach/Extension</a></li></ul></dd></dl><dl><dt>Colleges:</dt><dd><ul><li><a href="#">Agriculture and Life Sciences</a></li><li><a href="#">Design</a></li><li><a href="#">Education</a></li><li><a href="#">Engineering</a></li><li><a href="#">Humanities and Social Sciences</a></li><li><a href="#">Poole Management</a></li><li><a href="#">Natural Resouces</a></li><li><a href="#">Sciences</a></li><li><a href="#">Textiles</a></li><li><a href="#">Veterinary Medicine</a></li><li><a href="#">First Year College</a></li><li><a href="#">Graduate School</a></li></ul></dd></dl></div></div>';
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