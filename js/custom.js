(function($) {
    "use strict";
	
	/* ..............................................
	Loader 
    ................................................. */
	
	$(window).on('load', function() { 
		$('.preloader').fadeOut(); 
		$('#preloader').delay(550).fadeOut('slow'); 
		$('body').delay(450).css({'overflow':'visible'});
	});
    	
	/* ..............................................
    Navbar Bar
    ................................................. */
	
	$('.navbar-nav .nav-link').on('click', function() {
		var toggle = $('.navbar-toggler').is(':visible');
		if (toggle) {
			$('.navbar-collapse').collapse('hide');
		}
	});
	
	/* ..............................................
    Fixed Menu
    ................................................. */
    
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 50) {
			$('.top-header').addClass('fixed-menu');
		} else {
			$('.top-header').removeClass('fixed-menu');
		}
	});

	/* ..............................................
    Properties Filter
    ................................................. */
	var Container = $('.container');
	Container.imagesLoaded(function () {
		var portfolio = $('.properties-menu');
		portfolio.on('click', 'button', function () {
			$(this).addClass('active').siblings().removeClass('active');
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({
				filter: filterValue
			});
		});
		var $grid = $('.properties-list').isotope({
			itemSelector: '.properties-grid'
		});

	});

	/* ..............................................
    Gallery
    ................................................. */
	
	$(document).ready(function() {
		$('.popup-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
				}
			}
		});
	});
	
	/* ..............................................
    Scroll To Top
    ................................................. */
	
	$(document).ready(function () {

		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#scroll-to-top').fadeIn();
			} else {
				$('#scroll-to-top').fadeOut();
			}
		});

		$('#scroll-to-top').click(function () {
			$("html, body").animate({
				scrollTop: 0
			}, 600);
			return false;
		});

	});
	
	

	
}(jQuery));



/* ..............................................
    Api calls 
................................................. */

let html = document.getElementById('api-call')

let request = fetch('https://peaceful-fjord-88698.herokuapp.com/api/it-fields').then(Response => { return Response.json() }).then(users => { html.innerHTML =  users.data.map(x => `<h3>Job title</h3><h4 class="heading-job-title">${x.attributes.JobTitle}</h4><h3 class="heading-job-description-title">Job description</h3>${x.attributes.JobDescripsion.map(x=>`<li>${x}</li>`).join('')}`) })


let htmlAssistance = document.getElementById('api-call-assistance-care')

let requestAssistance = fetch('https://peaceful-fjord-88698.herokuapp.com/api/assistant-carers').then(Response => { return Response.json() }).then(users => { htmlAssistance.innerHTML = users.data.map(x => `<h3>Job title</h3><h4 class="heading-job-title">${x.attributes.JobTitle}</h4><h3 class="heading-job-description-title">Job description</h3>${x.attributes.JobDescripsion.map(x => `<li>${x}</li>`).join('')}`) })


let htmlNurse = document.getElementById('api-call-nurse-care')

let requestNurse = fetch('https://peaceful-fjord-88698.herokuapp.com/api/nurses').then(Response => { return Response.json() }).then(users => { htmlNurse.innerHTML =  users.data.map(x => `<h3>Job title</h3><h4 class="heading-job-title">${x.attributes.JobTitle}</h4><h3 class="heading-job-description-title">Job description</h3>${x.attributes.JobDescripsion.map(x=>`<li>${x}</li>`).join('')}`) })