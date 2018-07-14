(function($) {
    "use strict"
    jQuery(document).ready(function($) {
        // mobile-menu-activation
        $('.custom-navbar').on('click', function() {
            $('.main-menu ul').slideToggle(600);
        });
        $(window).on('resize', function() {
            if ($(window).width() > 768) {
                $('.main-menu ul').removeAttr('style');
            }
        });
        // sticky-menu-activation
        $(window).on('scroll', function() {
            var menuFixed = $('html').scrollTop();
            var menuOuterHeight = $('.header-top-area').outerHeight();
            if (menuFixed > menuOuterHeight) {
                $('.header-top-area').addClass('sticky');
            } else $('.header-top-area').removeClass('sticky');
        });
        // smooth-scroll-activation 
        $(".main-menu ul li a").on('click', function(event) {
            var linkHref = $(this).attr("href");
            var headerHeight = $(".header-top-area").outerHeight();
            $("html, body").animate({
                scrollTop: $(linkHref).offset().top - headerHeight
            }, 1200);
            event.preventDefault();
        });
        // tab-accordion-activation 
        $(".tab-accordion ul li").on('click', function() {
            var tabClass = $(this).attr("class");
            $(this).addClass("active").siblings().removeClass("active");
            $("." + tabClass + "-content").addClass("active").siblings().removeClass("active");
        });
        // video-popup-activation 
        $('.video-icon a').magnificPopup({
            type: 'iframe'
        });
        // tab-slider-activation
        $('.screenshot-slider').owlCarousel({
            loop: true,
            margin: 0,
            items: 3,
            autoplay: true,
            autoplayTimeout: 3000,
            nav: false,
            navText: false,
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 3
                },
                991: {
                    items: 3
                }
            }
        });
        // client-slider-activation
        $('.client-slider').owlCarousel({
            loop: true,
            margin: 30,
            items: 2,
            autoplay: true,
            autoplayTimeout: 3000,
            nav: false,
            navText: false,
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 1
                },
                991: {
                    items: 2
                }
            }
        });
        // to-top-activation 
        $(".to-top").on('click', function() {
            $("html").animate({
                "scrollTop": "0"
            }, 2000);
        });
        $(window).on('scroll', function() {
            var toTopVisible = $("html").scrollTop();
            if (toTopVisible > 500) {
                $(".to-top").fadeIn();
            } else {
                $(".to-top").fadeOut();
            }
        });
    });

    jQuery(window).on('load', function() {
        // animation-activation
        new WOW().init();
        // appload-preloader-activation 
        $('.appload-preloader').fadeOut(500);
    });
})(jQuery);