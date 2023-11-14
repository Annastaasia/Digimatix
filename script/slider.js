document.addEventListener('DOMContentLoaded', function () {
    $("#tabs").tabs({
        activate: function (event, ui) {
            $(ui.newPanel).find('.slider').slick('refresh');
        },
        active: 1,
    });
    $('.slider').slick({
        infinite: false,
        dots: true,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: $('#prev'),
        nextArrow: $('#next'),
        responsive: [
            {
                breakpoint: 1744,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 815,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});