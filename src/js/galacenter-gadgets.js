const sliderGadgetsSwiperThumb = new Swiper(".slider-gadgets-swiper-thumb", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    observer: true,
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
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: sliderGadgetsSwiperThumb,
    },
    breakpoints: {
/*        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            centeredSlides: false,
            slidesOffsetBefore: 0,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 1,
            initialSlide: 0,
            centeredSlides: true,
            slidesOffsetBefore: 0,
        },
        1024: {
            slidesPerView: 3,
            initialSlide: 1,
            centeredSlides: true,
            slidesOffsetBefore: -80,
        },*/
    }
});



function imgHeight(){
    const currentImg = document.querySelector('.slider-gadgets__body .swiper-slide-active .slider-gadgets__img');
    const currentHeight = currentImg.clientHeight;
    const pointHeight = currentHeight / optionItem().length;
    console.log(pointHeight);
}
function optionItem(){
    const items = document.querySelectorAll('.slider-gadgets__body .swiper-slide-active .slider-gadgets__option-item')
    let arrItem = [];
    for (let i = 0; i < items.length; i++) {
        let rect = items[i].getBoundingClientRect();
        arrItem.push(rect.left);
        items[i].appendChild(lineCreate(rect.top, rect.bottom, rect.left, rect.right, rect.width));
        console.log(rect)
    }
    return arrItem;
}

function lineCreate(top, bottom, left, right, width){
    const newDiv = document.createElement("hr")
    newDiv.className = 'slider-gadgets__line';
    newDiv.style.cssText=`top: ${top}px;
    bottom: ${bottom}px;
    left: ${left}px;
    right: ${right}px;
    width: ${width}px;
  `;
    return newDiv;
}