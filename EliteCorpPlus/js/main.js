$( document ).ready(function() 
{

	
	var winH = $(window).height();
	var upperbarH = $('.upperbar-wrapper').innerHeight();
	var navbarH   = $('.navbar-wrapper').innerHeight();

	// Top Slider
	$('.slider-wrapper, .main-slider, .carousel-item, .carousel-img').height( (winH - (upperbarH + navbarH)) );

	// Featured Work
	$('.featured-work-wrapper ul li').on('click', shuffleFeaturedWorkImages);

	function shuffleFeaturedWorkImages()
	{

		var selected = $($(this).data('class'));
		var col = $('.shuffle-images-container .col-md');

		$(this).addClass('active').siblings().removeClass('active');

		if ( $(this).data('class') === '.All' ) 
			col.css('opacity', 1);
		else
		{
			col.css('opacity', '0.07');	
			selected.parent().css('opacity', 1);
		}

	}





});