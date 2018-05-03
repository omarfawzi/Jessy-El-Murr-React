import React from 'react';

const params = {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 0,
    navigation: {
        nextEl: '.nextArrow',
        prevEl: '.prevArrow'
    },
    renderPrevButton: () => <a className={'nextArrow'} href="javascript:"><img
        src="/src/static/img/arrow-right.png"/></a>,
    renderNextButton: () => <a className={'prevArrow'} href="javascript:"><img
        src="/src/static/img/vector-smart-object-copy-3.png"/></a>
};

export default params;