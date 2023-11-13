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
    });
});