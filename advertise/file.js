//Services Event Section :
let more = document.querySelectorAll('.more');
let item = document.querySelector('.service-item');

let i;

for(i = 0; i < more.length; i++){
  more[i].addEventListener('click', function(){
    more[i].parentNode.classList.toggle('active');
  })
}

// -- why choose us section --

const chooseContainer = document.querySelectorAll('.choose-container');
const chooseLinks = document.querySelectorAll('.choose-links');

chooseLinks.forEach((el) => {
  document.querySelector('.choose-links.link-1').classList.add("show");
  el.addEventListener("click", () => {
    const tergetDiv = el.getAttribute("data-num");
    chooseLinks.forEach((el) => {
      el.classList.remove("show");
    });
    chooseContainer.forEach((ele) => {
      ele.classList.remove("show");
    });
    document.querySelector(`.choose-container.card-${tergetDiv}`).classList.add("show");
    document.querySelector(`.choose-links.link-${tergetDiv}`).classList.add("show");
  });
});

