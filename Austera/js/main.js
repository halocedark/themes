$( document ).ready(function() 
{

	'use strict';

	// Info Overlay

	function openInfoOverlay()
	{

		$('.info-overlay-wrapper').fadeIn(200);

		var CloseInfoOverlay = $('.info-overlay-wrapper .info #close');
		CloseInfoOverlay.on('click', function(e) 
		{
			e.preventDefault();
			$(this).parent().parent().fadeOut(40);
		});

	}

	/*Start Navbar*/

	var navitem = $('.top-wrapper .navbar .navbar-nav .nav-item');
	navitem.on('click', navItemClicked);

	function navItemClicked()
	{

		var navlink = '.nav-link';
		$(this).find(navlink).parent().siblings().find(navlink).removeClass('active');
		$(this).find(navlink).addClass('active');
		//console.log($(this).find('.nav-link').parent().find(navlink))

	}

	// Search Form
	var SearchBtn = $('.top-wrapper .search-form-wrapper #SearchBtn');
	SearchBtn.on('click', openSearchBox);

	function openSearchBox(e)
	{

		e.preventDefault();
		var searchInput = $(this).parent().find('#SearchForm input[type="search"]'); 
		searchInput.css('opacity', 1).animate({ width: '100%' }, 200);

	}

	/*End Navbar*/

	// Call Functions
	openInfoOverlay();

	

});