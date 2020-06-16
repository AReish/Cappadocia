$(function(){
    $('.fairy-tail__slider , .our-trip__slider').slick({
        prevArrow: '<button class="slick-btn slick-prev"><img src="images/arrow-prev.svg"></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="images/arrow-next.svg"></button>',
        autoplay: true,
        infinine: true,
        fade: true,
        responsive: [
            {
            breakpoint: 601,
            settings: {
                arrows: false
            }
            } 
        ]
    });

    $(".menu, .our-trip__body").on("click","a", function (event) {
                event.preventDefault();
                var id  = $(this).attr('href'),
                    top = $(id).offset().top;
                $('body,html').animate({scrollTop: top}, 1500);
            });
        

});
