(function(w,d,undefined){
	
	"use strict";
	
	var toggleElm = d.getElementById('ncstate-util-toggle-link'),
		toggleView = d.getElementById('ncstate-util-links'),
		classPattern = /\bis-hidden\b/g;

	// Define actions
	
	var handleToggleElement = function(){
		
		if(classPattern.exec(toggleView.className)){
			toggleView.className = toggleView.className.replace(classPattern,'');
			console.log('0');
		} else {
			toggleView.className = toggleView.className + ' is-hidden';
			console.log('1');
		}
		
		console.log('hi');
		
		return false;
			
	};
	
	// Bind actions

	toggleElm.addEventListener('click', handleToggleElement, false);
	
	
})(window,document);