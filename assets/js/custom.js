(function($) {
$(document).ready(function(){
    /*sticky menu when scroll*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $(".header-section").addClass("sticky_menu");
        } else {
            $(".header-section").removeClass("sticky_menu");
        }
    });


    //back to top show when scroll
    $(".back_to_top i.fa").css("display", "none");
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 250) {
            $(".back_to_top i.fa").css("display", "none");
        } else {
            $(".back_to_top i.fa").css("display", "block");
        }
    });
    $(".back_to_top i.fa").on("click",function () {
        $("html").animate({
            scrollTop: 0
        }, 800);
    });


    //time slider
    $('.all-times').owlCarousel({
        loop: false,
        margin: 0,
        autoplay: false,
        responsiveClass: true,
        nav: true,
        dots: false,
        mouseDrag: true,
        touchDrag: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 1,
                nav: true
            }
        }
    });


    //hero slider
    $('.hero-slider').owlCarousel({
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        loop:true,
        margin:10,
        autoplay: true,
        autoplayHoverPause:true,
        responsiveClass:true,
        nav:true,
        dots:false,
        mouseDrag:true,
        touchDrag: true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:true
            },
            1000:{
                items:1,
                nav:true,
                loop:true
            }
        }
    });
    //slider animation
    $('.hero-slider').on('translate.owl.carousel',function () {
        $('.slide-cont h2, .theme-btn').removeClass('animated fadeInDown').css('opacity','0');
        $('.slide-cont h3').removeClass('animated fadeInLeft').css('opacity','0');
        $('.slide-cont h4').removeClass('animated fadeInRight').css('opacity','0');
    });
    $('.hero-slider').on('translated.owl.carousel',function () {
        $('.slide-cont h2, .theme-btn').addClass('animated fadeInDown').css('opacity','0');
        $('.slide-cont h3').addClass('animated fadeInLeft').css('opacity','1');
        $('.slide-cont h4').addClass('animated fadeInRight').css('opacity','1');
    });


    /*feedback carousel*/
    $('#feedback-slider').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: true
            },
            600: {
                items: 1,
                nav: true,
                loop: true
            },
            1000: {
                items: 1,
                nav: true,
                loop: true
            }
        }
    });


    //WoW js activation
    //new WOW().init();

    //responsive slick nav menu activation
    /*$('#nav').slicknav({
        prependTo:'.responsive-mobile-menu',
    });*/


});
})( jQuery );