
$(document).ready(function(){
    $('.owl-carousel2').owlCarousel({
        rtl: true,
        loop:true,
        margin:10,
        dots:false,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 3000,
        autoplaySpeed: 3000,
        responsive:{
            1200: {
                items: 6
            },
            992: {
                items: 4
            },
            768: {
                items: 4
            },
            480: {
                items: 3
            },
            300: {
                items: 2
            },
            0: {
                items: 2
            }
        }
    });

});

$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 6,
        rtl:false,
        loop: true,
        dots:false,
        margin: 20,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 3000,
        autoplaySpeed: 3000,
        responsive:{
            1200: {
                items: 6
            },
            992: {
                items: 4
            },
            768: {
                items: 4
            },
            480: {
                items: 3
            },
            300: {
                items: 2
            },
            0: {
                items: 2
            }
        }
    });

});

