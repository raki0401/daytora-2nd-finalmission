//swiper
var swiper = new Swiper('.swiper-container', {
  slidesPerView: "auto",
  spaceBetween: 40,
  freeMode: true,
  
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  breakpoints:{
    300:{
      spaceBetween: 20,
      slidesPerView: "auto",
    },
    768:{
      spaceBetween: 40,
      slidesPerView: "auto",
    },
  }
});