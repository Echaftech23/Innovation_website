const signIn = document.querySelector(".sign-in");
const signUp = document.querySelector(".sign-up");

const hideSection = document.querySelector(".hide-section");

document.querySelector('.first-btn').addEventListener('click',()=>{
    signIn.classList.add("hide-section");
    signUp.classList.remove("hide-section");
    signUp.style.transition = "all 1s ease";
});
document.querySelector('.second-btn').addEventListener('click',()=>{
    signIn.classList.remove("hide-section");
    signUp.classList.add("hide-section");
});