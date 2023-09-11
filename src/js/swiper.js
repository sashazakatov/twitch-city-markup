const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 15,
  initialSlide: 1,
  loop: true,
  mousewheel: true,
  grabCursor: true,

  breakpoints: {
    768: {
      slidesPerView: 2.5,
    },
    1200: {
      slidesPerView: 3,
    },
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});