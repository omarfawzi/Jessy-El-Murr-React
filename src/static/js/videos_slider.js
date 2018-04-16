const videos = $('.videos-slider');
videos.slick({
    centerMode: true,
    centerPadding: '0%',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0%',
                slidesToShow: 2
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
    appendArrows:$('#videos_arrows'),
    prevArrow:'<a href="javascript:;"><img src="./img/vector-smart-object-copy-3.png" style="width:8%;"></a>',
    nextArrow:'<a href="javascript:;"><img src="./img/arrow-right.png" style="width:5%;"></a>',
    infinite:true
});

videos.on('afterChange', function(event, slick, currentSlide){
    changeVideosOpacity(currentSlide);
});

var changeVideosOpacity = function(currentSlide) {
    var prev = currentSlide-1 ;
    var next = currentSlide+1 ;
    var element = $('.videos-slider');
    element.find('[data-slick-index="'+currentSlide+'"]').css('opacity',1);
    element.find('[data-slick-index="'+prev+'"]').css('opacity',0.5);
    element.find('[data-slick-index="'+next+'"]').css('opacity',0.5);
};