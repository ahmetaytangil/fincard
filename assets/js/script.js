new Swiper(".company-slider", {
    slidesPerView: 6,
    spaceBetween: 5,
    loop: true
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
});