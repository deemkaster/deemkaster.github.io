AOS.init({
	duration: 800,
	easing: 'slide',
	once: false
});

jQuery(document).ready(function($) {

	"use strict";
	if (!window.location.href.includes('projects')) {
	   setTimeout(function(){
		ShowWindow('WinTimer')
	   },5000);
	}
	
	//menu activations
	/*$(".site-menu a").click(function() {
		$(".site-menu a").removeClass("active");
		$(this).addClass("active")
	})

	$('.site-menu a[href^="#"]').on('click', function (e) {
		e.preventDefault();	
		$('.topmenu a').each(function () {
			$(this).removeClass('active');
		})
		$(this).addClass('active');
	});	*/

//smoothscroll
$(document).on("scroll", onScroll);
function onScroll(event){
    var scrollPos = $(document).scrollTop();
	//console.log('> ' + scrollPos)
    $('.site-menu a').each(function () {
        var currLink = $(this).attr('href');
		currLink = currLink.substring(1)
		//console.log(currLink)
        var refElement = $(currLink);
		if (refElement.length) {
			if (
			(refElement.position().top <= scrollPos+20) && 
			(refElement.position().top + refElement.height() > scrollPos +20)
			)
			{
			   // $('#menu-center ul li a').removeClass("active");
				//console.log(refElement.position().top)
				//console.log(refElement.position().top + refElement.height())
				$(this).addClass("active");
			}
			else{
				$(this).removeClass("active");
			}
		}
    });
}
	//scrollTop button 
	jQuery('.scrollTop').hide();
	jQuery(function () {
		jQuery(document).scroll(function () {
			
			if (jQuery(document).scrollTop() > 300) {
				jQuery('.scrollTop').fadeIn();
			} else {
				jQuery('.scrollTop').fadeOut();
			}

		});
	});
	jQuery(".scrollTop").on('click', function() {
		//alert('up')
		event.preventDefault();
		//console.log(jQuery("html").scrollTop())
		//jQuery("html, body").animate({ 'scrollTop': 0 }, 2000);
		//console.log(jQuery("html").scrollTop())
		var hash = this.hash
		//console.log(hash)
		window.location.hash = hash;
		//return false;
	});
	//scrollBot button 
	jQuery('.scrollBot').hide();
	jQuery(function () {
		jQuery(document).scroll(function () {
			var v = jQuery(document).height() - 800;
			//console.log(jQuery(this).scrollTop())
			//console.log(v)
			if ( (jQuery(this).scrollTop() > 300) && (jQuery(this).scrollTop() <= v ) ) {
				jQuery('.scrollBot').fadeIn();
			}else {
				jQuery('.scrollBot').fadeOut();
			}

		});
	});
	jQuery(".scrollBot").click(function() {
		event.preventDefault();
		var hash = this.hash
		//console.log(hash)
		window.location.hash = hash
		//jQuery("html, body").animate({ scrollTop: $(document).height() }, "slow");
		//return false;
	});
	
/*
	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});

		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();
*/

	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();


	

	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
			stagePadding: 0,
		    margin: 20,
		    smartSpeed: 1500,
		    autoplay: true,
		    nav: true,
		    dots: true,
		    responsive:{
	        600:{
	        	margin: 20,
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	margin: 20,
	        	stagePadding: 0,
	        	nav: true,
	          items: 3
	        }
		    }
			});
			$('.custom-next').click(function(e) {
				e.preventDefault();
				$('.nonloop-block-13').trigger('next.owl.carousel');
			})
			$('.custom-prev').click(function(e) {
				e.preventDefault();
				$('.nonloop-block-13').trigger('prev.owl.carousel');
			})

			
		}

		$('.slide-one-item').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    smartSpeed: 1500,
	    autoplay: true,
	    pauseOnHover: false,
	    dots: true,
	    nav: true,
	    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
	  });

	  if ( $('.owl-all').length > 0 ) {
			$('.owl-all').owlCarousel({
		    center: false,
		    items: 1,
		    loop: false,
				stagePadding: 0,
		    margin: 0,
		    autoplay: false,
		    nav: false,
		    dots: true,
		    touchDrag: true,
  			mouseDrag: true,
  			smartSpeed: 5000,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        768:{
	        	margin: 30,
	        	nav: false,
	        	responsiveRefreshRate: 10,
	          items: 1
	        },
	        992:{
	        	margin: 30,
	        	stagePadding: 0,
	        	nav: false,
	        	responsiveRefreshRate: 10,
	        	touchDrag: false,
  					mouseDrag: false,
	          items: 3
	        },
	        1200:{
	        	margin: 30,
	        	stagePadding: 0,
	        	nav: false,
	        	responsiveRefreshRate: 10,
	        	touchDrag: false,
  					mouseDrag: false,
	          items: 3
	        }
		    }
			});
		}
		
	};
	siteCarousel();

	

	var siteCountDown = function() {

		$('#date-countdown').countdown('2025/10/10', function(event) {
		  var $this = $(this).html(event.strftime(''
		    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
		    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
		    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
		    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
		    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});
				
	};
	// siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	//siteSticky();

// navigation
var OnePageNavigation = function() {
	var navToggler = $('.site-menu-toggle');

	$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a[href^='#']", function(e) {
		e.preventDefault();
		var hash = this.hash;
		alert(hash)
		window.location.hash = hash;
		console.log(hash);
		/*$('html, body').animate({
		'scrollTop': $(hash).offset().top - 50
		}, 600, 'easeInOutExpo', function() {
		 window.location.hash = hash;
		});
		*/
	});
};
  OnePageNavigation();

	$("body").on("click", ".sidebar-box a.btn", function(e) {
		//e.preventDefault();
		var hash = this.hash;
		localStorage.setItem('hash', hash);
		//alert(hash)
		/*window.location.hash = hash;
		console.log(hash);
		$('html, body').animate({
		'scrollTop': $(hash).offset().top - 50
		}, 600, 'easeInOutExpo', function() {
		 window.location.hash = hash;
		});*/
		
	});
	
	//hash = localStorage.getItem('hash')
	if ( localStorage.getItem('hash') ) {
		hash = localStorage.getItem('hash')
		$('html, body').animate({
		'scrollTop': $(hash).offset().top - 50
		}, 600, 'easeInOutExpo', function() {
		 window.location.hash = hash;
		 localStorage.setItem('hash', false);
		});		
	}
	
  var siteScroll = function() {

  	

  	$(window).scroll(function() {

  		var st = $(this).scrollTop();
		//console.log(st)
  		if (st > 0) {
			//alert('sticky')
  			$('#site-header').addClass('js-sticky-header');
			//$(".js-sticky-header").sticky({topSpacing:0});
  		} else {
			//alert('remove sticky')
  			//$('#site-header').unwrap();
  			$('#site-header').removeClass('js-sticky-header');
  		}
  		if (st > 100) {
  			$('.js-sticky-header').addClass('shrink');
  		} else {
  			$('.js-sticky-header').removeClass('shrink');
  		}

  	}) 

  };
  siteScroll();

  // Stellar
  $(window).stellar({
  	horizontalScrolling: false,
    responsive: true,
  });


  var counter = function() {
		
		$('#about-section').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number > span').each(function(){
					var $this = $(this),
						num = $this.data('number');
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	 var siteIstotope = function() {
  	/* activate jquery isotope */
	  var $container = $('#posts').isotope({
	    itemSelector : '.item',
	    isFitWidth: true
	  });

	  $(window).resize(function(){
	    $container.isotope({
	      columnWidth: '.col-sm-3'
	    });
	  });
	  
	  $container.isotope({ filter: '*' });

	    // filter items on button click
	  $('#filters').on( 'click', 'button', function(e) {
	  	e.preventDefault();
	    var filterValue = $(this).attr('data-filter');
	    $container.isotope({ filter: filterValue });
	    $('#filters button').removeClass('active');
	    $(this).addClass('active');
	  });
  }

  siteIstotope();

});