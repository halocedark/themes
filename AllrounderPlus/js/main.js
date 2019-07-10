$( document ).ready(function() 
{

	'use strict';

	// All User Interface Functions Are Here
	function setupUI()
	{

		// Main Slider
		setupSlider();

	}

	function setupSlider()
	{
		var winH   = $(window).height();
		var callInfoWrapper = $('.callinfobar-wrapper').innerHeight();
		var headerWrapper = $('.header-wrapper').innerHeight();	
		$('.mainslider-wrapper #MainSlider, .carousel-inner, .carousel-item, .carousel-img').height( (winH - (callInfoWrapper + headerWrapper)) );
	}

	// Auto Call User Interface Functions
	var interval = setInterval(setupUI, 5000);
	
	// Call setupUI When DOM Ready
	setupUI();

});