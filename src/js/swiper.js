const swiper = new Swiper('.swiper', {
  // Optional parameters  
  loop: true,
  centeredSlides: true,
  FollowFinger: false,
  
  autoplay: {
   delay: 5000,
  },
  

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});