// const showBtn = document.getElementsByTagName('label');
// const rowDiv = document.querySelectorAll('.row');

// const nextElement = rowDiv.nextElementSibling;
// const previousElement = rowDiv.previousElement;

// for(let i = 0; i < showBtn.length; i++){
//     showBtn[i].addEventListener("click",function(){ 
//         rowDiv.forEach((ele) => {
//             ele.previousElementSibling.remove('show');
//             nextElement.remove('show');
//         });
//     })
// }

// FAQ's section :
const accordion = document.getElementsByClassName('content-box');

for(let i = 0; i < accordion.length; i++){

    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active');
        console.log(accordion)
    });
}
