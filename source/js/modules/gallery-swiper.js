const swiperGallery = function () {
    // eslint-disable-next-line
    new Swiper('.gallery__swiper', {

        navigation: {
            nextEl: '.gallery__button--next',
            prevEl: '.gallery__button--back',
        },

        autoHeight: false,

        grid: {
            rows: 2,
        },

        breakpoints: {
            //320: {
            //    slidesPerView: 1,
            //    spaceBetween: 30,
            //},

            // when window width is >= 768px
            768: {
                //    slidesPerView: 'auto',
                //    spaceBetween: 5,
                //    allowTouchMove: true,
            },
            // when window width is >= 1200px
            1200: {
                slidesPerView: 5,
                spaceBetween: 5,
                allowTouchMove: false,
                enabled: true,
            },
        },
    });
};

export {swiperGallery};
