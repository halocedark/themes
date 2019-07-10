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
		var headerWrapper = $('.header-wrapper').innerHeight();	
		$('.mainslider-wrapper #MainSlider, .carousel-inner, .carousel-item, .carousel-img').height( winH - headerWrapper );
	}

	// Auto Call User Interface Functions
	
	// Call setupUI When DOM Ready
	setupUI();

});