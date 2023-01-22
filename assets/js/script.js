new Swiper(".company-slider", {
    slidesPerView: 2,
    spaceBetween: 2,
    loop: true,
    breakpoints: {
        576: {
            slidesPerView: 3,
            spaceBetween: 5,
        },
        992: {
            slidesPerView: 6
        }
    }
});

$(document).ready(function () {
    let distanceFromRight = $(window).width() - ($(".macbook-section").offset().left + $(".macbook-section").width());

    $(".macbook-section").css('right', `-${distanceFromRight}px`)

    $(document).scroll( function() {
        let top = $(this).scrollTop();

        if (top > 120) {
            $('.general_header').addClass('scrolled')
        } else {
            $('.general_header').removeClass('scrolled')
        }
    });

    $(window).on("resize", function() {
        let distanceFromRight = $(window).width() - ($(".macbook-section").offset().left + $(".macbook-section").width());

        $(".macbook-section").css('right', `-${distanceFromRight}px`)
    });

    $('.menu-opener').click(function () {
        $('.header-nav').addClass('opened')
    })

    $('.menu-closer').click(function () {
        $('.header-nav').removeClass('opened')
    })


});