// slider
new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  initialSlide: 1,
  centeredSlides: true,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    prevEl: ".slider__arrow_left",
    nextEl: ".slider__arrow_right",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
      centeredSlides: false,
    },
    1180: {
      slidesPerView: 3,
      spaceBetween: 100,
      centeredSlides: true,
    },
  },
});
