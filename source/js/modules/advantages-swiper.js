const swiperAdvantages = function () {
    // eslint-disable-next-line
    new Swiper('.advantages__swiper', {
        loop: true,

        navigation: {
            nextEl: '.advantages__button--forward',
            prevEl: '.advantages__button--back',
        },

        breakpoints: {
            320: {
                //slidesPerView: 1,
                //spaceBetween: 30,
                enabled: false,
            },

            // when window width is >= 768px
            768: {
                slidesPerView: 'auto',
                //spaceBetween: 30,
                //allowTouchMove: true,
                enabled: false,
            },
            // when window width is >= 1200px
            1200: {
                slidesPerView: 'auto',
                spaceBetween: 30,
                centeredSlides: true,
                allowTouchMove: false,
                enabled: true,
            },
        },
    });
};

export {swiperAdvantages};
