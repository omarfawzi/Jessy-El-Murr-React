const testimonials = $('.testimonials-slider');
testimonials.slick({
    centerMode: true,
    centerPadding: '0%',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0%',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0%',
                slidesToShow: 1
            }
        }
    ],
    arrows:true,
    appendArrows:$('#testimonials_arrows'),
    prevArrow: '<a href="javascript:;"><img src="/src/static/img/arrow-left.png" style="margin-right: 5px;width: 30%;"></a>',
    nextArrow: '<a href="javascript:;"><img src="/src/static/img/arrow-right.png" style="margin-left: 11px;width: 28%"></a>',
    infinite: false
});

testimonials.on('afterChange', function(event, slick, currentSlide){
    changeTestimonialsOpacity(currentSlide);
});

var changeTestimonialsOpacity = function(currentSlide) {
    var prev = currentSlide-1 ;
    var next = currentSlide+1 ;
    var element = $('.testimonials-slider');
    element.find('[data-slick-index="'+currentSlide+'"]').css('opacity',1);
    element.find('[data-slick-index="'+prev+'"]').css('opacity',0.2);
    element.find('[data-slick-index="'+next+'"]').css('opacity',0.2);
};