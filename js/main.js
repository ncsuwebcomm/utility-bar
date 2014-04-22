(function(w,d,undefined){
	
	"use strict";
	
	var toggleElm = d.getElementById('ncstate-brand-bar-toggle-link'),
		toggleView = d.getElementsByClassName('ncstate-brand-bar-links')[0],
		searchForm = d.getElementsByClassName('ncstate-brand-bar-search-form')[0],
		searchField = d.getElementsByClassName('ncstate-brand-bar-search-field')[0],
		classPattern = /\bis-hidden\b/g,
		toggleState = 'hidden';

	// Define Event Handlers
	
	var handleToggleElement = function(e){
		
		e.preventDefault();
		
		if(classPattern.exec(toggleView.className)){
			toggleView.style.display = "block";
			setTimeout(function(){toggleView.className = toggleView.className.replace(classPattern,'');}, 10);
			toggleState = 'visible';
		} else {
			toggleView.className = toggleView.className + 'is-hidden';
			toggleState = 'hidden';
		}
			
	};
	
	var handleSearchSubmit = function(e){
		
		var style = w.getComputedStyle(searchField),
			display = style.getPropertyValue('display');
		
		if(display === "none"){
			e.preventDefault();
			searchField.style.display = 'block';
		}

	};

	var handleTransitionEnd = function(e){
		
		if(toggleState === 'hidden'){
			toggleView.style.display = "none";
		}

	};
	
	// Bind Event Handlers

	toggleElm.addEventListener('click', handleToggleElement, false);
	searchForm.addEventListener('submit', handleSearchSubmit, false);
	toggleView.addEventListener('transitionend', handleTransitionEnd, false);
	
	
})(window,document);