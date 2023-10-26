const showMenuBtn = document.querySelector(".menu-icon");
const closeMenu = document.querySelector(".close-icon");

showMenuBtn.addEventListener('click', ()=>{
    let menu = document.querySelectorAll(".menu");
    menu.forEach(function(menu){
        menu.classList.add("show-menu");
    });
});


closeMenu.addEventListener('click',()=>{
    let menu = document.querySelectorAll(".menu");
    menu.forEach(function(menu){
        menu.classList.remove("show-menu");
    });
});
