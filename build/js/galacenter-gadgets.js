const sliderGadgetsSwiperThumb = new Swiper(".slider-gadgets-swiper-thumb", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 3,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    observer: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            centeredSlides: false,
            slidesOffsetBefore: 0,
            spaceBetween: 0,
        },
        480: {
            slidesPerView: 3,
            centeredSlides: false,
            slidesOffsetBefore: 0,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 4,
            initialSlide: 0,
            centeredSlides: true,
            slidesOffsetBefore: 0,
        },
    }
});

const sliderGadgetsSwiper = new Swiper('.slider-gadgets-swiper', {
    loop: true,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    observer: true,
    spaceBetween: 0,
    slidesPerView: 'auto',
    initialSlide: 1,
    centeredSlides: false,
    speed: 300,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: sliderGadgetsSwiperThumb,
    },
});


