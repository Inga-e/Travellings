const swiperGallery = function () {
  // eslint-disable-next-line
  new Swiper('.gallery__swiper', {

    navigation: {
      nextEl: '.gallery__button--next',
      prevEl: '.gallery__button--back',
    },

    grid: {
      rows: 2,
    },

    autoHeight: false,
    slidesPerView: 'auto',
    allowTouchMove: true,

    breakpoints: {
      // when window width is >= 1200px
      1200: {
        //  slidesPerView: 'auto',
        allowTouchMove: false,
      },
    },
  });
};

export {swiperGallery};
