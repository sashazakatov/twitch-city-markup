const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 15,
  initialSlide: 1,
  autoplay: {
   delay: 3000,
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