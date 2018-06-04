!function($) {
  var mainHeader = $('#navbar'),
  		secondaryNavigation = $('.cd-secondary-nav'),
  		//this applies only if secondary nav is below intro section
  		belowNavHeroContent = $('.sub-nav-hero'),
  		headerHeight = mainHeader.height();

  	//set scrolling variables
  	var scrolling = false,
  		previousTop = 0,
  		currentTop = 0,
  		scrollDelta = 2,
  		scrollOffset = 100;

  	mainHeader.on('click', '.nav-trigger', function(event){
  		// open primary navigation on mobile
  		event.preventDefault();
  		mainHeader.toggleClass('nav-open');
  	});

  	$(window).on('scroll', function(){
  		if( !scrolling ) {
  			scrolling = true;
  			(!window.requestAnimationFrame)
  				? setTimeout(autoHideHeader, 250)
  				: requestAnimationFrame(autoHideHeader);
  		}
  	});

  	$(window).on('resize', function(){
  		headerHeight = mainHeader.height();
  	});

  	function autoHideHeader() {
  		var currentTop = $(window).scrollTop();

  		( belowNavHeroContent.length > 0 )
  			? checkStickyNavigation(currentTop) // secondary navigation below intro
  			: checkSimpleNavigation(currentTop);

  	   	previousTop = currentTop;
  		scrolling = false;
  	}

  	function checkSimpleNavigation(currentTop) {
  		//there's no secondary nav or secondary nav is below primary nav
  	    if (previousTop - currentTop > scrollDelta) {
  	    	//if scrolling up...
  	    	mainHeader.removeClass('is-hidden');
  	    } else if( currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
  	    	//if scrolling down...
  	    	mainHeader.addClass('is-hidden');
  	    }
	  }

	  (function() {
		$("#views-exposed-form-solr-search-content-page-1 input").attr("placeholder", "Enter search term...");

		$(".open-form").click(function(){
			$(".open-form").hide();
			$(".close-form").css("display","block");
			$(".search-block-form").show();
			$(".search-block-form input").focus();
			$("a.logo2").hide();
			return false;
		});
		$(".close-form").click(function(){
			$(".close-form").hide();
			$(".open-form").css("display","block");
			$(".search-block-form").hide();
			$("a.logo2").show();
			return false;
		});

	})();


	// if(screen.width >= 768) {
	// 	$('.navbar').addClass('navbar-fixed-top');
	// 	$('body').css("margin-top", 0);
	// } else {
	// 	$('.navbar').removeClass('navbar-fixed-top navbar-fixed').addClass("navbar-static-top");
	// 	$('body').css({"padding-top": 0, "margin-top": 0});
	// }

}(jQuery);

