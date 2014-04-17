(function(w,d,undefined){
	
	"use strict";
	
	var toggleElm = d.getElementById('ncstate-brand-bar-toggle-link'),
		toggleView = d.getElementsByClassName('ncstate-brand-bar-links')[0],
		searchForm = d.getElementsByClassName('ncstate-brand-bar-search-form')[0],
		searchField = d.getElementsByClassName('ncstate-brand-bar-search-field')[0],
		classPattern = /\bis-hidden\b/g;

	// Define Event Handlers
	
	var handleToggleElement = function(e){
		
		e.preventDefault();
		
		if(classPattern.exec(toggleView.className)){
			toggleView.className = toggleView.className.replace(classPattern,'');
		} else {
			toggleView.className = toggleView.className + 'is-hidden';
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
	
	// Bind Event Handlers

	toggleElm.addEventListener('click', handleToggleElement, false);
	searchForm.addEventListener('submit', handleSearchSubmit, false);
	
	
})(window,document);