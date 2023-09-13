const swiperClosestToures = function () {
  // eslint-disable-next-line
  new Swiper('.closest-tours__swiper', {

    navigation: {
      nextEl: '.closest-tours__swiper-button-next',
      prevEl: '.closest-tours__swiper-button-prev',
    },

    breakpoints: {
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        allowTouchMove: false,
      },
    },
  });
};

export {swiperClosestToures};
