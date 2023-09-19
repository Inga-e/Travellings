const swiperFeedback = function () {
  // eslint-disable-next-line
  new Swiper('.feedback__swiper', {

    navigation: {
      nextEl: '.feedback__button--forward',
      prevEl: '.feedback__button--back',
    },

    autoHeight: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },

      // when window width is >= 768px
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        allowTouchMove: true,
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        allowTouchMove: false,
      },
    },
  });
};

export {swiperFeedback};
