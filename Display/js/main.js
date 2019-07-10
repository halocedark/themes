$( document ).ready(function() 
{

	'use strict';

	var VideoOverlay  = $('#VideoOverlay');
	var LayoutChanger = $('#OurworkWrapper #Layout');


	// Events
	VideoOverlay.on('click', playDemo);
	LayoutChanger.on('click', changeProjectsLayout);
	// All User Interface Functions Are Here
	function setupUI()
	{

		// Main Slider
		setupSlider();

	}

	function setupSlider()
	{		
		var winH   = $(window).height();
		var winW   = $(window).width();
		var headerWrapper = $('.header-wrapper').innerHeight();	
		if ( winW > 1000 )
			$('.mainslider-wrapper #MainSlider, .carousel-inner, .carousel-item').height( winH - headerWrapper );
	}

	// Video Demo
	function playDemo()
	{

		var VideoPlayerOverlay = $('#VideoPlayerOverlay');
		VideoPlayerOverlay.addClass('show-video');

		$('#VideoPlayerOverlay #CloseVideo').on('click', function() 
		{
			VideoPlayerOverlay.removeClass('show-video');
		});

	}

	// Portfolio Projects Layout
	function changeProjectsLayout(e)
	{

		var target 		 = $(e.target);
		var gridView   = 'col-sm';
		var noGridView = 'col-sm-12';
		var projects   = $('#OurworkWrapper .col-box');
		
		if ( !target.is('i'))
			return false;

		var targetID = target.parent().attr('id');
		target = $('#'+target.parent().attr('id'));
		if ( targetID === 'Grid' )
		{
			target.siblings().removeClass('active');
			target.addClass('active');
			projects.removeClass(noGridView);
			projects.addClass(gridView);
		}
		else if ( targetID === 'NoGrid' ) 
		{
			target.siblings().removeClass('active');
			target.addClass('active');
			projects.removeClass(gridView);
			projects.addClass(noGridView);
		}

	}

	// Auto Call User Interface Functions
	var interval = setInterval(setupUI, 5000);
	
	// Call Functions When DOM Ready
	setupUI();

});