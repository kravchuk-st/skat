new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 100,
  slidesPerGroup: 1,
  initialSlide: 1,
  centeredSlides: true,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    prevEl: ".slider__arrow_left",
    nextEl: ".slider__arrow_right",
  },
});