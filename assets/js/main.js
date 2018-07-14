(function($){
	"use strict"
	jQuery(document).ready(function($){
		// smooth-scroll-activation 
		$(".header-btn .btn-nav").on('click', function(event){
			var linkHref = $(this).attr("href");
			$("html,body").animate({
				scrollTop: $(linkHref).offset().top 
			},1000);
			event.preventDefault();
		});
	});
	
	jQuery(window).on('load', function(){
		// site-preloader-activation
		$(".jaria-preloader").fadeOut(500);
	});
})(jQuery);