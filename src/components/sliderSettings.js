import React from 'react';
import PrevArrow from './prevArrow';
import NextArrow from './nextArrow';

const sliderSettings = {
    centerMode: false,
    centerPadding: '0%',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '0%',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '0%',
                slidesToShow: 1
            }
        }
    ],
    arrows: true,
    // appendArrows:$('#videos_arrows'),
    prevArrow: <PrevArrow/>,
    nextArrow: <NextArrow/>,
    infinite: false
};

export default sliderSettings;