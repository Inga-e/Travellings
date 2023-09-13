const swiperInstructors = function () {
    // eslint-disable-next-line
    new Swiper('.education__instructors-swiper', {

        navigation: {
            nextEl: '.education__instructors-button--next',
            prevEl: '.education__instructors-button--back',
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 30,
            },

            // when window width is >= 768px
            768: {
                slidesPerView: 3,
                spaceBetween: 18,
            },
            // when window width is >= 1200px
            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
                allowTouchMove: false,
            },
        },
    });
};

export {swiperInstructors};
