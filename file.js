//Services Event Section :
let more = document.querySelectorAll('.more');
let item = document.querySelector('.service-item');

for(let i = 0; i < more.length; i++){
  more[i].addEventListener('click', function(){
    more[i].parentNode.classList.toggle('active');
  })
}

// Banner autoplay slider:
var copy = document.querySelector(".slide").cloneNode(true);
document.querySelector(".banner").appendChild(copy);

// Slide Event section:
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    600:{
      slidesPerView: 2,
    },
    968:{
      slidesPerView: 3,
    },
  },
});
