const sliderGadgetsSwiper = new Swiper('.slider-gadgets-swiper', {
    loop: true,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    observer: true,
    direction: 'horizontal',
    autoplayStopOnLast: false,
    spaceBetween: 10,
    slidesPerView: 3,
    initialSlide: 1,
    centeredSlides: true,
    slidesOffsetBefore: -100,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});