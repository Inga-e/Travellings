const swiperClosestToures = function () {
  // eslint-disable-next-line
  new Swiper('.closest-tours__swiper', {

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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
